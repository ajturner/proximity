import { r as registerInstance, h, H as Host, d as getElement } from './core-18271712.js';
import { g as getElementDir } from './dom-8fd67d72.js';
import { g as guid } from './guid-3f4b9e31.js';

const CalciteLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Show the loader
         */
        this.isActive = false;
        /**
         * Inline loaders are smaller and will appear to the left of the text
         */
        this.inline = false;
        /**
         * Use indeterminate if finding actual progress value is impossible
         */
        this.type = "indeterminate";
        /**
         * Percent complete of 100, only valid for determinate indicators
         */
        this.value = 0;
        /**
         * Text which should appear under the loading indicator (optional)
         */
        this.text = "";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         */
        this.loaderBarOffsets = [0, 0, 0];
        /**
         * @internal
         */
        this.loaderBarRates = [1, 2.25, 3.5];
        /**
         * @internal
         */
        this.isEdge = false;
        /**
         * @internal
         */
        this.animationID = null;
        /**
         * @internal
         */
        this.guid = `calcite-loader-${guid()}`;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        this.isEdge = /Edge/.test(navigator.userAgent);
        if (this.isEdge) {
            this.updateOffset();
        }
    }
    componentDidUnload() {
        if (this.animationID) {
            window.cancelAnimationFrame(this.animationID);
        }
    }
    render() {
        const dir = getElementDir(this.el);
        const id = this.el.id || this.guid;
        const ariaAttributes = {
            "aria-valuenow": this.value,
            "aria-valuemin": 0,
            "aria-valuemax": 100
        };
        const size = this.inline ? 16 : 56;
        const viewbox = this.inline ? "0 0 16 16" : "0 0 56 56";
        const isDeterminate = this.type === "determinate";
        const styleProperties = {};
        if (this.isEdge) {
            styleProperties["--calcite-loader-offset"] = `${this.loaderBarOffsets[0]}%`;
            styleProperties["--calcite-loader-offset2"] = `${this.loaderBarOffsets[1]}%`;
            styleProperties["--calcite-loader-offset3"] = `${this.loaderBarOffsets[2]}%`;
        }
        const progress = {
            "--calcite-loader-progress": `${-400 - this.value * 4}%`
        };
        return (h(Host, Object.assign({ id: id, dir: dir, role: "progressbar" }, (this.type === "determinate" ? ariaAttributes : {}), { style: styleProperties }), h("svg", { viewBox: viewbox, class: "loader__square" }, h("rect", { width: size, height: size })), h("svg", { viewBox: viewbox, class: "loader__square loader__square--2" }, h("rect", { width: size, height: size })), h("svg", { viewBox: viewbox, class: "loader__square loader__square--3", style: isDeterminate ? progress : {} }, h("rect", { width: size, height: size })), this.text ? h("div", { class: "loader__text" }, this.text) : "", this.value ? (h("div", { class: "loader__percentage" }, Math.floor(this.value))) : ("")));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    updateOffset() {
        this.loaderBarOffsets = this.rotateLoaderBars(this.loaderBarOffsets);
        this.animationID = window.requestAnimationFrame(() => this.updateOffset());
    }
    /**
     * @internal
     */
    rotateLoaderBars(barOffsets) {
        return barOffsets.map((offset, i) => {
            if (offset > -400) {
                return offset - this.loaderBarRates[i];
            }
            else {
                return 0;
            }
        });
    }
    get el() { return getElement(this); }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  --calcite-loader-spot: var(--calcite-ui-blue);\n  --calcite-loader-spot-light: var(--calcite-ui-blue);\n  --calcite-loader-spot-dark: var(--calcite-ui-blue);\n  --calcite-loader-neutral: #eaeaea;\n  --calcite-loader-padding: 4rem;\n}\n\n:host([theme=dark]) {\n  --calcite-loader-neutral: #151515;\n}\n\n:host([no-padding]) {\n  --calcite-loader-padding: 0;\n}\n\n:host {\n  position: relative;\n  display: none;\n  padding-bottom: var(--calcite-loader-padding);\n  padding-top: var(--calcite-loader-padding);\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 54px;\n  stroke: var(--calcite-loader-light);\n  stroke-width: 6px;\n  stroke-dashoffset: 0;\n  fill: none;\n  animation: loader-color-shift 2s alternate-reverse infinite linear;\n}\n\n:host([is-active]) {\n  display: block;\n}\n\n.loader__text {\n  display: block;\n  margin-top: var(--calcite-loader-padding);\n  text-align: center;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.loader__percentage {\n  display: block;\n  width: 54px;\n  position: absolute;\n  top: var(--calcite-loader-padding);\n  left: 50%;\n  margin-left: -27px;\n  margin-top: 27px;\n  text-align: center;\n  font-size: 0.875rem;\n  line-height: 0.25;\n}\n\n.loader__square {\n  width: 54px;\n  height: 54px;\n  position: absolute;\n  top: var(--calcite-loader-padding);\n  left: 0;\n  left: 50%;\n  margin-left: -27px;\n  stroke-dasharray: 50% 350%;\n  -webkit-animation: loader-clockwise 2s infinite linear;\n  animation: loader-clockwise 2s infinite linear;\n}\n\n.loader__square--2 {\n  stroke-dasharray: 100% 225% 50% 25%;\n  -webkit-animation: loader-clockwise 1s infinite linear;\n  animation: loader-clockwise 1s infinite linear;\n}\n\n.loader__square--3 {\n  stroke-dasharray: 50% 50% 75% 225%;\n  -webkit-animation: loader-clockwise 1.85s infinite linear;\n  animation: loader-clockwise 1.85s infinite linear;\n}\n\n\@supports (-ms-ime-align: auto) {\n  .loader__square {\n    stroke-dashoffset: var(--calcite-loader-offset);\n    -webkit-animation: none;\n    animation: none;\n  }\n\n  .loader__square--2 {\n    stroke-dashoffset: var(--calcite-loader-offset2);\n  }\n\n  .loader__square--3 {\n    stroke-dashoffset: var(--calcite-loader-offset3);\n  }\n}\n:host([type=determinate]) {\n  stroke: var(--calcite-loader-neutral);\n  -webkit-animation: none;\n  animation: none;\n}\n:host([type=determinate]) .loader__square--3 {\n  stroke: var(--calcite-loader-spot);\n  stroke-dasharray: 400%;\n  stroke-dashoffset: var(--calcite-loader-progress);\n  -webkit-transition: 50ms linear all;\n  transition: 50ms linear all;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-animation: none;\n  animation: none;\n}\n\n:host([inline]) {\n  stroke: currentColor;\n  stroke-width: 4px;\n  -webkit-animation: none;\n  animation: none;\n  margin: 0;\n  padding-bottom: 0;\n  padding-top: 0;\n  position: relative;\n  height: 16px;\n  min-height: 16px;\n  width: 16px;\n  margin-right: 8px;\n  vertical-align: -2px;\n}\n\n:host([inline][dir=rtl]) {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n:host([is-active][inline]) {\n  display: inline-block;\n}\n\n:host([inline]) .loader__square {\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n}\n\n\@-webkit-keyframes loader-color-shift {\n  0% {\n    stroke: var(--calcite-loader-spot-light);\n  }\n  100% {\n    stroke: var(--calcite-loader-spot-dark);\n  }\n}\n\n\@keyframes loader-color-shift {\n  0% {\n    stroke: var(--calcite-loader-spot-light);\n  }\n  100% {\n    stroke: var(--calcite-loader-spot-dark);\n  }\n}\n\@-webkit-keyframes loader-clockwise {\n  0% {\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dashoffset: -400%;\n  }\n}\n\@keyframes loader-clockwise {\n  0% {\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dashoffset: -400%;\n  }\n}"; }
};

export { CalciteLoader as calcite_loader };
