import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-18271712.js';
import { g as getElementDir } from './dom-8fd67d72.js';

const CalciteNotice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //---------------------------------------------------------------------------
        /** Is the notice currently active or not */
        this.active = false;
        /** Color for the notice (will apply to top border and icon) */
        this.color = "blue";
        /** Select theme (light or dark) */
        this.theme = "light";
        /** specify the scale of the notice, defaults to m */
        this.scale = "m";
        /** specify the scale of the button, defaults to m */
        this.width = "auto";
        /** Select theme (light or dark) */
        this.dismissible = false;
        /** If false, no icon will be shown in the notice */
        this.icon = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** Unique ID for this notice */
        this.noticeId = this.el.id;
        this.iconDefaults = {
            green: "checkCircle",
            yellow: "exclamationMarkTriangle",
            red: "exclamationMarkTriangle",
            blue: "lightbulb"
        };
        this.calciteNoticeClose = createEvent(this, "calciteNoticeClose", 7);
        this.calciteNoticeOpen = createEvent(this, "calciteNoticeOpen", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // prop validations
        let colors = ["blue", "red", "green", "yellow"];
        if (!colors.includes(this.color))
            this.color = "blue";
        let themes = ["dark", "light"];
        if (!themes.includes(this.theme))
            this.theme = "light";
        let scales = ["s", "m", "l"];
        if (!scales.includes(this.scale))
            this.scale = "m";
        let widths = ["auto", "half", "full"];
        if (!widths.includes(this.width))
            this.width = "auto";
    }
    componentDidLoad() {
        this.noticeLinkEl = this.el.querySelectorAll("calcite-button")[0];
    }
    render() {
        const dir = getElementDir(this.el);
        const closeButton = (h("button", { class: "notice-close", "aria-label": "close", onClick: () => this.close(), ref: el => (this.closeButton = el) }, h("calcite-icon", { icon: "x", scale: "s" })));
        return (h(Host, { active: this.active, dir: dir }, this.icon ? this.setIcon() : null, h("div", { class: "notice-content" }, h("slot", { name: "notice-title" }), h("slot", { name: "notice-message" }), h("slot", { name: "notice-link" })), this.dismissible ? closeButton : null));
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** close the notice emit the `calciteNoticeClose` event - <calcite-notice> listens for this */
    async close() {
        this.active = false;
        this.calciteNoticeClose.emit({ requestedNotice: this.noticeId });
    }
    /** open the notice and emit the `calciteNoticeOpen` event - <calcite-notice> listens for this  */
    async open() {
        this.active = true;
        this.calciteNoticeOpen.emit({ requestedNotice: this.noticeId });
    }
    /** focus the close button, if present and requested */
    async setFocus() {
        if (!this.closeButton && !this.noticeLinkEl) {
            return;
        }
        if (this.noticeLinkEl)
            this.noticeLinkEl.setFocus();
        else if (this.closeButton) {
            this.closeButton.focus();
        }
    }
    setIcon() {
        var path = this.iconDefaults[this.color];
        return (h("div", { class: "notice-icon" }, h("calcite-icon", { icon: path, filled: true, scale: "s" })));
    }
    get el() { return getElement(this); }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host([scale=s]) {\n  --calcite-notice-spacing-token-small: 0.75rem;\n  --calcite-notice-spacing-token-large: 1rem;\n}\n:host([scale=s]) slot[name=notice-title]::slotted(div),\n:host([scale=s]) div::slotted([slot=notice-title]) {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n:host([scale=s]) slot[name=notice-message]::slotted(div),\n:host([scale=s]) div::slotted([slot=notice-message]) {\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n:host([scale=s]) ::slotted(calcite-button) {\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n\n:host([scale=m]) {\n  --calcite-notice-spacing-token-small: 1rem;\n  --calcite-notice-spacing-token-large: 1.5rem;\n}\n:host([scale=m]) slot[name=notice-title]::slotted(div),\n:host([scale=m]) div::slotted([slot=notice-title]) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n:host([scale=m]) slot[name=notice-message]::slotted(div),\n:host([scale=m]) div::slotted([slot=notice-message]) {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n:host([scale=m]) ::slotted(calcite-button) {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n:host([scale=l]) {\n  --calcite-notice-spacing-token-small: 1.2rem;\n  --calcite-notice-spacing-token-large: 1.875rem;\n}\n:host([scale=l]) slot[name=notice-title]::slotted(div),\n:host([scale=l]) div::slotted([slot=notice-title]) {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n:host([scale=l]) slot[name=notice-message]::slotted(div),\n:host([scale=l]) div::slotted([slot=notice-message]) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n:host([scale=l]) ::slotted(calcite-button) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n\n:host([width=auto]) {\n  --calcite-notice-width: auto;\n}\n\n:host([width=half]) {\n  --calcite-notice-width: 50%;\n}\n\n:host([width=full]) {\n  --calcite-notice-width: 100%;\n}\n\n:host {\n  display: none;\n  text-align: left;\n  margin: 0 auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: var(--calcite-notice-width);\n  max-height: 0;\n  background-color: var(--calcite-ui-foreground);\n  opacity: 0;\n  pointer-events: none;\n  z-index: 101;\n  -webkit-transition: 150ms ease-in-out;\n  transition: 150ms ease-in-out;\n  border-left: 0px solid;\n  -webkit-box-shadow: 0 0 0 0 transparent;\n  box-shadow: 0 0 0 0 transparent;\n}\n\n:host([dir=rtl]) {\n  text-align: right;\n}\n\n:host([active]) {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  opacity: 1;\n  max-height: 100%;\n  pointer-events: initial;\n  border-left-width: 3px;\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n}\n\nslot[name=notice-title]::slotted(div),\ndiv::slotted([slot=notice-title]) {\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n\nslot[name=notice-message]::slotted(div),\ndiv::slotted([slot=notice-message]) {\n  display: inline;\n  margin-right: var(--calcite-notice-spacing-token-small);\n  color: var(--calcite-ui-text-2);\n}\n\n:host([dir=rtl]) slot[name=notice-message]::slotted(div),\n:host([dir=rtl]) div::slotted([slot=notice-message]) {\n  margin-right: unset;\n  margin-left: var(--calcite-notice-spacing-token-small);\n}\n\n.notice-content {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  min-width: 0;\n  word-wrap: break-word;\n  padding: var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0;\n}\n.notice-content:first-of-type {\n  padding-left: var(--calcite-notice-spacing-token-large);\n}\n.notice-content:last-of-type:not(:only-of-type) {\n  padding-right: var(--calcite-notice-spacing-token-large);\n}\n\n:host([dir=rtl]) .notice-content:first-of-type {\n  padding-right: var(--calcite-notice-spacing-token-large);\n  padding-left: initial;\n}\n:host([dir=rtl]) .notice-content:last-of-type:not(:only-of-type) {\n  padding-left: var(--calcite-notice-spacing-token-large);\n  padding-right: initial;\n}\n\n.notice-icon {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.notice-close {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  background-color: transparent;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: var(--calcite-ui-text-3);\n}\n.notice-close:hover, .notice-close:focus {\n  background-color: var(--calcite-ui-foreground-hover);\n}\n.notice-close:active {\n  background-color: var(--calcite-ui-foreground-press);\n}\n\n:host([color=blue]) {\n  border-left-color: var(--calcite-ui-blue);\n}\n:host([color=blue]) .notice-icon {\n  color: var(--calcite-ui-blue);\n}\n\n:host([color=red]) {\n  border-left-color: var(--calcite-ui-red);\n}\n:host([color=red]) .notice-icon {\n  color: var(--calcite-ui-red);\n}\n\n:host([color=yellow]) {\n  border-left-color: var(--calcite-ui-yellow);\n}\n:host([color=yellow]) .notice-icon {\n  color: var(--calcite-ui-yellow);\n}\n\n:host([color=green]) {\n  border-left-color: var(--calcite-ui-green);\n}\n:host([color=green]) .notice-icon {\n  color: var(--calcite-ui-green);\n}"; }
};

export { CalciteNotice as calcite_notice };
