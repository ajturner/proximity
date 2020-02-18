import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';
import { getLocation, suggestLocations } from '../../utils/sonar-blip'

@Component({
  tag: 'hub-proximity-input',
  styleUrl: 'proximity-input.css',
  shadow: true
})
export class ProximityInput {

  @State() inputAddress: string;
  @Prop({ mutable: true }) address: string;
  @Prop({ reflect: true }) extent: any;
  @Event() eventAddressUpdated: EventEmitter;
  
  handleUpdateAddress(event) {
    event.preventDefault();
    this.address = this.inputAddress;
    console.log("handleUpdateAddress", this.extent)
    getLocation(this.address, this.extent).then(coordinates => {

      this.eventAddressUpdated.emit({
        "address": this.address,
        "coordinates": coordinates
      });
    });
  }

  componentWillLoad() {
    this.inputAddress = this.address;
  }

  handleInputChange(event): string {
    console.log("input handleInputChange", event.target.value)
    this.inputAddress = event.target.value;
    suggestLocations(this.inputAddress, this.extent).then( suggestions => {
      console.log("input suggestions", suggestions);
    })
    return "true";
  }

  
  render() {
    return (
      <form id="annotation-form" onSubmit={(e) => this.handleUpdateAddress(e)}>
        <label>
          <input placeholder="Search a local address..." type="text" value={this.inputAddress} onInput={(event) => this.handleInputChange(event)} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }

  // Xeph

  // @Element() element: HTMLElement;

  // @State() showSuggestions: boolean;
  // @State() inputValue = '';
  // @State() suggestionArr: string[] = [];
  // @State() selectedSuggestionIndex: number;

  // /** Value for input placeholder */
  // @Prop() placeholder: string = '';

  // /** Values that the auto-complete textbox should search for */
  // @Prop() suggestionlist: string[] = ['1600 Pennsylvania', '300 4th St NE'];

  // @Watch('suggestionlist')
  // validateSuggestionlist(newValue: string[]) {
  //   const sortedArr = newValue.slice().sort();
  //   let results = [];
  //   for (let i = 0; i < sortedArr.length - 1; i++) {
  //     if (sortedArr[i + 1] == sortedArr[i]) {
  //     results.push(sortedArr[i]);
  //     }
  //   }
  //   if (results.length > 0) {
  //     throw new Error(`suggestion list contains duplicate values: ${results.toLocaleString()}`);
  //   }
  // }

  // @Listen('window:click') 
  // handleWindowClick(e: Event) {
  //   if (!this.element.contains((e.target as HTMLElement))) {
  //     this.showSuggestions = false;
  //     this.selectedSuggestionIndex = undefined;
  //   }
  // }

  // componentWillLoad() {
  //   this.validateSuggestionlist(this.suggestionlist);
  // }

  // findMatch = (searchTerm: string): string[] => {
  //   if (searchTerm.length === 0) {
  //     return [];
  //   }
  //   return this.suggestionlist.filter(
  //     (term) => term.slice(0, searchTerm.length) === searchTerm && term !== searchTerm
  //   );
  // };

  // onInput = (e) => {
  //   this.inputValue = (e.target as any).value;
  //   this.suggestionArr = this.findMatch(this.inputValue);
  //   this.showSuggestions = true;
  // };

  // onFocus = () => {
  //   this.showSuggestions = true;
  //   this.selectedSuggestionIndex = undefined;
  //   this.suggestionArr = this.findMatch(this.inputValue);
  // }

  // onKeyDown = (e) => {
  //   switch(e.key) {
  //     case 'ArrowUp':
  //       if (this.suggestionArr.length > 0) {
  //         this.selectedSuggestionIndex = 
  //           (this.selectedSuggestionIndex === undefined || this.selectedSuggestionIndex === 0) ?
  //             this.suggestionArr.length - 1 : this.selectedSuggestionIndex - 1;
  //       }
  //       break;
  //     case 'ArrowDown':
  //       if (this.suggestionArr.length > 0) {
  //         this.selectedSuggestionIndex = 
  //           (this.selectedSuggestionIndex === undefined || this.selectedSuggestionIndex === this.suggestionArr.length - 1) ?
  //             0 : this.selectedSuggestionIndex + 1;
  //       }
  //       break;
  //     default: 
  //       break;
  //   }
  // };

  // onKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     if (this.selectedSuggestionIndex !== undefined) {
  //       this.onSelect(this.suggestionArr[this.selectedSuggestionIndex]);
  //     }
  //   }
  // }

  // onSelect = (selection: string) => {
  //   this.inputValue = selection;
  //   this.selectedSuggestionIndex = undefined;
  //   this.showSuggestions = false;
  // }

  // getSuggestionElement = (suggestion): JSX.Element => {
  //   const isSelected = this.selectedSuggestionIndex !== undefined
  //     && suggestion === this.suggestionArr[this.selectedSuggestionIndex];
  //   return (
  //     <li
  //       class={'xeph-li ' + (isSelected ? 'xeph-selected': '')}
  //       onClick={() => this.onSelect(suggestion)}
  //     >
  //       {suggestion}
  //     </li>
  //   );
  // };

  // render() {
  //   return (
  //     <div class='xeph-div'>
  //       <input
  //         class='xeph-input'
  //         type="text"
  //         placeholder={this.placeholder}
  //         value={this.inputValue}
  //         onInput={e => this.onInput(e)}
  //         onFocus={() => this.onFocus()}
  //         onKeyDown={e => this.onKeyDown(e)}
  //         onKeyPress={e => this.onKeyPress(e)}
  //       />
  //       <ul class='xeph-ul' role='listbox' hidden={!this.showSuggestions}>
  //         {this.suggestionArr.map(suggestion => this.getSuggestionElement(suggestion))}
  //       </ul>
  //     </div>  
  //   );
  // }
}
