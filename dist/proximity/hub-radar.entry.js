import { r as registerInstance, h } from './core-18271712.js';
import { q as queryMap, g as getMap } from './proximity-utils-6e00a0ce.js';

const HubRadar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showMap = true;
        this.isLoading = false;
    }
    handleAddressUpdated(event) {
        event.preventDefault();
        console.log("radar handleUpdateAddress", event.detail);
        this.address = event.detail.address;
        let coordinates = event.detail.coordinates;
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
        });
    }
    render() {
        let output = [];
        // Get Address
        let inputProps = {
            address: this.address,
            extent: this.mapItem ? this.mapItem.extent : null,
        };
        output.push(h("hub-proximity-input", Object.assign({}, inputProps)));
        if (this.showMap) {
            output.push(h("hub-proximity-map", { class: "proximity-map", center: this.mapCenter, zoom: this.mapZoom, webmap: this.webmap }));
        }
        if (this.isLoading) {
            output.push(h("calcite-loader", { text: "Fetching data...", "is-active": true }));
        }
        else {
            // Get Results
            if (this.messages !== undefined && this.messages.length > 0) {
                this.messages.forEach(m => {
                    output.push(h("hub-topic", { name: m.title, description: m.description }));
                });
            }
        }
        return output;
    }
    static get style() { return ".proximity-map {\n    height: 200px;\n}"; }
};

export { HubRadar as hub_radar };
