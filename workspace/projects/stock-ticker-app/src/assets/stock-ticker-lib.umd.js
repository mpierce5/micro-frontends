(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser-dynamic'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/elements')) :
    typeof define === 'function' && define.amd ? define('stock-ticker-lib', ['exports', '@angular/platform-browser-dynamic', '@angular/core', '@angular/platform-browser', '@angular/elements'], factory) :
    (global = global || self, factory(global['stock-ticker-lib'] = {}, global.ng.platformBrowserDynamic, global.ng.core, global.ng.platformBrowser, global.ng.elements));
}(this, (function (exports, platformBrowserDynamic, core, platformBrowser, elements) { 'use strict';

    var StockTickerLibComponent = /** @class */ (function () {
        function StockTickerLibComponent() {
        }
        StockTickerLibComponent.prototype.ngOnInit = function () {
        };
        StockTickerLibComponent.ɵfac = function StockTickerLibComponent_Factory(t) { return new (t || StockTickerLibComponent)(); };
        StockTickerLibComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: StockTickerLibComponent, selectors: [["lib-stock-ticker-lib"]], decls: 2, vars: 0, template: function StockTickerLibComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, "stock-ticker-lib works!");
                core["ɵɵelementEnd"]();
            } }, styles: [""] });
        return StockTickerLibComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](StockTickerLibComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-stock-ticker-lib',
                    templateUrl: './stock-ticker-lib.component.html',
                    styleUrls: ['./stock-ticker-lib.component.css']
                }]
        }], function () { return []; }, null); })();

    var StockTickerLibModule = /** @class */ (function () {
        function StockTickerLibModule(injector) {
            this.injector = injector;
        }
        StockTickerLibModule.prototype.ngDoBootstrap = function (appRef) {
            // Turn our component into an Angular Element (Web Component)
            var stockTickerLibElement = elements.createCustomElement(StockTickerLibComponent, {
                injector: this.injector,
            });
            customElements.define('stock-ticker', stockTickerLibElement);
        };
        StockTickerLibModule.ɵmod = core["ɵɵdefineNgModule"]({ type: StockTickerLibModule });
        StockTickerLibModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function StockTickerLibModule_Factory(t) { return new (t || StockTickerLibModule)(core["ɵɵinject"](core.Injector)); }, imports: [[platformBrowser.BrowserModule]] });
        return StockTickerLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](StockTickerLibModule, { declarations: [StockTickerLibComponent], imports: [platformBrowser.BrowserModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](StockTickerLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [StockTickerLibComponent],
                    imports: [platformBrowser.BrowserModule],
                    exports: []
                }]
        }], function () { return [{ type: core.Injector }]; }, null); })();

    /*
     * Public API Surface of stock-ticker-lib
     */
    // Bootstrap the primary module
    platformBrowserDynamic.platformBrowserDynamic()
        .bootstrapModule(StockTickerLibModule)
        .catch(function (err) { return console.error(err); });

    exports.StockTickerLibComponent = StockTickerLibComponent;
    exports.StockTickerLibModule = StockTickerLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=stock-ticker-lib.umd.js.map
