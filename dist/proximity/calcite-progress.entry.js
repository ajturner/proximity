import { r as registerInstance, h, H as Host, d as getElement } from './core-18271712.js';
import { b as getElementTheme } from './dom-8fd67d72.js';

const CalciteProgress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Use indeterminate if finding actual progress value is impossible
         */
        this.type = "determinate";
        /**
         * Percent complete of 100
         */
        this.value = 0;
        /**
         * Text label for the progress indicator
         */
        this.text = null;
        /**
         * Fill bar in the opposite direction
         */
        this.reversed = false;
        /** Select theme (light or dark) */
        this.theme = "light";
    }
    render() {
        const theme = getElementTheme(this.el);
        return (h(Host, { class: "calcite-progress", type: this.type, reversed: this.reversed, style: {
                "--percentage-value": `${this.value * 100}%`
            }, theme: theme }, h("div", { class: "calcite-progress--track" }), h("div", { class: {
                "calcite-progress--bar": true,
                "--indeterminate": this.type === "indeterminate",
                "--determinate": this.type === "determinate"
            } }), this.text ? (h("div", { class: "calcite-progress--text" }, this.text)) : null));
    }
    get el() { return getElement(this); }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  --calcite-track-color: #eaeaea;\n  position: relative;\n  display: block;\n}\n\n:host([theme=dark]) {\n  --calcite-track-color: #353535;\n}\n\n.calcite-progress--track,\n.calcite-progress--bar {\n  content: \"\";\n  opacity: 1;\n  position: absolute;\n  height: 2px;\n  top: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n\n.calcite-progress--track {\n  background: var(--calcite-track-color);\n  z-index: 0;\n  width: 100%;\n}\n\n.calcite-progress--bar {\n  background-color: var(--calcite-ui-blue);\n  z-index: 0;\n}\n\n.--indeterminate {\n  width: 20%;\n  -webkit-animation: looping-progress-bar-ani 1500ms linear infinite;\n  animation: looping-progress-bar-ani 1500ms linear infinite;\n}\n\n.--determinate {\n  width: var(--percentage-value);\n}\n\n.calcite-progress--text {\n  padding: 20px 0 0 0;\n}\n\n\@-webkit-keyframes looping-progress-bar-ani {\n  0% {\n    left: 0%;\n    width: 0%;\n  }\n  20% {\n    left: 0%;\n    width: 20%;\n  }\n  80% {\n    left: 80%;\n    width: 20%;\n  }\n  100% {\n    left: 100%;\n    width: 0%;\n  }\n}\n\n\@keyframes looping-progress-bar-ani {\n  0% {\n    left: 0%;\n    width: 0%;\n  }\n  20% {\n    left: 0%;\n    width: 20%;\n  }\n  80% {\n    left: 80%;\n    width: 20%;\n  }\n  100% {\n    left: 100%;\n    width: 0%;\n  }\n}"; }
};

export { CalciteProgress as calcite_progress };
