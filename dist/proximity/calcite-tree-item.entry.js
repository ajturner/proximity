import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-fb92fa04.js';
import { S as SPACE, a as ENTER, L as LEFT, R as RIGHT, U as UP, D as DOWN, H as HOME, E as END } from './keys-08b2c0fd.js';
import { c as getSlottedElements, g as getElementDir, n as nodeListToArray } from './dom-8fd67d72.js';
import { c as chevronRight16 } from './index-ca737843.js';
import { T as TreeSelectionMode } from './TreeSelectionMode-ad98c060.js';

const CalciteTreeItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Be sure to add a jsdoc comment describing your property for the generated readme file.
         * If your property should be hidden from documentation, you can use the `@internal` tag
         */
        this.selected = false;
        this.depth = -1;
        this.hasChildren = null;
        this.expanded = false;
        this.parentExpanded = false;
        this.iconClickHandler = (event) => {
            event.stopPropagation();
            this.expanded = !this.expanded;
            this.calciteTreeItemSelect.emit({
                modifyCurrentSelection: event.shiftKey,
                forceToggle: true
            });
        };
        this.childrenClickHandler = (event) => event.stopPropagation();
        this.calciteTreeItemSelect = createEvent(this, "calciteTreeItemSelect", 7);
    }
    expandedHandler(newValue) {
        if (this.childrenSlotWrapper) {
            const [childTree] = getSlottedElements(this.childrenSlotWrapper, "calcite-tree");
            if (childTree) {
                const items = getSlottedElements(childTree, "calcite-tree-item");
                items.forEach(item => (item.parentExpanded = newValue));
            }
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillRender() {
        this.hasChildren = !!this.el.querySelector("calcite-tree");
        let parentTree = this.el.closest("calcite-tree");
        this.selectionMode = parentTree.selectionMode;
        this.depth = 0;
        let nextParentTree;
        while (parentTree) {
            nextParentTree = parentTree.parentElement.closest("calcite-tree");
            if (nextParentTree === parentTree) {
                break;
            }
            else {
                parentTree = nextParentTree;
                this.depth = this.depth + 1;
            }
        }
    }
    render() {
        const dir = getElementDir(this.el);
        const icon = this.hasChildren ? (h("svg", { class: "calcite-tree-chevron", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", viewBox: "0 0 16 16", onClick: this.iconClickHandler, "data-test-id": "icon" }, h("path", { d: chevronRight16 }))) : null;
        return (h(Host, { tabindex: this.parentExpanded || this.depth === 1 ? "0" : "-1", dir: dir, "aria-role": "treeitem", "aria-hidden": this.parentExpanded || this.depth === 1 ? undefined : "true", "aria-selected": this.selected
                ? "true"
                : this.selectionMode === TreeSelectionMode.Multi ||
                    this.selectionMode === TreeSelectionMode.MultiChildren
                    ? "false"
                    : undefined, "aria-expanded": this.hasChildren ? this.expanded.toString() : undefined }, h("div", { class: "calcite-tree-node", ref: el => (this.defaultSlotWrapper = el) }, icon, h("slot", null)), h("div", { class: "calcite-tree-children", "data-test-id": "calcite-tree-children", role: this.hasChildren ? "group" : undefined, ref: el => (this.childrenSlotWrapper = el), onClick: this.childrenClickHandler }, h("slot", { name: "children" }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick(e) {
        // Solve for if the item is clicked somewhere outside the slotted anchor.
        // Anchor is triggered anywhere you click
        const [link] = getSlottedElements(this.defaultSlotWrapper, "a");
        if (link && (e.composedPath()[0].tagName.toLowerCase() !== "a")) {
            const target = link.target === "" ? "_self" : link.target;
            window.open(link.href, target);
        }
        this.expanded = !this.expanded;
        this.calciteTreeItemSelect.emit({
            modifyCurrentSelection: e.shiftKey,
            forceToggle: false
        });
    }
    keyDownHandler(e) {
        let root;
        switch (e.keyCode) {
            case SPACE:
                this.selected = !this.selected;
                e.preventDefault();
                e.stopPropagation();
                break;
            case ENTER:
                // activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.
                const link = nodeListToArray(this.el.children).find(e => e.matches("a"));
                if (link) {
                    link.click();
                    this.selected = true;
                }
                else {
                    this.selected = !this.selected;
                }
                e.preventDefault();
                e.stopPropagation();
                break;
            case LEFT:
                // When focus is on an open node, closes the node.
                if (this.hasChildren && this.expanded) {
                    this.expanded = false;
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                // When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
                const parentItem = this.el.parentElement.closest("calcite-tree-item");
                if (parentItem && (!this.hasChildren || this.expanded === false)) {
                    parentItem.focus();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                // When focus is on a root node that is also either an end node or a closed node, does nothing.
                break;
            case RIGHT:
                // When focus is on a closed node, opens the node; focus does not move.
                if (this.hasChildren && this.expanded === false) {
                    this.expanded = true;
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                // When focus is on a open node, moves focus to the first child node.
                if (this.hasChildren && this.expanded) {
                    this.el.querySelector("calcite-tree-item").focus();
                    break;
                }
                // When focus is on an end node, does nothing.
                break;
            case UP:
                const previous = this.el
                    .previousElementSibling;
                if (previous && previous.matches("calcite-tree-item")) {
                    previous.focus();
                }
                break;
            case DOWN:
                const next = this.el.nextElementSibling;
                if (next && next.matches("calcite-tree-item")) {
                    next.focus();
                }
                break;
            case HOME:
                root = this.el.closest("calcite-tree[root]");
                const firstNode = root.querySelector("calcite-tree-item");
                firstNode.focus();
                break;
            case END:
                root = this.el.closest("calcite-tree[root]");
                let currentNode = root.children[root.children.length - 1]; // last child
                let currentTree = nodeListToArray(currentNode.children).find(e => e.matches("calcite-tree"));
                while (currentTree) {
                    currentNode = currentTree.children[root.children.length - 1];
                    currentTree = nodeListToArray(currentNode.children).find(e => e.matches("calcite-tree"));
                }
                currentNode.focus();
                break;
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "expanded": ["expandedHandler"]
    }; }
    static get style() { return "\@charset \"UTF-8\";\n:root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  display: block;\n  color: var(--calcite-tree-text);\n  cursor: pointer;\n  outline: none;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  max-width: 100%;\n}\n\n::slotted(*) {\n  color: var(--calcite-tree-text) !important;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  text-decoration: none !important;\n  max-width: 100%;\n  word-wrap: break-word;\n}\n::slotted(*):hover {\n  text-decoration: none !important;\n}\n\n.calcite-tree-children {\n  z-index: 1;\n  margin-left: var(--calcite-tree-children-indent-start);\n  margin-right: var(--calcite-tree-children-indent-end);\n  padding-left: var(--calcite-tree-children-padding-start);\n  padding-right: var(--calcite-tree-children-padding-end);\n  position: relative;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  opacity: 0;\n  overflow: hidden;\n  -webkit-transition: 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;\n  transition: 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;\n  height: 0;\n  -webkit-transform-origin: top;\n  transform-origin: top;\n}\n.calcite-tree-children:after {\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n  content: \"\";\n  height: 100%;\n  width: var(--calcite-tree-line-width);\n  background: var(--calcite-tree-line);\n  left: var(--calcite-tree-line-position-start);\n  right: var(--calcite-tree-line-position-end);\n  top: 0;\n  position: absolute;\n}\n:host([expanded]) > .calcite-tree-children {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n  opacity: 1;\n  height: auto;\n}\n\n:host([has-children]) .calcite-tree-children:hover:after,\n:host([has-children]) .calcite-tree-children:focus:after {\n  background: var(--calcite-tree-line-hover);\n}\n\n.calcite-tree-node {\n  display: -ms-flexbox;\n  display: flex;\n  padding: var(--calcite-tree-vertical-padding) 0;\n  padding-left: var(--calcite-tree-indent-start);\n  padding-right: var(--calcite-tree-indent-end);\n  position: relative;\n}\n.calcite-tree-node:before {\n  content: \"•\";\n  position: absolute;\n  left: var(--calcite-tree-indicator-distance-start);\n  right: var(--calcite-tree-indicator-distance-end);\n  opacity: 0;\n  color: var(--calcite-tree-indicator);\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n}\n.calcite-tree-node:after {\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n  content: \"\";\n  height: 100%;\n  width: var(--calcite-tree-line-width);\n  background: var(--calcite-tree-line);\n  left: var(--calcite-tree-parent-line-position-start);\n  right: var(--calcite-tree-parent-line-position-end);\n  top: 0;\n  position: absolute;\n}\n:host([depth=\"1\"]) > .calcite-tree-node:after {\n  display: none;\n}\n\n:host([has-children]) > .calcite-tree-node {\n  padding-left: 0;\n  padding-right: 0;\n}\n:host([has-children]) > .calcite-tree-node:before {\n  display: none;\n}\n\n:host([depth=\"1\"]) > .calcite-tree-node:before,\n:host([depth=\"1\"]) > .calcite-tree-children:before {\n  left: var(--calcite-tree-indicator-first-start);\n  right: var(--calcite-tree-indicator-first-end);\n}\n\n.calcite-tree-node:hover:before,\n:host([selected]) .calcite-tree-node:hover:before,\n:host(:focus) .calcite-tree-node:before {\n  opacity: 1;\n}\n.calcite-tree-node:hover:after,\n:host([selected]) .calcite-tree-node:hover:after,\n:host(:focus) .calcite-tree-node:after {\n  width: var(--calcite-tree-hover-line-width);\n  background: var(--calcite-tree-line-hover);\n  z-index: 2;\n}\n.calcite-tree-node:hover ::slotted(*),\n:host([selected]) .calcite-tree-node:hover ::slotted(*),\n:host(:focus) .calcite-tree-node ::slotted(*) {\n  color: var(--calcite-tree-text-hover);\n}\n.calcite-tree-node:hover .calcite-tree-chevron,\n:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron,\n:host(:focus) .calcite-tree-node .calcite-tree-chevron {\n  fill: var(--calcite-tree-chevron-hover);\n}\n.calcite-tree-node:hover .calcite-tree-indicator,\n:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator,\n:host(:focus) .calcite-tree-node .calcite-tree-indicator {\n  fill: var(--calcite-tree-indicator-hover);\n}\n\n:host([selected]) > .calcite-tree-node,\n:host([selected]) > .calcite-tree-node:hover {\n  color: var(--calcite-tree-text-active);\n  font-weight: 500;\n}\n:host([selected]) > .calcite-tree-node:before,\n:host([selected]) > .calcite-tree-node:hover:before {\n  opacity: 1;\n  color: var(--calcite-tree-indicator-active);\n}\n:host([selected]) > .calcite-tree-node:after,\n:host([selected]) > .calcite-tree-node:hover:after {\n  background: var(--calcite-tree-line-active);\n  width: var(--calcite-tree-hover-line-width);\n  z-index: 2;\n}\n:host([selected]) > .calcite-tree-node ::slotted(*),\n:host([selected]) > .calcite-tree-node:hover ::slotted(*) {\n  color: var(--calcite-tree-text-active);\n}\n\n:host([has-children][expanded]) > .calcite-tree-node {\n  color: var(--calcite-tree-text-active);\n  font-weight: 500;\n}\n:host([has-children][expanded]) > .calcite-tree-node:after {\n  background: var(--calcite-tree-line-active);\n}\n:host([has-children][expanded]) > .calcite-tree-node:before {\n  opacity: 1;\n  color: var(--calcite-tree-indicator-active);\n}\n:host([has-children][expanded]) > .calcite-tree-node ::slotted(*) {\n  color: var(--calcite-tree-text-active);\n}\n\n:host([has-children][expanded][selected]) > .calcite-tree-node:after {\n  background: var(--calcite-tree-line-active);\n  width: var(--calcite-tree-hover-line-width);\n  z-index: 2;\n}\n\n.calcite-tree-chevron {\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  position: relative;\n  -ms-flex-item-align: center;\n  align-self: center;\n  left: var(--calcite-tree-icon-edge-distance-start);\n  right: var(--calcite-tree-icon-edge-distance-end);\n  margin-right: var(--calcite-tree-icon-content-distance-start);\n  margin-left: var(--calcite-tree-icon-content-distance-end);\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  fill: var(--calcite-tree-chevron);\n}\n:host([dir=rtl]) .calcite-tree-chevron {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n:host(:hover) .calcite-tree-chevron, :host(:focus) .calcite-tree-chevron {\n  fill: var(--calcite-tree-chevron-hover);\n  stroke: var(--calcite-tree-chevron-hover);\n  stroke-width: 0.75;\n}\n:host([expanded]) > .calcite-tree-node > .calcite-tree-chevron {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  fill: var(--calcite-ui-blue);\n  stroke-width: 0.75;\n  stroke: var(--calcite-ui-blue);\n}"; }
};

export { CalciteTreeItem as calcite_tree_item };
