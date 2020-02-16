import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-fb92fa04.js';
import { g as getElementDir } from './dom-8fd67d72.js';

const CSS = {
    page: "page",
    selected: "is-selected",
    previous: "previous",
    next: "next",
    disabled: "is-disabled",
    ellipsis: "ellipsis",
    ellipsisStart: "ellipsis--start",
    ellipsisEnd: "ellipsis--end"
};
const TEXT = {
    nextLabel: "next",
    previousLabel: "previous"
};

const maxPagesDisplayed = 5;
const CalcitePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** Change between foreground colors or background colors for container background */
        this.backgroundStyle = "foregroundColor";
        /** starting selected index */
        this.num = 1;
        /** starting number of the pagination */
        this.start = 1;
        /** title of the next button */
        this.textLabelNext = TEXT.nextLabel;
        /** title of the previous button */
        this.textLabelPrevious = TEXT.previousLabel;
        /** specify the theme of accordion, defaults to light */
        this.theme = "light";
        /** ending number of the pagination */
        this.total = 2;
        this.selectedIndex = this.num;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.previousClicked = () => {
            this.previousPage();
        };
        this.nextClicked = () => {
            this.nextPage();
        };
        this.calcitePaginationUpdate = createEvent(this, "calcitePaginationUpdate", 7);
    }
    numWatchHandler(newValue) {
        this.selectedIndex = newValue;
    }
    selectedIndexWatchHandler() {
        this.calcitePaginationUpdate.emit({
            start: this.start,
            total: this.total,
            num: this.selectedIndex
        });
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /** When called, selected page will increment by 1.
     */
    async nextPage() {
        this.selectedIndex = Math.min(this.total, this.selectedIndex + 1);
    }
    /** When called, selected page will decrement by 1.
     */
    async previousPage() {
        this.selectedIndex = Math.max(this.start, this.selectedIndex - 1);
    }
    /** Set selected page to a specific page number. Will not go below start or above total.
     */
    async setPage(num) {
        this.selectedIndex = Math.max(this.start, Math.min(this.total, num));
    }
    showLeftEllipsis() {
        return (this.selectedIndex - this.start) > 3;
    }
    showRightEllipsis() {
        return (this.total - this.selectedIndex) > 3;
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    renderPages() {
        let pages = [];
        let currentNum;
        let end;
        if (this.total <= maxPagesDisplayed) {
            currentNum = this.start + 1;
            end = this.total - 1;
        }
        else {
            if (this.selectedIndex < maxPagesDisplayed) {
                currentNum = this.start + 1;
                end = this.start + 4;
            }
            else {
                if (this.selectedIndex + 3 >= this.total) {
                    currentNum = this.total - 4;
                    end = this.total - 1;
                }
                else {
                    currentNum = this.selectedIndex - 1;
                    end = this.selectedIndex + 1;
                }
            }
        }
        while (currentNum <= end) {
            pages.push(currentNum);
            currentNum++;
        }
        return pages.map(page => this.renderPage(page));
    }
    renderPage(num) {
        return (h("a", { class: { [CSS.page]: true, [CSS.selected]: (num === this.selectedIndex) }, onClick: () => {
                this.selectedIndex = num;
            } }, num));
    }
    renderLeftEllipsis() {
        if (this.total > maxPagesDisplayed && this.showLeftEllipsis()) {
            return (h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisStart}` }, h("calcite-icon", { scale: "s", icon: "ellipsis" })));
        }
    }
    renderRightEllipsis() {
        if (this.total > maxPagesDisplayed && this.showRightEllipsis()) {
            return (h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisEnd}` }, h("calcite-icon", { scale: "s", icon: "ellipsis" })));
        }
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, class: this.backgroundStyle }, h("a", { class: { [CSS.previous]: true, [CSS.disabled]: this.selectedIndex <= 1 }, title: this.textLabelPrevious, onClick: this.previousClicked }, h("calcite-icon", { scale: "s", icon: "chevronLeft" })), this.renderPage(this.start), this.renderLeftEllipsis(), this.renderPages(), this.renderRightEllipsis(), this.renderPage(this.total), h("a", { class: { [CSS.next]: true, [CSS.disabled]: this.selectedIndex >= this.total }, title: this.textLabelNext, onClick: this.nextClicked }, h("calcite-icon", { scale: "s", icon: "chevronRight" }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "num": ["numWatchHandler"],
        "selectedIndex": ["selectedIndexWatchHandler"]
    }; }
    static get style() { return ":root {\n  --calcite-ui-blue: #007ac2;\n  --calcite-ui-blue-hover: #2890ce;\n  --calcite-ui-blue-press: #00619b;\n  --calcite-ui-green: #35ac46;\n  --calcite-ui-green-hover: #50ba5f;\n  --calcite-ui-green-press: #288835;\n  --calcite-ui-yellow: #edd317;\n  --calcite-ui-yellow-hover: #f9e54e;\n  --calcite-ui-yellow-press: #d9bc00;\n  --calcite-ui-red: #d83020;\n  --calcite-ui-red-hover: #e65240;\n  --calcite-ui-red-press: #a82b1e;\n  --calcite-ui-background: #f8f8f8;\n  --calcite-ui-foreground: #ffffff;\n  --calcite-ui-foreground-hover: #f3f3f3;\n  --calcite-ui-foreground-press: #eaeaea;\n  --calcite-ui-text-1: #151515;\n  --calcite-ui-text-2: #4a4a4a;\n  --calcite-ui-text-3: #6a6a6a;\n  --calcite-ui-border-1: #cacaca;\n  --calcite-ui-border-2: #dfdfdf;\n  --calcite-ui-border-3: #eaeaea;\n  --calcite-ui-border-hover: #9f9f9f;\n  --calcite-ui-border-press: #757575;\n}\n\n:host([theme=dark]) {\n  --calcite-ui-blue: #00A0FF;\n  --calcite-ui-blue-hover: #0087D7;\n  --calcite-ui-blue-press: #47BBFF;\n  --calcite-ui-green: #36DA43;\n  --calcite-ui-green-hover: #11AD1D;\n  --calcite-ui-green-press: #44ED51;\n  --calcite-ui-yellow: #FFC900;\n  --calcite-ui-yellow-hover: #F4B000;\n  --calcite-ui-yellow-press: #FFE24D;\n  --calcite-ui-red: #FE583E;\n  --calcite-ui-red-hover: #F3381B;\n  --calcite-ui-red-press: #FF7465;\n  --calcite-ui-background: #202020;\n  --calcite-ui-foreground: #2b2b2b;\n  --calcite-ui-foreground-hover: #353535;\n  --calcite-ui-foreground-press: #404040;\n  --calcite-ui-text-1: #ffffff;\n  --calcite-ui-text-2: #bfbfbf;\n  --calcite-ui-text-3: #9f9f9f;\n  --calcite-ui-border-1: #4a4a4a;\n  --calcite-ui-border-2: #404040;\n  --calcite-ui-border-3: #353535;\n  --calcite-ui-border-hover: #757575;\n  --calcite-ui-border-press: #9f9f9f;\n}\n\n:root {\n  --calcite-border-radius: 3px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbody {\n  font-family: \"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\ncalcite-tab {\n  display: none;\n}\n\ncalcite-tab[is-active] {\n  display: block;\n}\n\na {\n  color: #007ac2;\n}\n\n:host {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background-color: var(--calcite-ui-foreground);\n  -webkit-writing-mode: horizontal-tb;\n  -ms-writing-mode: lr-tb;\n  writing-mode: horizontal-tb;\n}\n\n:host(.backgroundColor) {\n  background-color: var(--calcite-ui-background);\n}\n\n.previous, .next, .page {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  border-top: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  color: var(--calcite-ui-text-3);\n  cursor: pointer;\n}\n.previous:hover, .next:hover, .page:hover {\n  color: var(--calcite-ui-text-1);\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n}\n\n.page:hover {\n  border-bottom-color: var(--calcite-ui-border-2);\n}\n.page.is-selected {\n  font-weight: 500;\n  color: var(--calcite-ui-text-1);\n  border-bottom-color: var(--calcite-ui-blue);\n}\n\n.previous, .next {\n  padding: 0.75em 1em;\n}\n.previous:hover, .next:hover {\n  color: var(--calcite-ui-blue);\n  background-color: var(--calcite-ui-foreground-hover);\n}\n.previous:active, .next:active {\n  background-color: var(--calcite-ui-foreground-press);\n}\n.previous.is-disabled, .next.is-disabled {\n  background-color: transparent;\n}\n.previous.is-disabled > svg, .next.is-disabled > svg {\n  opacity: 0.3;\n}\n\n.next {\n  margin-right: 0;\n}\n\n.page, .ellipsis {\n  padding: 0.75em 1em;\n}\n\n.ellipsis {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  color: var(--calcite-ui-text-3);\n}"; }
};

export { CalcitePagination as calcite_pagination };
