import { Host, h } from "@stencil/core";
import { getLocation, getMap, queryMap } from '../../utils/radar-utils';
export class HubRadar {
    constructor() {
        this.showMap = true;
        this.isLoading = false;
    }
    handleAddressUpdated(event) {
        this.updateRadar(event.detail.address, event.detail.coordinates);
    }
    updateRadar(address, coordinates) {
        this.address = address;
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
            // The component embedded an address, so load the radar.
            if (this.address) {
                getLocation(this.address, mapItem.extent).then(coordinates => {
                    this.updateRadar(this.address, coordinates);
                }).catch(error => {
                    console.log('Geocode error', error);
                });
            }
        });
    }
    render() {
        let output = [];
        // Get Address
        let inputProps = {
            address: this.address,
            extent: this.mapItem ? this.mapItem.extent : null,
        };
        output.push(h("hub-radar-input", Object.assign({}, inputProps)));
        if (this.showMap) {
            output.push(h("hub-radar-map", { class: "radar-map", center: this.mapCenter, zoom: this.mapZoom, webmap: this.webmap }));
        }
        if (this.isLoading) {
            output.push(h("calcite-loader", { text: "Scanning radar...", "is-active": true }));
        }
        else {
            // Get Results
            if (this.messages !== undefined && this.messages.length > 0) {
                output.push(h("slot", { name: "before-results" }));
                this.messages.forEach(m => {
                    output.push(h("hub-topic", { contenttype: m.title, name: m.description ? m.description : "<em>None</em>" }));
                });
                // output.push( <slot name="after-results" /> )        
            }
        }
        return (h(Host, null,
            output,
            h("slot", { name: "after-results" })));
    }
    static get is() { return "hub-radar"; }
    static get originalStyleUrls() { return {
        "$": ["hub-radar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["hub-radar.css"]
    }; }
    static get properties() { return {
        "mapItem": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "map-item",
            "reflect": false
        },
        "mapItemData": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "map-item-data",
            "reflect": false
        },
        "mapCenter": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "map-center",
            "reflect": false
        },
        "mapZoom": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "map-zoom",
            "reflect": false
        },
        "messages": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "messages",
            "reflect": false
        },
        "address": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "address",
            "reflect": false
        },
        "webmap": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "webmap",
            "reflect": false
        },
        "showMap": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "map",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get states() { return {
        "isLoading": {}
    }; }
    static get listeners() { return [{
            "name": "eventAddressUpdated",
            "method": "handleAddressUpdated",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
