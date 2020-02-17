import { r as registerInstance, c as createEvent, h, H as Host, B as Build, d as getElement } from './core-18271712.js';
import { S as SPACE, a as ENTER } from './keys-08b2c0fd.js';
import { g as getElementDir } from './dom-8fd67d72.js';

const CalciteSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** True if the switch is initially on */
        this.switched = false;
        /** The name of the checkbox input */
        this.name = "";
        /** The value of the checkbox input */
        this.value = "";
        /** What color the switch should be */
        this.color = "blue";
        /** The scale of the button */
        this.scale = "m";
        /** The component's theme. */
        this.theme = "light";
        this.syncThisToProxyInput = () => {
            this.switched = this.inputProxy.hasAttribute("checked");
            this.name = this.inputProxy.name;
            this.value = this.inputProxy.value;
        };
        this.syncProxyInputToThis = () => {
            this.switched
                ? this.inputProxy.setAttribute("checked", "")
                : this.inputProxy.removeAttribute("checked");
            this.inputProxy.setAttribute("name", this.name);
            this.inputProxy.setAttribute("value", this.value);
        };
        this.calciteSwitchChange = createEvent(this, "calciteSwitchChange", 7);
    }
    onClick(e) {
        // prevent duplicate click events that occur
        // when the component is wrapped in a label and checkbox is clicked
        if ((this.el.closest("label") && e.target === this.inputProxy) ||
            (!this.el.closest("label") && e.target === this.el)) {
            this.switched = !this.switched;
        }
    }
    keyDownHandler(e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.switched = !this.switched;
        }
    }
    switchWatcher() {
        this.calciteSwitchChange.emit();
        this.switched
            ? this.inputProxy.setAttribute("checked", "")
            : this.inputProxy.removeAttribute("checked");
    }
    connectedCallback() {
        // prop validations
        let color = ["blue", "red"];
        if (!color.includes(this.color))
            this.color = "blue";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let theme = ["dark", "light"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        this.setupProxyInput();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillRender() {
        this.syncProxyInputToThis();
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { role: "checkbox", dir: dir, "aria-checked": this.switched.toString(), tabindex: "0" }, h("div", { class: "track" }, h("div", { class: "handle" })), h("slot", null)));
    }
    setupProxyInput() {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            this.inputProxy.type = "checkbox";
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
        if (Build.isBrowser) {
            this.observer = new MutationObserver(this.syncThisToProxyInput);
            this.observer.observe(this.inputProxy, { attributes: true });
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "switched": ["switchWatcher"]
    }; }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  --calcite-switch-track-background: #f3f3f3;\n  --calcite-switch-track-border: #d4d4d4;\n  --calcite-switch-handle-background: #ffffff;\n  --calcite-switch-handle-border: #959595;\n  --calcite-switch-hover-handle-border: var(--calcite-ui-blue-hover);\n  --calcite-switch-hover-track-background: #eaeaea;\n  --calcite-switch-hover-track-border: #bfbfbf;\n  --calcite-switch-switched-track-background: var(--calcite-ui-blue-hover);\n  --calcite-switch-switched-track-border: var(--calcite-ui-blue-press);\n  --calcite-switch-switched-handle-border: var(--calcite-ui-blue);\n  --calcite-switch-switched-hover-track-background: var(--calcite-ui-blue);\n  --calcite-switch-switched-hover-track-border: var(--calcite-ui-blue-hover);\n  --calcite-switch-switched-hover-handle-border: var(--calcite-ui-blue-press);\n  --calcite-switch-box-shadow-color: rgba(117, 117, 117, 0.5);\n  --calcite-switch-switched-box-shadow-color: rgba(0, 122, 194, 0.5);\n}\n\n:host([theme=dark]) {\n  --calcite-switch-track-background: #353535;\n  --calcite-switch-track-border: #555555;\n  --calcite-switch-handle-background: #2b2b2b;\n  --calcite-switch-handle-border: #959595;\n  --calcite-switch-hover-handle-border: var(--calcite-ui-blue-hover);\n  --calcite-switch-hover-track-background: #404040;\n  --calcite-switch-hover-track-border: #808080;\n  --calcite-switch-switched-track-background: var(--calcite-ui-blue-hover);\n  --calcite-switch-switched-track-border: var(--calcite-ui-blue);\n  --calcite-switch-switched-handle-border: var(--calcite-ui-blue);\n  --calcite-switch-switched-hover-track-background: var(--calcite-ui-blue);\n  --calcite-switch-switched-hover-track-border: var(--calcite-ui-blue);\n  --calcite-switch-switched-hover-handle-border: var(--calcite-ui-blue-hover);\n  --calcite-switch-switched-box-shadow-color: rgba(0, 160, 255, 0.5);\n}\n\n:host([color=red]) {\n  --calcite-switch-switched-track-background: var(--calcite-ui-red-hover);\n  --calcite-switch-switched-track-border: var(--calcite-ui-red);\n  --calcite-switch-hover-handle-border: var(--calcite-ui-red-hover);\n  --calcite-switch-switched-handle-border: var(--calcite-ui-red);\n  --calcite-switch-switched-hover-track-background: var(--calcite-ui-red);\n  --calcite-switch-switched-hover-track-border: var(--calcite-ui-red-hover);\n  --calcite-switch-switched-hover-handle-border: var(--calcite-ui-red-press);\n  --calcite-switch-switched-box-shadow-color: rgba(216, 48, 32, 0.5);\n}\n\n:host([theme=dark][color=red]) {\n  --calcite-switch-switched-track-background: var(--calcite-ui-red-hover) ;\n  --calcite-switch-switched-track-border: var(--calcite-ui-red);\n  --calcite-switch-hover-handle-border: var(--calcite-ui-red-hover) ;\n  --calcite-switch-switched-handle-border: var(--calcite-ui-red);\n  --calcite-switch-switched-hover-track-background: var(--calcite-ui-red);\n  --calcite-switch-switched-hover-track-border: var(--calcite-ui-red-press);\n  --calcite-switch-switched-hover-handle-border: var(--calcite-ui-red-press);\n  --calcite-switch-switched-box-shadow-color: rgba(254, 88, 62, 0.5);\n}\n\n:host([scale=s]) {\n  --calcite-switch-track-width: 28px;\n  --calcite-switch-track-height: 16px;\n  --calcite-switch-handle-size: 14px;\n}\n\n:host([scale=m]) {\n  --calcite-switch-track-width: 36px;\n  --calcite-switch-track-height: 20px;\n  --calcite-switch-handle-size: 18px;\n}\n\n:host([scale=l]) {\n  --calcite-switch-track-width: 44px;\n  --calcite-switch-track-height: 24px;\n  --calcite-switch-handle-size: 22px;\n}\n\n::slotted(input) {\n  display: none;\n}\n\n:host {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  top: -0.1em;\n  tap-highlight-color: transparent;\n  margin-right: 0.5em;\n}\n\n.track {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: var(--calcite-switch-track-width);\n  height: var(--calcite-switch-track-height);\n  background-color: var(--calcite-switch-track-background);\n  border-radius: 30px;\n  border: 1px solid var(--calcite-switch-track-border);\n  pointer-events: none;\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n}\n\n.handle {\n  position: absolute;\n  display: block;\n  width: var(--calcite-switch-handle-size);\n  height: var(--calcite-switch-handle-size);\n  top: -1px;\n  left: -1px;\n  right: auto;\n  background-color: var(--calcite-switch-handle-background);\n  border-radius: 30px;\n  border: 2px solid var(--calcite-switch-handle-border);\n  pointer-events: none;\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n}\n\n:host(:hover),\n:host(:focus) {\n  outline: none;\n}\n:host(:hover) .track,\n:host(:focus) .track {\n  background-color: var(--calcite-switch-hover-track-background);\n  border-color: var(--calcite-switch-hover-track-border);\n  -webkit-box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n}\n:host(:hover) .handle,\n:host(:focus) .handle {\n  border-color: var(--calcite-switch-hover-handle-border);\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n  right: auto;\n}\n\n:host([switched]) .track {\n  background-color: var(--calcite-switch-switched-track-background);\n  border-color: var(--calcite-switch-switched-track-border);\n}\n:host([switched]) .handle {\n  right: -1px;\n  left: auto;\n  border-color: var(--calcite-switch-switched-handle-border);\n  -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n}\n\n:host([switched]:focus) .track {\n  -webkit-box-shadow: 0 0 6px 1px var(--calcite-switch-switched-box-shadow-color);\n  box-shadow: 0 0 6px 1px var(--calcite-switch-switched-box-shadow-color);\n}\n\n:host([switched]:hover) .track {\n  background-color: var(--calcite-switch-switched-hover-track-background);\n  border-color: var(--calcite-switch-switched-hover-track-border);\n}\n:host([switched]:hover) .handle {\n  border-color: var(--calcite-switch-switched-hover-handle-border);\n}\n\n:host([dir=rtl]) {\n  margin-right: 0;\n  margin-left: 0.5em;\n}\n:host([dir=rtl]) .handle {\n  left: auto;\n  right: -1px;\n}\n\n:host([dir=rtl]:hover) .handle {\n  right: 1px;\n  left: auto;\n}\n\n:host([dir=rtl][switched]) .handle {\n  right: auto;\n  left: -1px;\n}\n\n:host([dir=rtl][switched]:active) .handle,\n:host([dir=rtl][switched]:focus) .handle {\n  right: auto;\n  left: -1px;\n}"; }
};

export { CalciteSwitch as calcite_switch };
