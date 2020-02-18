import { Element, Watch, Listen, Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';
import { getLocation, suggestLocations } from '../../utils/proximity-utils'

@Component({
  tag: 'hub-proximity-input',
  styleUrl: 'proximity-input.css',
  shadow: true
})
export class ProximityInput {

  @Element() element: HTMLElement;

  /** Default address to search */
  @Prop({ mutable: true }) address: string;

  /** Geographic extent limit for geocoding */
  @Prop({ reflect: true }) extent: any;

  /** Value for input placeholder */
  @Prop() placeholder: string = 'Search a local address...';

  /** Value for submit button */
  @Prop() submit: string = 'Search';

  /** Values that the auto-complete textbox should search for */
  @Prop() suggestionlist: string[];

  /** Emits the {address, coordinates} of the geocoded result */
  @Event() eventAddressUpdated: EventEmitter;

  @State() inputAddress: string;
  @State() showSuggestions: boolean;
  @State() inputValue = '';
  @State() suggestionArr: string[] = [];
  @State() selectedSuggestionIndex: number;
  
  componentWillLoad() {
    this.inputAddress = this.address;
  }

  @Listen('window:click') 
  handleWindowClick(e: Event) {
    if (!this.element.contains((e.target as HTMLElement))) {
      this.showSuggestions = false;
      this.selectedSuggestionIndex = undefined;
    }
  }

  findMatch = (searchTerm: string): string[] => {
    if (searchTerm.length === 0) {
      return [];
    }
    return this.suggestionlist.filter(
      (term) => term.slice(0, searchTerm.length) === searchTerm && term !== searchTerm
    );
  };

  onInput(e): string {
    this.inputAddress = e.target.value;

    suggestLocations(this.inputAddress, this.extent).then( suggestions => {      
      this.suggestionlist = Array.from(suggestions['suggestions'], s => s['text'])
      this.suggestionArr = this.findMatch(this.inputAddress);
      this.showSuggestions = true;
    })
    return 'true';
  }

  onFocus = () => {
    this.showSuggestions = true;
    this.selectedSuggestionIndex = undefined;
    this.suggestionArr = this.findMatch(this.inputValue);
  }

  onKeyDown = (e) => {
    switch(e.key) {
      case 'ArrowUp':
        if (this.suggestionArr.length > 0) {
          this.selectedSuggestionIndex = 
            (this.selectedSuggestionIndex === undefined || this.selectedSuggestionIndex === 0) ?
              this.suggestionArr.length - 1 : this.selectedSuggestionIndex - 1;
        }
        break;
      case 'ArrowDown':
        if (this.suggestionArr.length > 0) {
          this.selectedSuggestionIndex = 
            (this.selectedSuggestionIndex === undefined || this.selectedSuggestionIndex === this.suggestionArr.length - 1) ?
              0 : this.selectedSuggestionIndex + 1;
        }
        break;
      default: 
        break;
    }
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.selectedSuggestionIndex !== undefined) {
        this.onSelect(this.suggestionArr[this.selectedSuggestionIndex]);
      } else {
        // User <enter> on form <input>
        this.onSelect(this.inputAddress);
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.address = this.inputAddress;
    this.onSelect(this.address);
  }

  onSelect = (selection: string) => {
    this.inputValue = selection;
    this.selectedSuggestionIndex = undefined;
    this.showSuggestions = false;
    getLocation(this.inputValue, this.extent).then(coordinates => {
      this.eventAddressUpdated.emit({
        'address': this.address,
        'coordinates': coordinates
      });
    }).catch(error => {
      console.log('Geocode error', error)
    });
  }

  getSuggestionElement = (suggestion): JSX.Element => {
    const isSelected = this.selectedSuggestionIndex !== undefined
      && suggestion === this.suggestionArr[this.selectedSuggestionIndex];
    return (
      <li
        class={'suggestions-li ' + (isSelected ? 'suggestions-selected': '')}
        onClick={() => this.onSelect(suggestion)}
      >
        {suggestion}
      </li>
    );
  };

  render() {
    return (
      <div class='suggestions-div'>
        <form id='annotation-form' onSubmit={(e) => this.onSubmit(e)}>
          <input
            class='suggestions-input'
            type='text'
            placeholder={this.placeholder}
            value={this.inputValue}
            onInput={e => this.onInput(e)}
            onFocus={() => this.onFocus()}
            onKeyDown={e => this.onKeyDown(e)}
            onKeyPress={e => this.onKeyPress(e)}
          />
          <ul class='suggestions-ul' role='listbox' hidden={!this.showSuggestions}>
            {this.suggestionArr.map(suggestion => this.getSuggestionElement(suggestion))}
          </ul>
          <input type='submit' value={this.submit} />
        </form>
      </div>  
    );
  }
}
