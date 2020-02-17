export declare class HubRadar {
    textInput: HTMLInputElement;
    messages: any;
    address: string;
    webmap: string;
    mapCenter: string;
    mapZoom: string;
    handleAddressUpdated(event: CustomEvent): void;
    componentWillLoad(): void;
    render(): any[];
}
