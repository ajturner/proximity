import { Component, State, h, Prop} from '@stencil/core';
// import { format } from '../../utils/utils';
import '@esri/calcite-components';
import '@esri/calcite-ui-icons';
import {SonarBlip} from './sonar-blip'

@Component({
  tag: 'hub-radar',
  styleUrl: 'hub-radar.css',
  shadow: true
})
export class HubRadar {
  textInput: HTMLInputElement;

  @State() inputValue: string;
  @State() messages: any;
  @Prop({ mutable: true }) address: string;
  @Prop({ mutable: true }) webmap: string;

  getMessages(): void {
    // First clear previous messages 
    this.messages = [];

    let sb = new SonarBlip
    sb.getMap(this.webmap, this.address).then(results => {
      console.log("getMap", results)
      this.messages = results;
    })
  }

  componentWillLoad() {
    this.inputValue = this.address;
    this.getMessages();
  }
  handleInputChange(event): string {
    console.log("handleInputChange", event.target.value)
    this.inputValue = event.target.value;
    return "true";
  }
  handleUpdateAddress(event) {
    event.preventDefault();
    console.log("handleUpdateAddress", this.inputValue)
    this.address = this.inputValue;
    this.getMessages();
  }

  render() {
    let output = []

    // Get Address
    output.push(<form id="annotation-form" onSubmit={(e) => this.handleUpdateAddress(e)}>
        <label>
          Location Address:
          <input type="text" value={this.inputValue} onInput={(event) => this.handleInputChange(event)} />
        </label>
        <input type="submit" value="Search" />
      </form>)

    // Get Results
    if(this.messages === undefined || this.messages.length == 0) {
      output.push(<calcite-loader text="Fetching data..." is-active></calcite-loader>)
    } else {
      let blips = [];
      console.log("messages", this.messages)
      this.messages.forEach(m => {
        blips.push(<calcite-accordion-item active item-title={m.title} innerHTML={m.description}>
        </calcite-accordion-item>)
      })

      output.push(<calcite-accordion>
        {blips}
        </calcite-accordion>)
    }

    return output    
  }
}
