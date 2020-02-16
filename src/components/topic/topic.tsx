import { Component, Prop, h } from '@stencil/core';
import '@esri/calcite-components';
import '@esri/calcite-ui-icons';

@Component({
  tag: 'hub-topic',
  styleUrl: 'topic.css',
  shadow: true
})
export class Topic {

  @Prop({ mutable: true }) name: string;
  @Prop({ mutable: true }) description: string;

  render() {
    // console.log("topic", [this.name, this.description])
    return (
      <div class="card">
        <div class="container">
          <h4>{this.name}</h4>
          <p innerHTML={this.description}></p>
        </div>
      </div>
    )
  }

}
