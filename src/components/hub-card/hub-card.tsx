import { Component, Host, Prop, h, State } from '@stencil/core';
import '@esri/calcite-components';
import '@esri/calcite-ui-icons';

type ContentMetadata = {
  name: string,
  value: string
}

@Component({
  tag: 'hub-card',
  styleUrl: 'hub-card.css',
  shadow: true
})


export class HubCard {

  portalUrl: string = "http://www.arcgis.com/sharing/rest/"
  @Prop({ attribute: 'item' }) item: string = "";
  @Prop() image: string;
  @Prop() name: string = "Trash Day";
  @Prop() description: string = "Monday";
  @Prop() contenttype: string = "Local Topic";
  /** Specify the layout of the card */
  @Prop() layout: "horizontal" | "vertical" = "vertical"
  @Prop() url:string = "https://hub.arcgis.com";
  
  // @Prop() content:any;
  
  @State() metadata: Array<ContentMetadata> = []; 

  componentWillRender() {
    // this.metadata = [
    //   {name: "Owner", value: this.content.item.owner},
    //   {name: "Updated", value: timestampToDate(this.content.item.modified)},
    // ]
  }

  render() {
    let output = [];
    let thumbnail = null;
    let details = null;
    
    if(this.image) {
      console.log("item id", this.item)
      
      thumbnail = <img class="content-image" src={`${this.portalUrl}content/items/${this.item}/info/${this.image}`} alt="Thumbnail Image" />
    }
    if(this.contenttype) {
      output.push( <span class="content-type">{this.contenttype}</span> )
    }
    if(this.name) {
      output.push(<div class="content-title"innerHTML={this.name}></div>)
    }
    if(this.description) {
      output.push(<p class="content-summary" innerHTML={this.description}></p>)
    }
    if(this.metadata && this.metadata.length > 0) {
      details = 
        <div class="content-details">
          {this.metadata.map((element) =>
            <div><strong>{element.name}</strong>: {element.value}</div>
          )}
        </div>      
  
    }
    return (
      <Host>
        <div class={`content-card layout-${this.layout}`} >
          {this.url 
            ? <a class="content-link" href={this.url} ></a> : ""}
          {this.image
            ? thumbnail : "" }
          <div class="content-metadata">
            {output}
            {details}
          </div>
        </div>
      </Host>
    )
  }

}
