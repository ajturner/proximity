export declare class HubRadar {
    textInput: HTMLInputElement;
    messages: any;
    address: string;
    webmap: string;
    handleAddressUpdated(event: CustomEvent): void;
    componentWillLoad(): void;
    render(): any[];
}
