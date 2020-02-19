import { Component, Host, Prop, h, State } from '@stencil/core';
import '@esri/calcite-components';
import '@esri/calcite-ui-icons';
import { timestampToDate } from '../../utils/proximity-utils';

type ContentMetadata = {
  name: string,
  value: string
}

@Component({
  tag: 'hub-topic',
  styleUrl: 'topic.css',
  shadow: true
})


export class Topic {

  portalUrl: string = "http://dcdev.maps.arcgis.com/sharing/rest/"
  @Prop() image: string;
  @Prop() name: string;
  @Prop() description: string;
  @Prop({ attribute: 'content-type' }) type: string;
  @Prop() layout:string = 'horizontal'
  @Prop() url:string;
  
  // @Prop() content:any;
  
  @State() metadata: Array<ContentMetadata> = []; 

  componentWillRender() {
    
    // this.metadata = [
    //   {name: "Owner", value: this.content.item.owner},
    //   {name: "Updated", value: timestampToDate(this.content.item.modified)},
    // ]
  }

  render() {
    console.log("topic url", this.url)
    let output = [];
    let thumbnail = null;
    let details = null;
    
    if(this.image) {
      thumbnail = <img class="content-image" src={`${this.portalUrl}content/items/4f5c78bfe89a4304aec3a6cfd492d0cd/info/${this.image}`} alt="Thumbnail Image" />
    }
    if(this.type) {
      output.push( <span class="content-type">{this.type}</span> )
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
