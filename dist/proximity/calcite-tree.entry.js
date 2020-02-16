import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-fb92fa04.js';
import { b as getElementTheme, g as getElementDir, n as nodeListToArray } from './dom-8fd67d72.js';
import { T as TreeSelectionMode } from './TreeSelectionMode-ad98c060.js';

const CalciteTree = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Be sure to add a jsdoc comment describing your propery for the generated readme file.
         * If your property should be hidden from documentation, you can use the `@internal` tag
         */
        this.lines = false;
        this.root = true;
        this.theme = "light";
        this.size = "m";
        this.selectionMode = TreeSelectionMode.Single;
        this.calciteTreeSelect = createEvent(this, "calciteTreeSelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillUpdate() { }
    componentWillRender() {
        const parent = this.el.parentElement.closest("calcite-tree");
        this.theme = getElementTheme(this.el);
        this.lines = parent ? parent.lines : this.lines;
        this.size = parent ? parent.size : this.size;
        this.selectionMode = parent ? parent.selectionMode : this.selectionMode;
        this.root = parent ? false : true;
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { tabindex: this.root ? "1" : undefined, dir: dir, "aria-role": this.root ? "tree" : undefined, "aria-multiselectable": this.selectionMode === TreeSelectionMode.Multi ||
                this.selectionMode === TreeSelectionMode.MultiChildren }, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onFocus() {
        if (this.root) {
            const selectedNode = this.el.querySelector("calcite-tree-item[selected]");
            const firstNode = this.el.querySelector("calcite-tree-item");
            (selectedNode || firstNode).focus();
        }
    }
    onClick(e) {
        const target = e.target;
        const childItems = nodeListToArray(target.querySelectorAll("calcite-tree-item"));
        const shouldSelect = this.selectionMode !== null &&
            (!target.hasChildren ||
                (target.hasChildren &&
                    (this.selectionMode === TreeSelectionMode.Children ||
                        this.selectionMode === TreeSelectionMode.MultiChildren)));
        const shouldModifyToCurrentSelection = e.detail.modifyCurrentSelection &&
            (this.selectionMode === TreeSelectionMode.Multi ||
                this.selectionMode === TreeSelectionMode.MultiChildren);
        const shouldSelectChildren = this.selectionMode === TreeSelectionMode.MultiChildren ||
            this.selectionMode === TreeSelectionMode.Children;
        const shouldClearCurrentSelection = !shouldModifyToCurrentSelection &&
            (((this.selectionMode === TreeSelectionMode.Single ||
                this.selectionMode === TreeSelectionMode.Multi) &&
                childItems.length <= 0) ||
                (this.selectionMode === TreeSelectionMode.Children ||
                    this.selectionMode === TreeSelectionMode.MultiChildren));
        const shouldExpandTarget = this.selectionMode === TreeSelectionMode.Children ||
            this.selectionMode === TreeSelectionMode.MultiChildren;
        if (this.root) {
            const targetItems = [];
            if (shouldSelect) {
                targetItems.push(target);
            }
            if (shouldSelectChildren) {
                childItems.forEach(treeItem => {
                    targetItems.push(treeItem);
                });
            }
            if (shouldClearCurrentSelection) {
                const selectedItems = nodeListToArray(this.el.querySelectorAll("calcite-tree-item[selected]"));
                selectedItems.forEach(treeItem => {
                    if (!targetItems.includes(treeItem)) {
                        treeItem.selected = false;
                    }
                });
            }
            if (shouldExpandTarget && !e.detail.forceToggle) {
                target.expanded = true;
            }
            if (shouldModifyToCurrentSelection) {
                window.getSelection().removeAllRanges();
            }
            if ((shouldModifyToCurrentSelection && target.selected) ||
                (shouldSelectChildren && e.detail.forceToggle)) {
                targetItems.forEach(treeItem => {
                    treeItem.selected = false;
                });
            }
            else {
                targetItems.forEach(treeItem => {
                    treeItem.selected = true;
                });
            }
        }
        if (this.root) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.calciteTreeSelect.emit({
            selected: nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter(i => i.selected)
        });
    }
    get el() { return getElement(this); }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  display: block;\n  outline: none;\n  --calcite-tree-text: #404040;\n  --calcite-tree-text-hover: #151515;\n  --calcite-tree-text-active: #0b0b0b;\n  --calcite-tree-chevron: #bfbfbf;\n  --calcite-tree-chevron-hover: #6a6a6a;\n  --calcite-tree-vertical-padding: 0.375rem;\n  --calcite-tree-indicator: #bfbfbf;\n  --calcite-tree-indicator-active: var(--calcite-ui-blue);\n  --calcite-tree-indicator-first-start: 0.1rem;\n  --calcite-tree-indicator-first-end: auto;\n  --calcite-tree-indicator-distance-start: 0.15rem;\n  --calcite-tree-indicator-distance-end: auto;\n  --calcite-tree-icon-edge-distance-start: -0.2rem;\n  --calcite-tree-icon-edge-distance-end: 0;\n  --calcite-tree-icon-content-distance-start: 0.375rem;\n  --calcite-tree-icon-content-distance-end: 0;\n  --calcite-tree-indent-start: 1.4rem;\n  --calcite-tree-indent-end: 0;\n  --calcite-tree-children-indent-start: 0.25rem;\n  --calcite-tree-children-indent-end: 0;\n  --calcite-tree-children-padding-start: 1rem;\n  --calcite-tree-children-padding-end: 0;\n  --calcite-tree-line-position-start: 0.05rem;\n  --calcite-tree-line-position-end: 0;\n  --calcite-tree-parent-line-position-start: -0.95rem;\n  --calcite-tree-parent-line-position-end: 0;\n  --calcite-tree-line-width: 1px;\n  --calcite-tree-hover-line-width: 3px;\n}\n\n:host([theme=dark]) {\n  --calcite-tree-text: #d4d4d4;\n  --calcite-tree-text-hover: #eaeaea;\n  --calcite-tree-text-active: #f3f3f3;\n  --calcite-tree-chevron: #555555;\n  --calcite-tree-chevron-hover: #959595;\n  --calcite-tree-indicator: #555555;\n  --calcite-tree-indicator-active: var(--calcite-ui-blue);\n}\n\n:host([lines]) {\n  --calcite-tree-line: #eaeaea;\n  --calcite-tree-line-hover: #cacaca;\n  --calcite-tree-line-active: var(--calcite-ui-blue);\n}\n\n:host([lines][theme=dark]) {\n  --calcite-tree-line: #555555;\n  --calcite-tree-line-hover: #808080;\n  --calcite-tree-line-active: var(--calcite-ui-blue);\n}\n\n:host([size=s]) {\n  --calcite-tree-hover-line-width: 2px;\n  --calcite-tree-vertical-padding: 0.1875rem;\n  --calcite-tree-children-indent-start: 0rem;\n  --calcite-tree-children-padding-start: 0.8rem;\n  --calcite-tree-line-position-start: 0.3rem;\n  --calcite-tree-parent-line-position-start: -0.5rem;\n}\n\n:host([dir=rtl]) {\n  --calcite-tree-indicator-first-start: 0;\n  --calcite-tree-indicator-first-end: 0.1rem;\n  --calcite-tree-indicator-distance-start: auto;\n  --calcite-tree-indicator-distance-end: 0.15rem;\n  --calcite-tree-icon-edge-distance-start: auto;\n  --calcite-tree-icon-edge-distance-end: -0.2rem;\n  --calcite-tree-icon-content-distance-start: 0;\n  --calcite-tree-icon-content-distance-end: 0.375rem;\n  --calcite-tree-indent-start: 0;\n  --calcite-tree-indent-end: 1.4rem;\n  --calcite-tree-children-indent-start: 0;\n  --calcite-tree-children-indent-end: 0.25rem;\n  --calcite-tree-children-padding-start: 0;\n  --calcite-tree-children-padding-end: 1rem;\n  --calcite-tree-line-position-start: 0;\n  --calcite-tree-line-position-end: 0.05rem;\n  --calcite-tree-parent-line-position-start: 0;\n  --calcite-tree-parent-line-position-end: -0.95rem;\n}\n\n:host([dir=rtl][size=s]) {\n  --calcite-tree-children-indent-end: 0rem;\n  --calcite-tree-children-padding-end: 0.8rem;\n  --calcite-tree-line-position-end: 0.3rem;\n  --calcite-tree-parent-line-position-end: -0.5rem;\n}"; }
};

export { CalciteTree as calcite_tree };
