import { Component, State, h, Prop, Listen} from '@stencil/core';
// import { format } from '../../utils/utils';

import { getMap, queryMap } from '../../utils/proximity-utils'

@Component({
  tag: 'hub-radar',
  styleUrl: 'hub-radar.css',
  shadow: false
})
export class HubRadar {
  textInput: HTMLInputElement;

  @Prop() mapItem: any; //PortalItem
  @Prop() mapItemData: any; //PortalItem
  @Prop() mapCenter: string;
  @Prop() mapZoom: string;
  @Prop() messages: any;

  @Prop({ mutable: true }) address: string;
  @Prop() webmap: string;
  @Prop({ attribute: 'map' }) showMap: boolean = true;

  @State() isLoading: boolean = false;


  @Listen('eventAddressUpdated')
  handleAddressUpdated(event: CustomEvent) {
    event.preventDefault();
    console.log("radar handleUpdateAddress", event.detail)
    this.address = event.detail.address;
    let coordinates = event.detail.coordinates;

    this.mapCenter = `[${coordinates['x']}, ${coordinates['y']}]`;
    this.mapZoom = "16";

    this.isLoading = true;
    queryMap(this.mapItemData, coordinates).then(results => {
      this.messages = results;
      this.isLoading = false;
    });
  }
  
  componentWillLoad() {
    getMap(this.webmap).then(([mapItem, mapItemData]) => {
      this.mapItem = mapItem;
      this.mapItemData = mapItemData;
    });
  }


  render() {
    let output = []
    // Get Address
    let inputProps = {
      address: this.address,
      extent: this.mapItem ? this.mapItem.extent : null,
    };
    output.push(<hub-proximity-input {...inputProps}></hub-proximity-input>)

    if(this.showMap) {
      output.push(<hub-proximity-map class="proximity-map" center={this.mapCenter} zoom={this.mapZoom} webmap={this.webmap}></hub-proximity-map>)
    }
    if(this.isLoading) {
      output.push(<calcite-loader text="Fetching data..." is-active></calcite-loader>)
    } else {  
      // Get Results
      if(this.messages !== undefined && this.messages.length > 0) {
        this.messages.forEach(m => {
          output.push(
            <hub-topic name={m.title} description={m.description}></hub-topic>
          )
        })
      }
    }

    return output    
  }
}
