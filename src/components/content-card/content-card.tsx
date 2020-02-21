import { Component, Host, h, Prop, State } from '@stencil/core';
import { getItem, IItem } from "@esri/arcgis-rest-portal";

@Component({
  tag: 'hub-content-card',
  styleUrl: 'content-card.css',
  shadow: true
})
export class ContentCard {

  @Prop() content:string;
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
    console.log("content layout", this.layout)
    return (
      <Host>
        <hub-topic 
          item={this.content}
          content-type={this.contentItem.type}
          layout={this.layout}
          url={this.contentItem.url}
          image={this.contentItem.thumbnail} 
          name={this.contentItem.title} 
          description={this.contentItem.snippet}
          // content={this.content}
        ></hub-topic>
      </Host>
    );
  }

}
