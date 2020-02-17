import { r as registerInstance, h, H as Host, d as getElement } from './core-18271712.js';
import './dom-8fd67d72.js';
import { g as guid } from './guid-3f4b9e31.js';
import { P as Popper, g as getPlacement } from './popper-9093772a.js';

const CSS = {
    container: "tooltip-container",
    containerOpen: "tooltip-container--open",
    contentContainer: "tooltip-content-container"
};

const CalciteTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Display and position the component.
         */
        this.open = false;
        /**
         * Determines where the component will be positioned relative to the referenceElement.
         */
        this.placement = "auto";
        /** Select theme (light or dark) */
        this.theme = "light";
        this._referenceElement = this.getReferenceElement();
        this._boundariesElement = this.getBoundariesElement();
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.getId = () => {
            return this.el.id || `calcite-tooltip-${guid()}`;
        };
        this.addReferenceAria = () => {
            const { _referenceElement } = this;
            if (_referenceElement &&
                !_referenceElement.hasAttribute("aria-describedby")) {
                _referenceElement.setAttribute("aria-describedby", this.getId());
            }
        };
        this.addReferenceListeners = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.addEventListener("mouseenter", this.show);
            _referenceElement.addEventListener("mouseleave", this.hide);
            _referenceElement.addEventListener("focus", this.show);
            _referenceElement.addEventListener("blur", this.hide);
        };
        this.removeReferenceListeners = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.removeEventListener("mouseenter", this.show);
            _referenceElement.removeEventListener("mouseleave", this.hide);
            _referenceElement.removeEventListener("focus", this.show);
            _referenceElement.removeEventListener("blur", this.hide);
        };
        this.show = () => {
            this.open = true;
        };
        this.hide = () => {
            this.open = false;
        };
    }
    boundariesElementHandler() {
        this._boundariesElement = this.getBoundariesElement();
        this.destroyPopper();
        this.reposition();
    }
    openHandler(open) {
        if (open) {
            this.reposition();
        }
        else {
            this.destroyPopper();
        }
    }
    placementHandler() {
        this.reposition();
    }
    referenceElementHandler() {
        this.removeReferenceListeners();
        this._referenceElement = this.getReferenceElement();
        this.addReferenceListeners();
        this.addReferenceAria();
        this.destroyPopper();
        this.reposition();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidLoad() {
        this.addReferenceListeners();
        this.addReferenceAria();
        this.reposition();
    }
    componentDidUnload() {
        this.removeReferenceListeners();
        this.destroyPopper();
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async reposition() {
        const { popper } = this;
        popper ? this.updatePopper(popper) : this.createPopper();
    }
    getReferenceElement() {
        const { referenceElement } = this;
        return ((typeof referenceElement === "string"
            ? document.getElementById(referenceElement)
            : referenceElement) || null);
    }
    getBoundariesElement() {
        const { boundariesElement } = this;
        return ((typeof boundariesElement === "string"
            ? document.getElementById(boundariesElement)
            : boundariesElement) || null);
    }
    getModifiers() {
        const { _boundariesElement } = this;
        return {
            preventOverflow: {
                enabled: true,
                boundariesElement: _boundariesElement || "viewport",
                escapeWithReference: true
            },
            flip: {
                enabled: true,
                boundariesElement: _boundariesElement || "viewport",
                flipVariationsByContent: true
            }
        };
    }
    createPopper() {
        const { _referenceElement, el, open, placement } = this;
        if (!_referenceElement || !open) {
            return;
        }
        const newPopper = new Popper(_referenceElement, el, {
            placement: getPlacement(el, placement),
            modifiers: this.getModifiers()
        });
        this.popper = newPopper;
    }
    updatePopper(popper) {
        popper.options.placement = getPlacement(this.el, this.placement);
        popper.options.modifiers = Object.assign(Object.assign({}, popper.options.modifiers), this.getModifiers());
        popper.scheduleUpdate();
    }
    destroyPopper() {
        const { popper } = this;
        if (popper) {
            popper.destroy();
        }
        this.popper = null;
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { _referenceElement, open } = this;
        const displayed = _referenceElement && open;
        return (h(Host, { role: "tooltip", "aria-hidden": !displayed ? "true" : "false", id: this.getId() }, h("div", { class: {
                [CSS.container]: true,
                [CSS.containerOpen]: displayed
            } }, h("div", { class: CSS.contentContainer }, h("slot", null)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "boundariesElement": ["boundariesElementHandler"],
        "open": ["openHandler"],
        "placement": ["placementHandler"],
        "referenceElement": ["referenceElementHandler"]
    }; }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  display: block;\n  position: absolute;\n  z-index: 999;\n  top: -999999px;\n  left: -999999px;\n}\n\n.tooltip-container {\n  visibility: hidden;\n  position: relative;\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  border-radius: var(--calcite-border-radius);\n  background: var(--calcite-ui-foreground);\n  overflow: hidden;\n}\n\n.tooltip-container--open {\n  visibility: visible;\n}\n\n:host([x-out-of-boundaries]) .tooltip-container {\n  visibility: hidden;\n}\n\n.tooltip-content-container {\n  max-width: 300px;\n  max-height: 300px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  font-weight: 500;\n  color: var(--calcite-ui-text-1);\n  padding: 12px 16px;\n  overflow: hidden;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n\n.tooltip-content-container:after {\n  position: absolute;\n  content: \"\";\n  font-size: 0;\n  line-height: 0;\n}\n\n:host([x-placement=top-start]) .tooltip-content-container:after {\n  top: 100%;\n  left: 5px;\n  width: 0;\n  border-top: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=top]) .tooltip-content-container:after {\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  width: 0;\n  border-top: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=top-end]) .tooltip-content-container:after {\n  top: 100%;\n  right: 5px;\n  width: 0;\n  border-top: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=right-start]) .tooltip-content-container:after {\n  right: 100%;\n  top: 5px;\n  width: 0;\n  border-right: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=right]) .tooltip-content-container:after {\n  right: 100%;\n  top: 50%;\n  margin-top: -5px;\n  width: 0;\n  border-right: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=right-end]) .tooltip-content-container:after {\n  right: 100%;\n  bottom: 5px;\n  width: 0;\n  border-right: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=bottom-start]) .tooltip-content-container:after {\n  bottom: 100%;\n  left: 5px;\n  width: 0;\n  border-bottom: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=bottom]) .tooltip-content-container:after {\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  width: 0;\n  border-bottom: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=bottom-end]) .tooltip-content-container:after {\n  bottom: 100%;\n  right: 5px;\n  width: 0;\n  border-bottom: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=left-start]) .tooltip-content-container:after {\n  left: 100%;\n  top: 5px;\n  width: 0;\n  border-left: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=left]) .tooltip-content-container:after {\n  left: 100%;\n  top: 50%;\n  margin-top: -5px;\n  width: 0;\n  border-left: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=left-end]) .tooltip-content-container:after {\n  left: 100%;\n  bottom: 5px;\n  width: 0;\n  border-left: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement*=bottom]) .tooltip-container,\n:host([x-placement*=top]) .tooltip-container {\n  margin: 5px 0;\n}\n\n:host([x-placement*=left]) .tooltip-container,\n:host([x-placement*=right]) .tooltip-container {\n  margin: 0 5px;\n}"; }
};

export { CalciteTooltip as calcite_tooltip };
