import { h } from "@stencil/core";
// import { format } from '../../utils/utils';
import { getMessages } from '../../utils/sonar-blip';
export class HubRadar {
    handleAddressUpdated(event) {
        event.preventDefault();
        console.log("radar handleUpdateAddress", event.detail);
        this.address = event.detail;
        getMessages(this.webmap, this.address).then(results => {
            this.messages = results;
        });
    }
    componentWillLoad() {
        getMessages(this.webmap, this.address).then(results => {
            this.messages = results;
        });
    }
    render() {
        let output = [];
        // Get Address
        output.push(h("hub-proximity-input", { address: this.address }));
        output.push(h("em", null,
            "Searching '",
            this.address,
            "'"));
        output.push(h("hub-proximity-map", { class: "proximity-map", webmap: this.webmap }));
        // output.push(<hub-proximity-map center="[-118, 42]" zoom="4"></hub-proximity-map> )
        // Get Results
        if (this.messages === undefined || this.messages.length == 0) {
            output.push(h("calcite-loader", { text: "Fetching data...", "is-active": true }));
        }
        else {
            this.messages.forEach(m => {
                output.push(h("hub-topic", { name: m.title, description: m.description }));
            });
        }
        return output;
    }
    static get is() { return "hub-radar"; }
    static get originalStyleUrls() { return {
        "$": ["hub-radar.css"]
    }; }
    static get styleUrls() { return {
        "$": ["hub-radar.css"]
    }; }
    static get properties() { return {
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
        }
    }; }
    static get states() { return {
        "messages": {}
    }; }
    static get listeners() { return [{
            "name": "eventAddressUpdated",
            "method": "handleAddressUpdated",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
