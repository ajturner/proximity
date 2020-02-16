/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HubProximityInput {
    'address': string;
  }
  interface HubRadar {
    'address': string;
    'webmap': string;
  }
  interface HubTopic {
    'description': string;
    'name': string;
  }
}

declare global {


  interface HTMLHubProximityInputElement extends Components.HubProximityInput, HTMLStencilElement {}
  var HTMLHubProximityInputElement: {
    prototype: HTMLHubProximityInputElement;
    new (): HTMLHubProximityInputElement;
  };

  interface HTMLHubRadarElement extends Components.HubRadar, HTMLStencilElement {}
  var HTMLHubRadarElement: {
    prototype: HTMLHubRadarElement;
    new (): HTMLHubRadarElement;
  };

  interface HTMLHubTopicElement extends Components.HubTopic, HTMLStencilElement {}
  var HTMLHubTopicElement: {
    prototype: HTMLHubTopicElement;
    new (): HTMLHubTopicElement;
  };
  interface HTMLElementTagNameMap {
    'hub-proximity-input': HTMLHubProximityInputElement;
    'hub-radar': HTMLHubRadarElement;
    'hub-topic': HTMLHubTopicElement;
  }
}

declare namespace LocalJSX {
  interface HubProximityInput {
    'address'?: string;
    'onEventAddressUpdated'?: (event: CustomEvent<any>) => void;
  }
  interface HubRadar {
    'address'?: string;
    'webmap'?: string;
  }
  interface HubTopic {
    'description'?: string;
    'name'?: string;
  }

  interface IntrinsicElements {
    'hub-proximity-input': HubProximityInput;
    'hub-radar': HubRadar;
    'hub-topic': HubTopic;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'hub-proximity-input': LocalJSX.HubProximityInput & JSXBase.HTMLAttributes<HTMLHubProximityInputElement>;
      'hub-radar': LocalJSX.HubRadar & JSXBase.HTMLAttributes<HTMLHubRadarElement>;
      'hub-topic': LocalJSX.HubTopic & JSXBase.HTMLAttributes<HTMLHubTopicElement>;
    }
  }
}


