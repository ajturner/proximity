import { Element, Listen, Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';
import { getLocation, suggestLocations } from '../../utils/radar-utils'

@Component({
  tag: 'hub-radar-input',
  styleUrl: 'radar-input.css',
  shadow: true
})
export class radarInput {

  @Element() element: HTMLElement;

  /** Default address to search */
  @Prop({ mutable: true }) address: string;

  /** Geographic extent limit for geocoding */
  @Prop({ reflect: true }) extent: any;

  /** Emits the {address, coordinates} of the geocoded result */
  @Event() eventAddressUpdated: EventEmitter;

  @State() inputAddress: string;
  @State() addressSuggestions: Array<any>;

  componentWillLoad() {
    this.inputAddress = this.address;
  }

  @Listen("queryInput")
  queryInputHandler(event: CustomEvent): string {
    this.inputAddress = event.detail;

    suggestLocations(this.inputAddress, this.extent).then( suggestions => {      
      this.addressSuggestions = Array.from(suggestions.suggestions, s => s['text'])
    })
    return 'true';
  }

  @Listen("querySelect")
  querySelectHandler(event: CustomEvent): string {
    console.log("radar-input querySelect", event)
    getLocation(event.detail, this.extent).then(coordinates => {
      this.eventAddressUpdated.emit({
        'address': this.address,
        'coordinates': coordinates
      });
    }).catch(error => {
      console.log('Geocode error', error)
    });
    return 'true';
  }



  render() {
    return (
      <hub-suggest-input
        placeholder="Search for an address..."
        query={this.address}
        suggestions={this.addressSuggestions}
      ></hub-suggest-input>
    );
  }
}
