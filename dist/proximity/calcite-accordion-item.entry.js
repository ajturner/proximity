import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-fb92fa04.js';
import { S as SPACE, a as ENTER, U as UP, D as DOWN, H as HOME, E as END } from './keys-08b2c0fd.js';
import { a as getElementProp, g as getElementDir } from './dom-8fd67d72.js';
import { g as guid } from './guid-3f4b9e31.js';

const CalciteAccordionItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** unique id for Accordion item */
        this.accordionItemId = `calcite-accordion-item-${guid()}`;
        /** what selection mode is the parent accordion in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "multi");
        /** what icon type does the parent accordion specify */
        this.iconType = getElementProp(this.el, "icon-type", "chevron");
        /** handle clicks on item header */
        this.itemHeaderClickHander = () => this.emitRequestedItem();
        this.calciteAccordionItemKeyEvent = createEvent(this, "calciteAccordionItemKeyEvent", 7);
        this.calciteAccordionItemSelected = createEvent(this, "calciteAccordionItemSelected", 7);
        this.closeCalciteAccordionItem = createEvent(this, "closeCalciteAccordionItem", 7);
        this.registerCalciteAccordionItem = createEvent(this, "registerCalciteAccordionItem", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteAccordionItem.emit({
            position: this.itemPosition
        });
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, tabindex: "0", "aria-expanded": this.active.toString() }, h("div", { class: "accordion-item-header", onClick: this.itemHeaderClickHander }, h("div", { class: "accordion-item-header-text" }, h("span", { class: "accordion-item-title" }, this.itemTitle), h("span", { class: "accordion-item-subtitle" }, this.itemSubtitle)), h("calcite-icon", { class: "accordion-item-icon", icon: this.iconType === "chevron"
                ? "chevronUp"
                : this.iconType === "caret"
                    ? "caretUp"
                    : this.active
                        ? "minus"
                        : "plus", scale: "s" })), h("div", { class: "accordion-item-content" }, h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        if (e.target === this.el) {
            switch (e.keyCode) {
                case SPACE:
                case ENTER:
                    this.emitRequestedItem();
                    e.preventDefault();
                    break;
                case UP:
                case DOWN:
                case HOME:
                case END:
                    this.calciteAccordionItemKeyEvent.emit({ item: e });
                    e.preventDefault();
                    break;
            }
        }
    }
    updateActiveItemOnChange(event) {
        this.requestedAccordionItem = event.detail.requestedAccordionItem;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    determineActiveItem() {
        switch (this.selectionMode) {
            case "multi":
                if (this.accordionItemId === this.requestedAccordionItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.accordionItemId === this.requestedAccordionItem)
                    this.active = !this.active;
                else
                    this.active = false;
                break;
            case "single-persist":
                this.active = this.accordionItemId === this.requestedAccordionItem;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteAccordionItemSelected.emit({
            requestedAccordionItem: this.accordionItemId
        });
    }
    getItemPosition() {
        const parent = this.el.parentElement;
        return Array.prototype.indexOf.call(parent.querySelectorAll("calcite-accordion-item"), this.el);
    }
    get el() { return getElement(this); }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background-color: var(--calcite-accordion-item-background);\n  color: var(--calcite-ui-text-3);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n}\n\n:host([active]) {\n  color: var(--calcite-ui-text-1);\n}\n:host([active]) .accordion-item-content {\n  display: block;\n}\n\n:host .accordion-item-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: var(--calcite-accordion-item-flex-direction);\n  flex-direction: var(--calcite-accordion-item-flex-direction);\n  -ms-flex-align: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n:host .accordion-item-content,\n:host .accordion-item-header {\n  padding: var(--calcite-accordion-item-padding);\n  border-bottom: 1px solid var(--calcite-accordion-item-border);\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n}\n\n:host .accordion-item-header * {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n}\n\n:host .accordion-item-content {\n  display: none;\n}\n\n:host .accordion-item-icon {\n  margin-left: var(--calcite-accordion-item-icon-spacing-start);\n  margin-right: var(--calcite-accordion-item-icon-spacing-end);\n  color: var(--calcite-ui-text-3);\n  -webkit-transform: rotate(var(--calcite-accordion-item-icon-rotation));\n  transform: rotate(var(--calcite-accordion-item-icon-rotation));\n}\n\n:host(:hover),\n:host(:focus) {\n  color: var(--calcite-ui-blue);\n}\n\n:host([dir=rtl]) .accordion-item-icon {\n  margin-left: var(--calcite-accordion-item-icon-spacing-end);\n  margin-right: var(--calcite-accordion-item-icon-spacing-start);\n  -webkit-transform: rotate(var(--calcite-accordion-item-icon-rotation-rtl));\n  transform: rotate(var(--calcite-accordion-item-icon-rotation-rtl));\n}\n\n:host([active]) .accordion-item-icon {\n  color: var(--calcite-ui-text-1);\n  -webkit-transform: rotate(var(--calcite-accordion-item-active-icon-rotation));\n  transform: rotate(var(--calcite-accordion-item-active-icon-rotation));\n}\n\n:host([active][dir=rtl]) .accordion-item-icon {\n  -webkit-transform: rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));\n  transform: rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));\n}\n\n:host .accordion-item-header-text {\n  margin-right: auto;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  text-align: initial;\n}\n\n:host .accordion-item-title,\n:host .accordion-item-subtitle {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n:host .accordion-item-title {\n  color: var(--calcite-ui-text-2);\n}\n\n:host .accordion-item-subtitle {\n  color: var(--calcite-ui-text-3);\n}\n\n:host([dir=rtl]) .accordion-item-title {\n  margin-right: 0;\n  margin-left: auto;\n}\n\n:host(:focus) .accordion-item-title,\n:host(:hover) .accordion-item-title {\n  color: var(--calcite-ui-text-1);\n}\n:host(:focus) .accordion-item-subtitle,\n:host(:hover) .accordion-item-subtitle {\n  color: var(--calcite-ui-text-2);\n}\n\n:host(:focus) .accordion-item-title,\n:host(:active) .accordion-item-title,\n:host([active]) .accordion-item-title {\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n:host(:focus) .accordion-item-subtitle,\n:host(:active) .accordion-item-subtitle,\n:host([active]) .accordion-item-subtitle {\n  color: var(--calcite-ui-text-2);\n}"; }
};

export { CalciteAccordionItem as calcite_accordion_item };
