export declare class HubRadar {
    textInput: HTMLInputElement;
    mapItem: any;
    mapItemData: any;
    mapCenter: string;
    mapZoom: string;
    messages: any;
    address: string;
    webmap: string;
    showMap: boolean;
    isLoading: boolean;
    handleAddressUpdated(event: CustomEvent): void;
    updateRadar(address: string, coordinates: any): void;
    componentWillLoad(): void;
    render(): any;
}
