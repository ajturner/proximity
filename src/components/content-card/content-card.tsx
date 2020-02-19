import { Component, Host, h, Prop, State } from '@stencil/core';
import { getInitiative } from '@esri/hub-initiatives'
import { IInitiativeModel } from '@esri/hub-common'

@Component({
  tag: 'hub-content-card',
  styleUrl: 'content-card.css',
  shadow: true
})
export class ContentCard {

  @Prop({ attribute: 'content' }) contentId: string;
  @Prop() layout:string = "horizontal";

  @State() content: IInitiativeModel; 

  componentWillLoad() {
    getInitiative(this.contentId).then(initiativeModel => {
      this.content = initiativeModel;
    })
  }

  render() {
    console.log("content layout", this.layout)
    return (
      <Host>
        <hub-topic 
          content-type="initiative" 
          layout={this.layout}
          url={this.content.item.url}
          image={this.content.item.thumbnail} 
          name={this.content.item.title} 
          description={this.content.item.snippet}
          // content={this.content}
        ></hub-topic>
      </Host>
    );
  }

}
