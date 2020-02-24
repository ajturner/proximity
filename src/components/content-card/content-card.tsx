import { Component, Host, h, Prop } from '@stencil/core';
import { getItem, IItem } from "@esri/arcgis-rest-portal";

@Component({
  tag: 'hub-content-card',
  styleUrl: 'content-card.css',
  shadow: true
})
export class ContentCard {

  @Prop() content:string = "4f5c78bfe89a4304aec3a6cfd492d0cd";
  @Prop() layout:string = "horizontal";
  
  @Prop({ mutable: true }) contentItem: IItem = null; 

  componentWillLoad() {
    if(this.contentItem === null) {
      getItem(this.content).then(item => {
        this.contentItem = item;
      })
    }
  }

  render() {
    let output = [];

    if(this.contentItem) {
      output.push( 
        <hub-topic 
          item={this.content}
          contenttype={this.contentItem.type}
          layout={this.layout}
          url={this.contentItem.url}
          image={this.contentItem.thumbnail} 
          name={this.contentItem.title} 
          description={this.contentItem.snippet}
          // content={this.content}
        ></hub-topic> 
      )
    }
    return (
      <Host>
        {output}
      </Host>
    );
  }

}
