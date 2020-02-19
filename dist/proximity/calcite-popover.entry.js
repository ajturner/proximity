import { h, r as registerInstance, c as createEvent, H as Host, d as getElement } from './core-18271712.js';
import './dom-8fd67d72.js';
import { g as guid } from './guid-3f4b9e31.js';
import { a as x16 } from './index-ca737843.js';
import { P as Popper, g as getPlacement } from './popper-adb7473d.js';

const CSS = {
    container: "container",
    containerOpen: "container--open",
    containerPointer: "container--pointer",
    contentContainer: "content-container",
    imageContainer: "image-container",
    closeButton: "close-button",
    content: "content"
};

const CalciteIcon = ({ path, size, svgAttributes, title }) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", height: size, width: size, fill: "currentColor", viewBox: `0 0 ${size} ${size}` }, svgAttributes),
    title ? h("title", null, title) : null,
    h("path", { d: path })));

const CalcitePopover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Adds a click handler to the referenceElement to toggle open the Popover.
         */
        this.addClickHandle = false;
        /**
         * Display a close button within the Popover.
         */
        this.closeButton = false;
        /**
         * Prevents flipping the popover's placement when it starts to overlap its reference element.
         */
        this.disableFlip = false;
        /**
         * Removes the caret pointer.
         */
        this.disablePointer = false;
        /**
         * Makes the popover flow toward the inner of the reference element.
         */
        this.flowInner = false;
        /**
         * Display and position the component.
         */
        this.open = false;
        /**
         * Determines where the component will be positioned relative to the referenceElement.
         */
        this.placement = "auto";
        /** Text for close button. */
        this.textClose = "Close";
        /** Select theme (light or dark) */
        this.theme = "light";
        /**
         * Offset the position of the popover in the horizontal direction.
         */
        this.xOffset = 0;
        /**
         * Offset the position of the popover in the vertical direction.
         */
        this.yOffset = 0;
        this._referenceElement = this.getReferenceElement();
        this._boundariesElement = this.getBoundariesElement();
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.getId = () => {
            return this.el.id || `calcite-popover-${guid()}`;
        };
        this.addReferenceAria = () => {
            const { _referenceElement } = this;
            if (_referenceElement &&
                !_referenceElement.hasAttribute("aria-describedby")) {
                _referenceElement.setAttribute("aria-describedby", this.getId());
            }
        };
        this.clickHandler = () => {
            this.toggle();
        };
        this.addReferenceListener = () => {
            const { _referenceElement, addClickHandle } = this;
            if (!_referenceElement || !addClickHandle) {
                return;
            }
            _referenceElement.addEventListener("click", this.clickHandler);
        };
        this.removeReferenceListener = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.removeEventListener("click", this.clickHandler);
        };
        this.hide = () => {
            this.open = false;
        };
        this.calcitePopoverClose = createEvent(this, "calcitePopoverClose", 7);
        this.calcitePopoverOpen = createEvent(this, "calcitePopoverOpen", 7);
    }
    interactionElementHandler() {
        this.removeReferenceListener();
        this.addReferenceListener();
    }
    boundariesElementHandler() {
        this._boundariesElement = this.getBoundariesElement();
        this.destroyPopper();
        this.reposition();
    }
    openHandler(open) {
        if (open) {
            this.reposition();
            this.calcitePopoverOpen.emit();
        }
        else {
            this.destroyPopper();
            this.calcitePopoverClose.emit();
        }
    }
    placementHandler() {
        this.destroyPopper();
        this.reposition();
    }
    referenceElementHandler() {
        this.removeReferenceListener();
        this._referenceElement = this.getReferenceElement();
        this.addReferenceListener();
        this.addReferenceAria();
        this.destroyPopper();
        this.reposition();
    }
    xOffsetHandler() {
        this.destroyPopper();
        this.reposition();
    }
    yOffsetHandler() {
        this.destroyPopper();
        this.reposition();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidLoad() {
        this.reposition();
        this.addReferenceListener();
        this.addReferenceAria();
    }
    componentDidUnload() {
        this.removeReferenceListener();
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
    async toggle() {
        this.open = !this.open;
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
        const verticalRE = /top|bottom/gi;
        const autoRE = /auto/gi;
        const { _boundariesElement, disableFlip, flipPlacements, flowInner, placement, xOffset, yOffset } = this;
        const offsetEnabled = !!(yOffset || xOffset) && !autoRE.test(placement);
        const offsets = [yOffset, xOffset];
        if (verticalRE.test(placement)) {
            offsets.reverse();
        }
        return {
            preventOverflow: {
                enabled: true,
                boundariesElement: _boundariesElement || "viewport",
                escapeWithReference: true
            },
            flip: {
                enabled: !disableFlip,
                boundariesElement: _boundariesElement || "viewport",
                flipVariationsByContent: true,
                behavior: flipPlacements || "flip"
            },
            inner: {
                enabled: flowInner
            },
            offset: {
                enabled: !!offsetEnabled,
                offset: offsets.join(",")
            }
        };
    }
    createPopper() {
        const { el, open, placement, _referenceElement } = this;
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
    renderImage() {
        return this.el.querySelector("[slot=image]") ? (h("div", { class: CSS.imageContainer }, h("slot", { name: "image" }))) : null;
    }
    renderCloseButton() {
        const { closeButton, textClose } = this;
        return closeButton ? (h("button", { "aria-label": textClose, title: textClose, class: { [CSS.closeButton]: true }, onClick: this.hide }, h(CalciteIcon, { size: "16", path: x16 }))) : null;
    }
    render() {
        const { _referenceElement, open, disablePointer } = this;
        const displayed = _referenceElement && open;
        return (h(Host, { role: "dialog", "aria-hidden": !displayed ? "true" : "false", id: this.getId() }, h("div", { class: {
                [CSS.container]: true,
                [CSS.containerOpen]: displayed,
                [CSS.containerPointer]: !disablePointer
            } }, h("div", { class: CSS.contentContainer }, this.renderImage(), h("div", { class: CSS.content }, h("slot", null), this.renderCloseButton())))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "addClickHandle": ["interactionElementHandler"],
        "boundariesElement": ["boundariesElementHandler"],
        "open": ["openHandler"],
        "placement": ["placementHandler"],
        "referenceElement": ["referenceElementHandler"],
        "xOffset": ["xOffsetHandler"],
        "yOffset": ["yOffsetHandler"]
    }; }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  display: block;\n  position: absolute;\n  z-index: 999;\n  top: -999999px;\n  left: -999999px;\n}\n\n.container {\n  border-radius: var(--calcite-border-radius);\n  background: var(--calcite-ui-foreground);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  position: relative;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.container--open {\n  visibility: visible;\n}\n\n:host([x-out-of-boundaries]) .container {\n  visibility: hidden;\n}\n\n.content-container {\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 350px;\n  overflow: hidden;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  color: var(--calcite-ui-text-1);\n}\n\n.content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  line-height: 24px;\n}\n\n.close-button {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  width: 40px;\n  height: 50px;\n  z-index: 1;\n  color: var(--calcite-ui-text-1);\n  padding: 16px 12px;\n  border: none;\n  border-radius: 0 var(--calcite-border-radius) 0 0;\n  display: block;\n  cursor: pointer;\n}\n.close-button:hover {\n  background: var(--calcite-ui-foreground-hover);\n}\n.close-button:active {\n  background: var(--calcite-ui-foreground-press);\n}\n\n:host([dir=rtl]) .close-button {\n  border-radius: var(--calcite-border-radius) 0 0 0;\n}\n\n.image-container {\n  overflow: hidden;\n  max-height: 200px;\n  margin: 5px;\n}\n\nslot[name=image]::slotted(img) {\n  height: auto;\n  width: 100%;\n  max-height: 200px;\n  -o-object-position: 50% 50%;\n  object-position: 50% 50%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.container--pointer .content-container:after {\n  position: absolute;\n  content: \"\";\n  font-size: 0;\n  line-height: 0;\n}\n\n:host([x-placement=top-start]) .container--pointer .content-container:after {\n  top: 100%;\n  left: 5px;\n  width: 0;\n  border-top: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=top]) .container--pointer .content-container:after {\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  width: 0;\n  border-top: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=top-end]) .container--pointer .content-container:after {\n  top: 100%;\n  right: 5px;\n  width: 0;\n  border-top: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=right-start]) .container--pointer .content-container:after {\n  right: 100%;\n  top: 5px;\n  width: 0;\n  border-right: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=right]) .container--pointer .content-container:after {\n  right: 100%;\n  top: 50%;\n  margin-top: -5px;\n  width: 0;\n  border-right: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=right-end]) .container--pointer .content-container:after {\n  right: 100%;\n  bottom: 5px;\n  width: 0;\n  border-right: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=bottom-start]) .container--pointer .content-container:after {\n  bottom: 100%;\n  left: 5px;\n  width: 0;\n  border-bottom: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=bottom]) .container--pointer .content-container:after {\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  width: 0;\n  border-bottom: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=bottom-end]) .container--pointer .content-container:after {\n  bottom: 100%;\n  right: 5px;\n  width: 0;\n  border-bottom: 5px solid var(--calcite-ui-foreground);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n:host([x-placement=left-start]) .container--pointer .content-container:after {\n  left: 100%;\n  top: 5px;\n  width: 0;\n  border-left: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=left]) .container--pointer .content-container:after {\n  left: 100%;\n  top: 50%;\n  margin-top: -5px;\n  width: 0;\n  border-left: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement=left-end]) .container--pointer .content-container:after {\n  left: 100%;\n  bottom: 5px;\n  width: 0;\n  border-left: 5px solid var(--calcite-ui-foreground);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n:host([x-placement*=bottom]) .container--pointer,\n:host([x-placement*=top]) .container--pointer {\n  margin: 5px 0;\n}\n\n:host([x-placement*=left]) .container--pointer,\n:host([x-placement*=right]) .container--pointer {\n  margin: 0 5px;\n}"; }
};

export { CalcitePopover as calcite_popover };
