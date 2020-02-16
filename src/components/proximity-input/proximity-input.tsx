import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'hub-proximity-input',
  styleUrl: 'proximity-input.css',
  shadow: true
})
export class ProximityInput {

  @State() inputAddress: string;
  @Prop({ mutable: true }) address: string;
  
  @Event() eventAddressUpdated: EventEmitter;
  
  handleUpdateAddress(event) {
    event.preventDefault();
    console.log("input handleUpdateAddress", [event, this.address, this.inputAddress])
    this.address = this.inputAddress;
    this.eventAddressUpdated.emit(this.address);
  }

  componentWillLoad() {
    this.inputAddress = this.address;
  }

  handleInputChange(event): string {
    console.log("input handleInputChange", event.target.value)
    this.inputAddress = event.target.value;
    return "true";
  }

  
  render() {
    return (
      <form id="annotation-form" onSubmit={(e) => this.handleUpdateAddress(e)}>
        <label>
          Location Address:
          <input type="text" value={this.inputAddress} onInput={(event) => this.handleInputChange(event)} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }

}
