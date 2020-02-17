import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-18271712.js';
import { S as SPACE, a as ENTER, b as ESCAPE, T as TAB, U as UP, D as DOWN, H as HOME, E as END } from './keys-08b2c0fd.js';
import { a as getElementProp, g as getElementDir, b as getElementTheme } from './dom-8fd67d72.js';
import { g as guid } from './guid-3f4b9e31.js';

const CalciteDropdownItem = class {
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
        this.dropdownItemId = `calcite-dropdown-item-${guid()}`;
        /** what selection mode is the parent dropdown group in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "single");
        this.calciteDropdownItemKeyEvent = createEvent(this, "calciteDropdownItemKeyEvent", 7);
        this.calciteDropdownItemMouseover = createEvent(this, "calciteDropdownItemMouseover", 7);
        this.calciteDropdownItemSelected = createEvent(this, "calciteDropdownItemSelected", 7);
        this.closeCalciteDropdown = createEvent(this, "closeCalciteDropdown", 7);
        this.registerCalciteDropdownItem = createEvent(this, "registerCalciteDropdownItem", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteDropdownItem.emit({
            position: this.itemPosition
        });
    }
    render() {
        const dir = getElementDir(this.el);
        const theme = getElementTheme(this.el);
        const scale = getElementProp(this.el, "scale", "m");
        if (!this.href) {
            return (h(Host, { theme: theme, dir: dir, scale: scale, tabindex: "0", role: "menuitem", "aria-selected": this.active.toString() }, h("slot", null)));
        }
        else {
            return (h(Host, { theme: theme, dir: dir, scale: scale, tabindex: "0", role: "menuitem", "aria-selected": this.active.toString(), isLink: true }, h("a", { href: this.href, title: this.linkTitle }, h("slot", null))));
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick() {
        this.emitRequestedItem();
    }
    onMouseover(e) {
        this.calciteDropdownItemMouseover.emit(e);
    }
    keyDownHandler(e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.emitRequestedItem();
                if (e.path && e.path[0].nodeName === "A")
                    e.click();
                break;
            case ESCAPE:
                this.closeCalciteDropdown.emit();
                break;
            case TAB:
            case UP:
            case DOWN:
            case HOME:
            case END:
                this.calciteDropdownItemKeyEvent.emit({ item: e });
                break;
        }
        e.preventDefault();
    }
    registerCalciteDropdownGroup(event) {
        this.currentDropdownGroup = event.detail.groupId;
    }
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
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
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = true;
                else if (this.requestedDropdownGroup === this.currentDropdownGroup)
                    this.active = false;
                break;
            case "none":
                this.active = false;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteDropdownItemSelected.emit({
            requestedDropdownItem: this.dropdownItemId,
            requestedDropdownGroup: this.currentDropdownGroup
        });
        this.closeCalciteDropdown.emit();
    }
    getItemPosition() {
        const group = this.el.closest("calcite-dropdown-group");
        return Array.prototype.indexOf.call(group.querySelectorAll("calcite-dropdown-item"), this.el);
    }
    get el() { return getElement(this); }
    static get style() { return "\@charset \"UTF-8\";\n:root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host([scale=s]) {\n  --calcite-dropdown-item-padding: 0.3rem 1rem 0.3rem 2.25rem;\n}\n\n:host([scale=m]) {\n  --calcite-dropdown-item-padding: 0.5rem 1rem 0.5rem 2.25rem;\n}\n\n:host([scale=l]) {\n  --calcite-dropdown-item-padding: 0.75rem 1rem 0.75rem 2.25rem;\n}\n\n:host([dir=rtl][scale=s]) {\n  --calcite-dropdown-item-padding: 0.3rem 2.25rem 0.3rem 1rem;\n}\n\n:host([dir=rtl][scale=m]) {\n  --calcite-dropdown-item-padding: 0.5rem 2.25rem 0.5rem 1rem;\n}\n\n:host([dir=rtl][scale=l]) {\n  --calcite-dropdown-item-padding: 0.75rem 2.25rem 0.75rem 1rem;\n}\n\n:host {\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: var(--calcite-ui-text-3);\n  -webkit-transition: 0.15s all ease-in-out;\n  transition: 0.15s all ease-in-out;\n  padding: var(--calcite-dropdown-item-padding);\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n}\n\n:host(:hover),\n:host(:focus),\n:host(:active) {\n  background-color: var(--calcite-ui-foreground-hover);\n  color: var(--calcite-ui-text-1);\n  text-decoration: none;\n}\n\n:host(:active) {\n  background-color: var(--calcite-ui-foreground-press);\n}\n\n:host:before {\n  content: \"•\";\n  position: absolute;\n  left: 1rem;\n  opacity: 0;\n  color: #808080;\n  -webkit-transition: 0.15s ease-in-out;\n  transition: 0.15s ease-in-out;\n}\n\n:host(:hover):before,\n:host(:active):before,\n:host(:focus):before {\n  opacity: 1;\n}\n\n:host([dir=rtl]):before {\n  left: unset;\n  right: 1rem;\n}\n\n:host([active]) {\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n:host([active]):before {\n  opacity: 1;\n  color: var(--calcite-ui-blue);\n}\n\n:host([islink]) {\n  padding: 0;\n}\n:host([islink]):before {\n  display: none;\n}\n:host([islink]) a {\n  display: block;\n  position: relative;\n  padding: var(--calcite-dropdown-item-padding);\n  color: var(--calcite-ui-text-3);\n  text-decoration: none;\n  outline: none;\n}\n:host([islink]) a:before {\n  content: \"•\";\n  position: absolute;\n  left: 1rem;\n  opacity: 0;\n  color: #808080;\n  -webkit-transition: 0.15s ease-in-out;\n  transition: 0.15s ease-in-out;\n}\n\n:host([islink]) a:hover,\n:host([islink]) a:focus,\n:host([islink]) a:active {\n  background-color: var(--calcite-ui-foreground-hover);\n  text-decoration: none;\n}\n:host([islink]) a:hover:before,\n:host([islink]) a:focus:before,\n:host([islink]) a:active:before {\n  opacity: 1;\n}\n\n:host([islink]) a:active {\n  background-color: var(--calcite-ui-foreground-press);\n}\n\n:host([islink][active]) a {\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n:host([islink][active]) a:before {\n  opacity: 1;\n  color: var(--calcite-ui-blue);\n}\n\n:host([islink][dir=rtl]) a {\n  padding: var(--calcite-dropdown-item-padding);\n}\n:host([islink][dir=rtl]) a:before {\n  left: unset;\n  right: 1rem;\n}"; }
};

export { CalciteDropdownItem as calcite_dropdown_item };
