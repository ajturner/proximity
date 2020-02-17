import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-18271712.js';
import { g as getElementDir, b as getElementTheme } from './dom-8fd67d72.js';
import { x as x24 } from './index-ca737843.js';

/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
    let matches = [];
    // If the depth is above the max depth, abort the searching here.
    if (depth >= maxDepth) {
        return matches;
    }
    // Traverses a slot element
    const traverseSlot = ($slot) => {
        // Only check nodes that are of the type Node.ELEMENT_NODE
        // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        const assignedNodes = $slot.assignedNodes().filter(node => node.nodeType === 1);
        if (assignedNodes.length > 0) {
            return queryShadowRoot(assignedNodes[0].parentElement, skipNode, isMatch, maxDepth, depth + 1);
        }
        return [];
    };
    // Go through each child and continue the traversing if necessary
    // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
    // Therefore we fallback to an empty array if it is undefined.
    const children = Array.from(root.children || []);
    for (const $child of children) {
        // Check if the node and its descendants should be skipped
        if (skipNode($child)) {
            continue;
        }
        // If the child matches we always add it
        if (isMatch($child)) {
            matches.push($child);
        }
        if ($child.shadowRoot != null) {
            matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
        }
        else if ($child.tagName === "SLOT") {
            matches.push(...traverseSlot($child));
        }
        else {
            matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
        }
    }
    return matches;
}
//# sourceMappingURL=shadow.js.map

/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
    return $elem.hasAttribute("hidden")
        || ($elem.hasAttribute("aria-hidden") && $elem.getAttribute("aria-hidden") !== "false")
        // A quick and dirty way to check whether the element is hidden.
        // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
        // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
        // we won't be able to catch it here. We accept it due to the huge performance benefits.
        || $elem.style.display === `none`
        || $elem.style.opacity === `0`
        || $elem.style.visibility === `hidden`
        || $elem.style.visibility === `collapse`;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
    return $elem.hasAttribute("disabled")
        || ($elem.hasAttribute("aria-disabled") && $elem.getAttribute("aria-disabled") !== "false");
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
    // Discard elements that are removed from the tab order.
    if ($elem.getAttribute("tabindex") === "-1" || isHidden($elem) || isDisabled($elem)) {
        return false;
    }
    return (
    // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
    $elem.hasAttribute("tabindex")
        // Anchor tags or area tags with a href set
        || ($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) && $elem.hasAttribute("href")
        // Form elements which are not disabled
        || ($elem instanceof HTMLButtonElement
            || $elem instanceof HTMLInputElement
            || $elem instanceof HTMLTextAreaElement
            || $elem instanceof HTMLSelectElement)
        // IFrames
        || $elem instanceof HTMLIFrameElement);
}
//# sourceMappingURL=focusable.js.map

let timeouts = new Map();
/**
 * Debounces a callback.
 * @param cb
 * @param ms
 * @param id
 */
function debounce(cb, ms, id) {
    // Clear current timeout for id
    const timeout = timeouts.get(id);
    if (timeout != null) {
        window.clearTimeout(timeout);
    }
    // Set new timeout
    timeouts.set(id, window.setTimeout(() => {
        cb();
        timeouts.delete(id);
    }, ms));
}
//# sourceMappingURL=debounce.js.map

/**
 * Template for the focus trap.
 */
const template = document.createElement("template");
template.innerHTML = `
	<div id="start"></div>
	<slot></slot>
	<div id="backup"></div>
	<div id="end"></div>
`;
/**
 * Focus trap web component.
 * @slot - Default content.
 */
