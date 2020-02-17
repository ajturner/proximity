import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-18271712.js';
import { g as getElementDir } from './dom-8fd67d72.js';

const CalciteAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //---------------------------------------------------------------------------
        /** Is the alert currently active or not */
        this.active = false;
        /** Close the alert automatically (recommended for passive, non-blocking alerts) */
        this.autoDismiss = false;
        /** Duration of autoDismiss (only used with `autoDismiss`) */
        this.autoDismissDuration = this.autoDismiss ? "medium" : null;
        /** Color for the alert (will apply to top border and icon) */
        this.color = "blue";
        /** Select theme (light or dark) */
        this.theme = "light";
        /** specify the scale of the button, defaults to m */
        this.scale = "m";
        /** specify if the alert should display an icon */
        this.icon = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** a managed list of alerts */
        this.alertQueue = [];
        /** Unique ID for this alert */
        this.alertId = this.el.id;
        /** map dismissal durations */
        this.autoDismissDurations = {
            slow: 14000,
            medium: 10000,
            fast: 6000
        };
        this.iconDefaults = {
            green: "checkCircle",
            yellow: "exclamationMarkTriangle",
            red: "exclamationMarkTriangle",
            blue: "lightbulb"
        };
        this.calciteAlertClose = createEvent(this, "calciteAlertClose", 7);
        this.calciteAlertOpen = createEvent(this, "calciteAlertOpen", 7);
        this.calciteAlertSync = createEvent(this, "calciteAlertSync", 7);
    }
    // listen for emitted open event from other calcite alerts and determine active state
    alertOpen(event) {
        this.calciteAlertSync.emit({ alertQueue: this.alertQueue });
        if (!this.alertQueue.includes(event.detail.requestedAlert)) {
            this.alertQueue.push(event.detail.requestedAlert);
        }
        this.determineActiveAlert();
    }
    // listen for emitted close event from other calcite alerts and determine active state
    alertClose(event) {
        if (this.alertQueue.includes(event.detail.requestedAlert)) {
            this.alertQueue = this.alertQueue.filter(e => e !== event.detail.requestedAlert);
        }
        if (this.alertId === event.detail.requestedAlert)
            this.active = false;
        this.determineActiveAlert();
    }
    // when an alert is opened / added to dom, update the queue to match any previously present queues
    alertRegister(event) {
        if (this.alertQueue !== event.detail.alertQueue) {
            this.alertQueue = event.detail.alertQueue;
        }
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
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let durations = ["slow", "medium", "fast"];
        if (this.autoDismissDuration !== null &&
            !durations.includes(this.autoDismissDuration)) {
            this.autoDismissDuration = "medium";
        }
    }
    componentDidLoad() {
        this.alertLinkEl = this.el.querySelectorAll("calcite-button")[0];
    }
    render() {
        const dir = getElementDir(this.el);
        const closeButton = (h("button", { class: "alert-close", "aria-label": "close", onClick: () => this.close(), ref: el => (this.closeButton = el) }, h("calcite-icon", { icon: "x", scale: "s" })));
        const count = (h("div", { class: `${this.alertQueue.length > 1 ? "active " : ""}alert-count` }, "+", this.alertQueue.length > 2 ? this.alertQueue.length - 1 : 1));
        const progress = h("div", { class: "alert-dismiss-progress" });
        const role = !this.active
            ? null
            : this.autoDismiss
                ? "alert"
                : "alertdialog";
        return (h(Host, { active: this.active, dir: dir, role: role }, this.icon ? this.setIcon() : null, h("div", { class: "alert-content" }, h("slot", { name: "alert-title" }), h("slot", { name: "alert-message" }), h("slot", { name: "alert-link" })), count, !this.autoDismiss ? closeButton : null, this.active && this.autoDismiss ? progress : null));
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** open alert and emit the opened alert  */
    async open() {
        this.calciteAlertOpen.emit({
            requestedAlert: this.alertId,
            alertQueue: this.alertQueue
        });
    }
    /** close alert and emit the closed alert */
    async close() {
        this.calciteAlertClose.emit({
            requestedAlert: this.alertId,
            alertQueue: this.alertQueue
        });
    }
    /** focus the close button, if present and requested */
    async setFocus() {
        if (!this.closeButton && !this.alertLinkEl) {
            return;
        }
        if (this.alertLinkEl)
            this.alertLinkEl.setFocus();
        else if (this.closeButton) {
            this.closeButton.focus();
        }
    }
    /** based on the current alert determine which alert is active */
    determineActiveAlert() {
        this.alertQueueLength = this.alertQueue.length;
        this.currentAlert = this.alertQueue.length > 0 ? this.alertQueue[0] : null;
        if (!this.active && this.currentAlert === this.alertId) {
            setTimeout(() => (this.active = true), 300);
            if (this.autoDismiss) {
                setTimeout(() => this.close(), this.autoDismissDurations[this.autoDismissDuration]);
            }
        }
    }
    setIcon() {
        var path = this.iconDefaults[this.color];
        return (h("div", { class: "alert-icon" }, h("calcite-icon", { icon: path, filled: true, scale: "s" })));
    }
    get el() { return getElement(this); }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  --calcite-alert-dismiss-progress-background: rgba(255, 255, 255, 0.8);\n}\n\n:host([theme=dark]) {\n  --calcite-alert-dismiss-progress-background: rgba(43, 43, 43, 0.8);\n}\n\n:host([scale=s]) {\n  --calcite-alert-width: 40em;\n  --calcite-alert-spacing-token-small: 0.75rem;\n  --calcite-alert-spacing-token-large: 1rem;\n}\n:host([scale=s]) slot[name=alert-title]::slotted(div),\n:host([scale=s]) div::slotted([slot=alert-title]) {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n:host([scale=s]) slot[name=alert-message]::slotted(div),\n:host([scale=s]) div::slotted([slot=alert-message]) {\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n:host([scale=s]) ::slotted(calcite-button) {\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n\n:host([scale=m]) {\n  --calcite-alert-width: 50em;\n  --calcite-alert-spacing-token-small: 1rem;\n  --calcite-alert-spacing-token-large: 1.5rem;\n}\n:host([scale=m]) slot[name=alert-title]::slotted(div),\n:host([scale=m]) div::slotted([slot=alert-title]) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n:host([scale=m]) slot[name=alert-message]::slotted(div),\n:host([scale=m]) div::slotted([slot=alert-message]) {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n:host([scale=m]) ::slotted(calcite-button) {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n:host([scale=l]) {\n  --calcite-alert-width: 60em;\n  --calcite-alert-spacing-token-small: 1.2rem;\n  --calcite-alert-spacing-token-large: 1.875rem;\n}\n:host([scale=l]) slot[name=alert-title]::slotted(div),\n:host([scale=l]) div::slotted([slot=alert-title]) {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n:host([scale=l]) slot[name=alert-message]::slotted(div),\n:host([scale=l]) div::slotted([slot=alert-message]) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n:host([scale=l]) ::slotted(calcite-button) {\n  font-size: 0.9375rem;\n  line-height: 1.5;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -ms-flex-pack: center;\n  justify-content: center;\n  pointer-events: none;\n  margin: 0 auto;\n  width: var(--calcite-alert-width);\n  max-width: 90%;\n  max-height: 0;\n  background-color: var(--calcite-ui-foreground);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);\n  border-radius: var(--calcite-border-radius);\n  opacity: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: 101;\n  -webkit-transform: translate3d(0, 1.5rem, 0);\n  transform: translate3d(0, 1.5rem, 0);\n  -webkit-transition: 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;\n  transition: 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;\n  border-top: 0px solid transparent;\n}\n\@media only screen and (max-width: 860px) {\n  :host {\n    width: 100%;\n    max-width: 100%;\n    border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0;\n  }\n}\n:host:host(.hydrated) {\n  visibility: hidden !important;\n}\n\n:host([active]) {\n  opacity: 1;\n  max-height: 100%;\n  -webkit-transform: translate3d(0, -1.5rem, 0);\n  transform: translate3d(0, -1.5rem, 0);\n  pointer-events: initial;\n  border-top-width: 3px;\n}\n:host([active]):host(.hydrated) {\n  visibility: visible !important;\n}\n\@media only screen and (max-width: 860px) {\n  :host([active]) {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\nslot[name=alert-title]::slotted(div),\ndiv::slotted([slot=alert-title]) {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: var(--calcite-ui-text-1);\n  font-weight: 500;\n}\n\nslot[name=alert-message]::slotted(div),\ndiv::slotted([slot=alert-message]) {\n  display: inline;\n  margin-right: 0.75rem;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  color: var(--calcite-ui-text-2);\n}\n\n:host([dir=rtl]) slot[name=alert-message]::slotted(div),\n:host([dir=rtl]) div::slotted([slot=alert-message]) {\n  margin-right: unset;\n  margin-left: 0.75rem;\n}\n\n.alert-content {\n  padding: var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  min-width: 0;\n  word-wrap: break-word;\n  padding: var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) 0;\n}\n\@media only screen and (max-width: 860px) {\n  .alert-content {\n    padding: 1.5rem;\n  }\n}\n.alert-content:first-of-type {\n  padding-left: var(--calcite-alert-spacing-token-large);\n}\n\@media only screen and (max-width: 860px) {\n  .alert-content {\n    padding: var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large) 0;\n  }\n}\n\n:host([dir=rtl]) .alert-content:first-of-type {\n  padding-right: var(--calcite-alert-spacing-token-large);\n  padding-left: none;\n}\n\@media only screen and (max-width: 860px) {\n  :host([dir=rtl]) .alert-content {\n    padding: var(--calcite-alert-spacing-token-large) 0 var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small);\n  }\n}\n\n.alert-icon {\n  padding: var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\@media only screen and (max-width: 860px) {\n  .alert-icon {\n    padding: 1.5rem;\n  }\n}\n\n.alert-close {\n  padding: var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  background-color: transparent;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: var(--calcite-ui-text-3);\n}\n\@media only screen and (max-width: 860px) {\n  .alert-close {\n    padding: 1.5rem;\n  }\n}\n.alert-close:hover, .alert-close:focus {\n  background-color: var(--calcite-ui-foreground-hover);\n}\n.alert-close:active {\n  background-color: var(--calcite-ui-foreground-press);\n}\n\n:host([dir=rtl]) .alert-close {\n  border-radius: 0 0 0 var(--calcite-border-radius);\n}\n\@media only screen and (max-width: 860px) {\n  :host([dir=rtl]) .alert-close {\n    border-radius: 0;\n  }\n}\n\n.alert-count {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  overflow: hidden;\n  width: 0;\n  visibility: hidden;\n  font-weight: 500;\n  text-align: center;\n  color: var(--calcite-ui-text-2);\n  opacity: 0;\n  border-left: 0px solid transparent;\n  border-right: 0px solid transparent;\n  cursor: default;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n}\n.alert-count.active {\n  visibility: visible;\n  opacity: 1;\n  padding: 0 0.375rem;\n  width: 3rem;\n  border-left: 1px solid var(--calcite-ui-border-3);\n  border-right: 1px solid var(--calcite-ui-border-3);\n}\n.alert-count.active:last-child {\n  border-right: 0px solid transparent;\n}\n\@media only screen and (max-width: 860px) {\n  .alert-count {\n    border-radius: 0;\n  }\n}\n\n:host([dir=rtl]).active:last-child {\n  border-left: 1px solid var(--calcite-ui-border-3);\n  border-right: 0px solid transparent;\n}\n\n.alert-dismiss-progress {\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 3px;\n  z-index: 103;\n}\n.alert-dismiss-progress:after {\n  height: 3px;\n  top: -3px;\n  right: 0;\n  display: block;\n  position: absolute;\n  border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0;\n  content: \"\";\n  background-color: var(--calcite-alert-dismiss-progress-background);\n  z-index: 104;\n}\n\n:host([color=blue]) {\n  border-top-color: var(--calcite-ui-blue);\n}\n:host([color=blue]) .alert-icon {\n  color: var(--calcite-ui-blue);\n}\n\n:host([color=red]) {\n  border-top-color: var(--calcite-ui-red);\n}\n:host([color=red]) .alert-icon {\n  color: var(--calcite-ui-red);\n}\n\n:host([color=yellow]) {\n  border-top-color: var(--calcite-ui-yellow);\n}\n:host([color=yellow]) .alert-icon {\n  color: var(--calcite-ui-yellow);\n}\n\n:host([color=green]) {\n  border-top-color: var(--calcite-ui-green);\n}\n:host([color=green]) .alert-icon {\n  color: var(--calcite-ui-green);\n}\n\n:host([auto-dismiss-duration=fast]) .alert-dismiss-progress:after {\n  -webkit-animation: dismissProgress 6000ms ease-out;\n  animation: dismissProgress 6000ms ease-out;\n}\n\n:host([auto-dismiss-duration=medium]) .alert-dismiss-progress:after {\n  -webkit-animation: dismissProgress 10000ms ease-out;\n  animation: dismissProgress 10000ms ease-out;\n}\n\n:host([auto-dismiss-duration=slow]) .alert-dismiss-progress:after {\n  -webkit-animation: dismissProgress 14000ms ease-out;\n  animation: dismissProgress 14000ms ease-out;\n}\n\n\@-webkit-keyframes dismissProgress {\n  0% {\n    width: 0;\n    opacity: 0.8;\n  }\n  100% {\n    width: 100%;\n    opacity: 1;\n  }\n}\n\n\@keyframes dismissProgress {\n  0% {\n    width: 0;\n    opacity: 0.8;\n  }\n  100% {\n    width: 100%;\n    opacity: 1;\n  }\n}"; }
};

export { CalciteAlert as calcite_alert };
