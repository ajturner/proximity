import { Component, State, h, Prop, Listen} from '@stencil/core';
// import { format } from '../../utils/utils';

import { getMap, getLocation } from '../../utils/sonar-blip'

@Component({
  tag: 'hub-radar',
  styleUrl: 'hub-radar.css',
  shadow: false
})
export class HubRadar {
  textInput: HTMLInputElement;

  @State() messages: any;
  @Prop({ mutable: true }) address: string;
  @Prop() webmap: string;

  @State() mapCenter: string = "[-80, 40]";
  @State() mapZoom: string = "4";

  @Listen('eventAddressUpdated')
  handleAddressUpdated(event: CustomEvent) {
    event.preventDefault();
    console.log("radar handleUpdateAddress", event.detail)
    this.address = event.detail;
    getLocation(this.address).then(coordinates => {
      this.mapCenter = `[${coordinates['x']}, ${coordinates['y']}]`;
      this.mapZoom = "16";
      
      getMap(this.webmap, this.address, coordinates).then(results => {
        this.messages = results;
      });
    })
    
  }
  componentWillLoad() {
    getMap(this.webmap, this.address).then(results => {
      this.messages = results;
    });
  }


  render() {
    let output = []

    // Get Address
    output.push(<hub-proximity-input address={this.address}></hub-proximity-input>)
    output.push(<em>Searching '{this.address}'</em>)

    output.push(<hub-proximity-map class="proximity-map" center={this.mapCenter} zoom={this.mapZoom} webmap={this.webmap}></hub-proximity-map>)
    // output.push(<hub-proximity-map center="[-118, 42]" zoom="4"></hub-proximity-map> )
    // Get Results
    if(this.messages === undefined || this.messages.length == 0) {
      output.push(<calcite-loader text="Fetching data..." is-active></calcite-loader>)
    } else {
      this.messages.forEach(m => {
        output.push(
          <hub-topic name={m.title} description={m.description}></hub-topic>
        )
      })
    }

    return output    
  }
}