class FocusTrap extends HTMLElement {
    /**
     * Attaches the shadow root.
     */
    constructor() {
        super();
        // The debounce id is used to distinguish this focus trap from others when debouncing
        this.debounceId = Math.random().toString();
        this._focused = false;
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(template.content.cloneNode(true));
        this.focusLastElement = this.focusLastElement.bind(this);
        this.focusFirstElement = this.focusFirstElement.bind(this);
        this.onFocusIn = this.onFocusIn.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
    }
    // Whenever one of these attributes changes we need to render the template again.
    static get observedAttributes() {
        return ["inactive"];
    }
    /**
     * Determines whether the focus trap is active or not.
     * @attr
     */
    get inactive() {
        return this.hasAttribute("inactive");
    }
    set inactive(value) {
        value
            ? this.setAttribute("inactive", "")
            : this.removeAttribute("inactive");
    }
    /**
     * Returns whether the element currently has focus.
     */
    get focused() {
        return this._focused;
    }
    /**
     * Hooks up the element.
     */
    connectedCallback() {
        this.$backup = this.shadowRoot.querySelector("#backup");
        this.$start = this.shadowRoot.querySelector("#start");
        this.$end = this.shadowRoot.querySelector("#end");
        this.$start.addEventListener("focus", this.focusLastElement);
        this.$end.addEventListener("focus", this.focusFirstElement);
        // Focus out is called every time the user tabs around inside the element
        this.addEventListener("focusin", this.onFocusIn);
        this.addEventListener("focusout", this.onFocusOut);
        this.render();
    }
    /**
     * Tears down the element.
     */
    disconnectedCallback() {
        this.$start.removeEventListener("focus", this.focusLastElement);
        this.$end.removeEventListener("focus", this.focusFirstElement);
        this.removeEventListener("focusin", this.onFocusIn);
        this.removeEventListener("focusout", this.onFocusOut);
    }
    /**
     * When the attributes changes we need to re-render the template.
     */
    attributeChangedCallback() {
        this.render();
    }
    /**
     * Focuses the first focusable element in the focus trap.
     */
    focusFirstElement() {
        this.trapFocus();
    }
    /**
     * Focuses the last focusable element in the focus trap.
     */
    focusLastElement() {
        this.trapFocus(true);
    }
    /**
     * Returns a list of the focusable children found within the element.
     */
    getFocusableElements() {
        return queryShadowRoot(this, isHidden, isFocusable);
    }
    /**
     * Focuses on either the last or first focusable element.
     * @param {boolean} trapToEnd
     */
    trapFocus(trapToEnd) {
        if (this.inactive)
            return;
        let focusableChildren = this.getFocusableElements();
        if (focusableChildren.length > 0) {
            if (trapToEnd) {
                focusableChildren[focusableChildren.length - 1].focus();
            }
            else {
                focusableChildren[0].focus();
            }
            this.$backup.setAttribute("tabindex", "-1");
        }
        else {
            // If there are no focusable children we need to focus on the backup
            // to trap the focus. This is a useful behavior if the focus trap is
            // for example used in a dialog and we don't want the user to tab
            // outside the dialog even though there are no focusable children
            // in the dialog.
            this.$backup.setAttribute("tabindex", "0");
            this.$backup.focus();
        }
    }
    /**
     * When the element gains focus this function is called.
     */
    onFocusIn() {
        this.updateFocused(true);
    }
    /**
     * When the element looses its focus this function is called.
     */
    onFocusOut() {
        this.updateFocused(false);
    }
    /**
     * Updates the focused property and updates the view.
     * The update is debounced because the focusin and focusout out
     * might fire multiple times in a row. We only want to render
     * the element once, therefore waiting until the focus is "stable".
     * @param value
     */
    updateFocused(value) {
        debounce(() => {
            if (this.focused !== value) {
                this._focused = value;
                this.render();
            }
        }, 0, this.debounceId);
    }
    /**
     * Updates the template.
     */
    render() {
        if (!this.isConnected)
            return;
        this.$start.setAttribute("tabindex", !this.focused || this.inactive ? `-1` : `0`);
        this.$end.setAttribute("tabindex", !this.focused || this.inactive ? `-1` : `0`);
        this.focused
            ? this.setAttribute("focused", "")
            : this.removeAttribute("focused");
    }
}
if (window && window.customElements) {
    window.customElements.define("focus-trap", FocusTrap);
}
//# sourceMappingURL=focus-trap.js.map

//# sourceMappingURL=index.js.map

const CalciteModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** Optionally pass a function to run before close */
        this.beforeClose = () => Promise.resolve();
        /** Aria label for the close button */
        this.closeLabel = "Close";
        /** Set the overall size of the modal */
        this.size = "small";
        /** Select theme (light or dark) */
        this.theme = "light";
        this.calciteModalOpen = createEvent(this, "calciteModalOpen", 7);
        this.calciteModalClose = createEvent(this, "calciteModalClose", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const dir = getElementDir(this.el);
        const theme = getElementTheme(this.el);
        return (h(Host, { role: "dialog", "aria-modal": "true", class: { "is-active": this.isActive }, dir: dir, theme: theme }, h("div", { class: "modal" }, h("div", { "data-focus-fence": "true", tabindex: "0", onFocus: this.focusLastElement.bind(this) }), h("div", { class: "modal__header" }, h("button", { class: "modal__close", "aria-label": this.closeLabel, ref: el => (this.closeButton = el), onClick: () => this.close() }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24", viewBox: "0 0 24 24", fill: "currentColor" }, h("path", { d: x24 }))), h("header", { class: "modal__title" }, h("slot", { name: "header" }))), h("div", { class: {
                "modal__content": true,
                "modal__content--spaced": !this.noPadding
            }, ref: el => (this.modalContent = el) }, h("slot", { name: "content" })), h("div", { class: "modal__footer" }, h("span", { class: "modal__back" }, h("slot", { name: "back" })), h("span", { class: "modal__secondary" }, h("slot", { name: "secondary" })), h("span", { class: "modal__primary" }, h("slot", { name: "primary" }))), h("div", { "data-focus-fence": "true", tabindex: "0", onFocus: this.focusFirstElement.bind(this) }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    handleEscape(e) {
        if (this.isActive && !this.disableEscape && e.key === "Escape") {
            this.close();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Open the modal */
    async open() {
        this.previousActiveElement = document.activeElement;
        this.isActive = true;
        // wait for the modal to open, then handle focus.
        return new Promise(resolve => {
            setTimeout(() => {
                this.focusElement(this.firstFocus);
                resolve(this.el);
            }, 300);
            document.documentElement.classList.add("overflow-hidden");
            this.calciteModalOpen.emit();
        });
    }
    /** Close the modal, first running the `beforeClose` method */
    async close() {
        return this.beforeClose(this.el).then(() => {
            this.isActive = false;
            this.previousActiveElement.focus();
            document.documentElement.classList.remove("overflow-hidden");
            this.calciteModalClose.emit();
            return new Promise(resolve => {
                setTimeout(() => resolve(this.el), 300);
            });
        });
    }
    /** Focus first interactive element */
    async focusElement(el) {
        if (el) {
            el.focus();
            return;
        }
        const focusableElements = queryShadowRoot(this.el, isHidden, isFocusable);
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
        else {
            this.closeButton && this.closeButton.focus();
        }
    }
    /** Set the scroll top of the modal content */
    async scrollContent(top = 0, left = 0) {
        if (this.modalContent) {
            if (this.modalContent.scrollTo) {
                this.modalContent.scrollTo({ top, left, behavior: "smooth" });
            }
            else {
                this.modalContent.scrollTop = top;
                this.modalContent.scrollLeft = left;
            }
        }
    }
    focusFirstElement() {
        this.closeButton && this.closeButton.focus();
    }
    focusLastElement() {
        const focusableElements = queryShadowRoot(this.el, isHidden, isFocusable).filter(el => !el.getAttribute("data-focus-fence"));
        if (focusableElements.length > 0) {
            focusableElements[focusableElements.length - 1].focus();
        }
        else {
            this.closeButton && this.closeButton.focus();
        }
    }
    get el() { return getElement(this); }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  --calcite-modal-scrim: rgba(0, 0, 0, 0.75);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  overflow-y: hidden;\n  color: var(--calcite-ui-text-2);\n  opacity: 0;\n  visibility: hidden !important;\n  background: var(--calcite-modal-scrim);\n  -webkit-transition: visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  z-index: 101;\n}\n\n.modal {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 102;\n  float: none;\n  text-align: left;\n  -webkit-overflow-scrolling: touch;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-wrap: row-wrap;\n  flex-wrap: row-wrap;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  -webkit-transform: translate3d(0, 20px, 0);\n  transform: translate3d(0, 20px, 0);\n  background-color: var(--calcite-ui-foreground);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.32);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.32);\n  border-radius: var(--calcite-border-radius);\n  margin: 1.5rem;\n  width: 100%;\n}\n\n:host(.is-active) {\n  visibility: visible !important;\n  opacity: 1;\n  -webkit-transition-delay: 0ms;\n  transition-delay: 0ms;\n}\n:host(.is-active) .modal {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition-delay: 0ms;\n  transition-delay: 0ms;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transition: visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n  transition: transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);\n}\n\n:host([dir=rtl]) .modal {\n  text-align: right;\n}\n\n/**\n * Header\n */\n.modal__header {\n  background-color: var(--calcite-ui-foreground);\n  -ms-flex: 0;\n  flex: 0;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 100%;\n  min-width: 0;\n  z-index: 2;\n  border-bottom: 1px solid var(--calcite-ui-border-3);\n  border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0;\n}\n\n.modal__close {\n  padding: 1.125rem;\n  margin: 0;\n  -ms-flex-order: 2;\n  order: 2;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition-delay: 300ms;\n  transition-delay: 300ms;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  background-color: transparent;\n  -webkit-appearance: none;\n  border: none;\n  color: var(--calcite-ui-text-1);\n  outline: none;\n  cursor: pointer;\n  border-radius: 0 var(--calcite-border-radius) 0 0;\n}\n.modal__close svg {\n  pointer-events: none;\n}\n.modal__close:hover, .modal__close:focus {\n  background-color: var(--calcite-ui-foreground-hover);\n}\n.modal__close:active {\n  background-color: var(--calcite-ui-foreground-press);\n}\n\n:host([dir=rtl]) .modal__close {\n  border-radius: var(--calcite-border-radius) 0 0 0;\n}\n\n.modal__title {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-order: 1;\n  order: 1;\n  min-width: 0;\n}\n\nslot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n  margin: 0;\n  font-weight: 400;\n  font-size: 1.414rem;\n  line-height: 1.5;\n  color: var(--calcite-ui-text-1);\n}\n\@media screen and (max-width: 859px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.33rem;\n  }\n}\n\@media screen and (max-width: 479px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.25rem;\n  }\n}\n\n/**\n * Content area\n */\n.modal__content {\n  position: relative;\n  padding: 0;\n  height: 100%;\n  overflow: auto;\n  max-height: calc(100vh - 12rem);\n  overflow-y: auto;\n  display: block;\n  background-color: var(--calcite-ui-foreground);\n  z-index: 1;\n}\n\n.modal__content--spaced {\n  padding: 1.5rem;\n}\n\nslot[name=content]::slotted(*),\n*::slotted([slot=content]) {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n/**\n * Footer\n */\n.modal__footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 0;\n  flex: 0;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 1.2rem 1.125rem;\n  margin-top: auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 0 0 var(--calcite-border-radius) var(--calcite-border-radius);\n  width: 100%;\n  background-color: var(--calcite-ui-foreground);\n  border-top: 1px solid var(--calcite-ui-border-3);\n  z-index: 2;\n}\n\n.modal__footer--hide-back .modal__back,\n.modal__footer--hide-secondary .modal__secondary {\n  display: none;\n}\n\n.modal__back {\n  display: block;\n  margin-right: auto;\n}\n\n:host([dir=rtl]) .modal__back {\n  margin-left: auto;\n  margin-right: unset;\n}\n\n.modal__secondary {\n  display: block;\n  margin: 0 0.375rem;\n}\n\nslot[name=primary] {\n  display: block;\n}\n\n/**\n * Sizes\n */\n:host([size=small]) .modal {\n  width: auto;\n}\n\n:host([size=small]) .modal {\n  max-width: 32rem;\n}\n\n\@media screen and (max-width: 35rem) {\n  :host([size=small]) .modal {\n    height: 100vh;\n    max-height: 100vh;\n    width: 100vw;\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n  }\n  :host([size=small]) .modal__content {\n    -ms-flex: 1 1 0px;\n    flex: 1 1 0;\n    max-height: unset;\n  }\n  :host([size=small]) .modal__header,\n:host([size=small]) .modal__footer {\n    -ms-flex: inherit;\n    flex: inherit;\n  }\n\n  :host([size=small][docked]) {\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n}\n:host([size=medium]) .modal {\n  max-width: 48rem;\n}\n\n\@media screen and (max-width: 51rem) {\n  :host([size=medium]) .modal {\n    height: 100vh;\n    max-height: 100vh;\n    width: 100vw;\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n  }\n  :host([size=medium]) .modal__content {\n    -ms-flex: 1 1 0px;\n    flex: 1 1 0;\n    max-height: unset;\n  }\n  :host([size=medium]) .modal__header,\n:host([size=medium]) .modal__footer {\n    -ms-flex: inherit;\n    flex: inherit;\n  }\n\n  :host([size=medium][docked]) {\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n}\n:host([size=large]) .modal {\n  max-width: 94rem;\n}\n\n\@media screen and (max-width: 97rem) {\n  :host([size=large]) .modal {\n    height: 100vh;\n    max-height: 100vh;\n    width: 100vw;\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n  }\n  :host([size=large]) .modal__content {\n    -ms-flex: 1 1 0px;\n    flex: 1 1 0;\n    max-height: unset;\n  }\n  :host([size=large]) .modal__header,\n:host([size=large]) .modal__footer {\n    -ms-flex: inherit;\n    flex: inherit;\n  }\n\n  :host([size=large][docked]) {\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n}\n/**\n * Fullscreen\n */\n:host([size=fullscreen]) {\n  background-color: transparent;\n}\n:host([size=fullscreen]) .modal {\n  -webkit-transform: translate3D(0, 20px, 0) scale(0.95);\n  transform: translate3D(0, 20px, 0) scale(0.95);\n  height: 100vh;\n  max-height: 100vh;\n  width: 100vw;\n  max-width: 100vw;\n  margin: 0;\n}\n:host([size=fullscreen]) .modal__content {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n:host([size=fullscreen]) .modal__header,\n:host([size=fullscreen]) .modal__footer {\n  -ms-flex: inherit;\n  flex: inherit;\n}\n\n:host(.is-active[size=fullscreen]) .modal {\n  -webkit-transform: translate3D(0, 0, 0) scale(1);\n  transform: translate3D(0, 0, 0) scale(1);\n}\n:host(.is-active[size=fullscreen]) .modal__header {\n  border-radius: 0;\n}\n:host(.is-active[size=fullscreen]) .modal__footer {\n  border-radius: 0;\n}\n\n/**\n * Docked\n */\n:host([docked]) .modal {\n  height: auto !important;\n}\n:host([docked]) .modal__content {\n  height: auto;\n  -ms-flex: 1;\n  flex: 1;\n}\n\@media screen and (max-width: 860px) {\n  :host([docked]) .modal {\n    border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0;\n  }\n  :host([docked]) .modal__close {\n    border-radius: 0 var(--calcite-border-radius) 0 0;\n  }\n}\n\n\@media screen and (max-width: 860px) {\n  :host([docked][dir=rtl]) .modal__close {\n    border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0;\n  }\n}\n/**\n * Colors\n */\n:host([color=red]) .modal {\n  border-top: 4px solid var(--calcite-ui-red);\n}\n\n:host([color=blue]) .modal {\n  border-top: 4px solid var(--calcite-ui-blue);\n}\n\n:host([color=red]) .modal__header,\n:host([color=blue]) .modal__header {\n  border-radius: var(--calcite-border-radius);\n}\n\n/**\n * Tablet\n */\n\@media screen and (max-width: 860px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.2019rem;\n    line-height: 1.5;\n  }\n}\n\@media screen and (max-width: 860px) and (max-width: 859px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.1305rem;\n  }\n}\n\@media screen and (max-width: 860px) and (max-width: 479px) {\n  slot[name=header]::slotted(*),\n*::slotted([slot=header]) {\n    font-size: 1.0625rem;\n  }\n}\n\@media screen and (max-width: 860px) {\n  .modal__title {\n    padding: 0.375rem 1.0125rem;\n  }\n}\n\@media screen and (max-width: 860px) {\n  .modal__close {\n    padding: 1.0125rem;\n  }\n}\n\@media screen and (max-width: 860px) {\n  .modal__content--spaced {\n    padding: 1.0125rem;\n  }\n}\n\@media screen and (max-width: 860px) {\n  .modal__footer {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n  }\n}\n/**\n * Mobile\n */\n\@media screen and (max-width: 480px) {\n  .modal__footer {\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n\n  .modal__back,\n.modal__secondary {\n    margin: 0;\n    margin-bottom: 0.375rem;\n  }\n}"; }
};

export { CalciteModal as calcite_modal };
