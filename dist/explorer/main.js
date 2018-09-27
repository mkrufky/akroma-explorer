(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/bundles/ngx-bootstrap.es2015.js");
const ngx_qrcode2_1 = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const address_qrcode_component_1 = __webpack_require__(/*! ./components/address-qrcode/address-qrcode.component */ "./src/app/components/address-qrcode/address-qrcode.component.ts");
const blocks_panel_component_1 = __webpack_require__(/*! ./components/blocks-panel/blocks-panel.component */ "./src/app/components/blocks-panel/blocks-panel.component.ts");
const header_component_1 = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
const transactions_panel_component_1 = __webpack_require__(/*! ./components/transactions-panel/transactions-panel.component */ "./src/app/components/transactions-panel/transactions-panel.component.ts");
const address_details_component_1 = __webpack_require__(/*! ./pages/address-details/address-details.component */ "./src/app/pages/address-details/address-details.component.ts");
const block_details_component_1 = __webpack_require__(/*! ./pages/block-details/block-details.component */ "./src/app/pages/block-details/block-details.component.ts");
const explorer_home_component_1 = __webpack_require__(/*! ./pages/explorer-home/explorer-home.component */ "./src/app/pages/explorer-home/explorer-home.component.ts");
const transaction_details_component_1 = __webpack_require__(/*! ./pages/transaction-details/transaction-details.component */ "./src/app/pages/transaction-details/transaction-details.component.ts");
const hex_to_ascii_pipe_1 = __webpack_require__(/*! ./pipes/hex-to-ascii.pipe */ "./src/app/pipes/hex-to-ascii.pipe.ts");
const unix_timestamp_to_date_pipe_1 = __webpack_require__(/*! ./pipes/unix-timestamp-to-date.pipe */ "./src/app/pipes/unix-timestamp-to-date.pipe.ts");
const routing_module_1 = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
const address_service_1 = __webpack_require__(/*! ./services/address.service */ "./src/app/services/address.service.ts");
const akroma_service_1 = __webpack_require__(/*! ./services/akroma.service */ "./src/app/services/akroma.service.ts");
const block_service_1 = __webpack_require__(/*! ./services/block.service */ "./src/app/services/block.service.ts");
const settings_service_1 = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
const transaction_service_1 = __webpack_require__(/*! ./services/transaction.service */ "./src/app/services/transaction.service.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            // pages
            explorer_home_component_1.ExplorerHomeComponent,
            address_details_component_1.AddressDetailsComponent,
            block_details_component_1.BlockDetailsComponent,
            transaction_details_component_1.TransactionDetailsComponent,
            // components
            blocks_panel_component_1.BlocksPanelComponent,
            address_qrcode_component_1.AddressQrcodeComponent,
            transactions_panel_component_1.TransactionsPanelComponent,
            header_component_1.HeaderComponent,
            address_qrcode_component_1.AddressQrcodeComponent,
            // pipes
            unix_timestamp_to_date_pipe_1.UnixTimestampToDatePipe,
            hex_to_ascii_pipe_1.HexToAsciiPipe,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            routing_module_1.RoutingModule,
            router_1.RouterModule,
            ngx_bootstrap_1.PaginationModule.forRoot(),
            ngx_bootstrap_1.ModalModule.forRoot(),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ngx_bootstrap_1.BsDropdownModule.forRoot(),
            ngx_qrcode2_1.NgxQRCodeModule,
            http_1.HttpClientModule,
        ],
        providers: [
            block_service_1.BlockService,
            transaction_service_1.TransactionService,
            address_service_1.AddressService,
            settings_service_1.SettingsService,
            akroma_service_1.AkromaService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/address-qrcode/address-qrcode.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/address-qrcode/address-qrcode.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-akroma qr-link\" (click)=\"openModal(template)\">QR</button>\r\n \r\n<ng-template #template>\r\n  <div class=\"modal-body text-center\">\r\n    <ngx-qrcode [qrc-element-type]=\"elementType\" [qrc-value]=\"hash\"></ngx-qrcode>\r\n    <code>{{ hash }}</code>\r\n  </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/address-qrcode/address-qrcode.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/address-qrcode/address-qrcode.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-akroma {\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 0 !important; }\n  .card-akroma a {\n    color: #FFFFFF;\n    text-decoration: underline; }\n  .dropdown-akroma {\n  border-radius: 0;\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma {\n  border-radius: 0;\n  background-color: #343a40 !important;\n  color: white;\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma.on-form {\n    background-color: #1A1A1A !important; }\n  .table-akroma {\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .table-akroma.table-dark tr td:first-child {\n    text-transform: uppercase; }\n  .table-akroma.table-dark a,\n  .table-akroma.table-dark a:visited {\n    color: #fff;\n    text-decoration: none; }\n  .table-akroma.table-dark a:hover,\n  .table-akroma.table-dark a.active {\n    text-decoration: underline;\n    opacity: 0.60; }\n  .form-control-akroma {\n  border: 1px solid #fbfbfb;\n  border-radius: 0; }\n  .akromaModal > div.modal-content {\n  border-radius: 0 !important;\n  background-color: rgba(255, 255, 255, 0.9); }\n  .qr-link {\n  font-weight: 700;\n  color: #fff;\n  background-color: transparent;\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/components/address-qrcode/address-qrcode.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/address-qrcode/address-qrcode.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/bundles/ngx-bootstrap.es2015.js");
let AddressQrcodeComponent = class AddressQrcodeComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.elementType = 'url';
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'akromaModal' });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AddressQrcodeComponent.prototype, "hash", void 0);
AddressQrcodeComponent = __decorate([
    core_1.Component({
        selector: 'app-address-qrcode',
        template: __webpack_require__(/*! ./address-qrcode.component.html */ "./src/app/components/address-qrcode/address-qrcode.component.html"),
        styles: [__webpack_require__(/*! ./address-qrcode.component.scss */ "./src/app/components/address-qrcode/address-qrcode.component.scss")],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [ngx_bootstrap_1.BsModalService])
], AddressQrcodeComponent);
exports.AddressQrcodeComponent = AddressQrcodeComponent;


/***/ }),

/***/ "./src/app/components/blocks-panel/blocks-panel.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/blocks-panel/blocks-panel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Blocks</h1>\r\n<div class=\"pt-3\" *ngFor=\"let block of blocks$ | async; trackBy: trackTransaction\">\r\n  <div class=\"card card-akroma text-white bg-dark\">\r\n    <div class=\"card-header\">\r\n      <span>\r\n        <a [routerLink]=\"['/', 'block', block.number]\">\r\n          {{ block.number }}\r\n        </a>\r\n      </span>\r\n      <span class=\"float-right\">{{ block.timestamp | unixTimestampToDate | date:'yyyy-MM-dd HH:mm:ss' }}</span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <span>{{ block.extraData | hexToAscii }}</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/blocks-panel/blocks-panel.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/blocks-panel/blocks-panel.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-akroma {\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 0 !important; }\n  .card-akroma a {\n    color: #FFFFFF;\n    text-decoration: underline; }\n  .dropdown-akroma {\n  border-radius: 0;\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma {\n  border-radius: 0;\n  background-color: #343a40 !important;\n  color: white;\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma.on-form {\n    background-color: #1A1A1A !important; }\n  .table-akroma {\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .table-akroma.table-dark tr td:first-child {\n    text-transform: uppercase; }\n  .table-akroma.table-dark a,\n  .table-akroma.table-dark a:visited {\n    color: #fff;\n    text-decoration: none; }\n  .table-akroma.table-dark a:hover,\n  .table-akroma.table-dark a.active {\n    text-decoration: underline;\n    opacity: 0.60; }\n  .form-control-akroma {\n  border: 1px solid #fbfbfb;\n  border-radius: 0; }\n"

/***/ }),

/***/ "./src/app/components/blocks-panel/blocks-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/blocks-panel/blocks-panel.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const block_service_1 = __webpack_require__(/*! ../../services/block.service */ "./src/app/services/block.service.ts");
let BlocksPanelComponent = class BlocksPanelComponent {
    constructor(blockService) {
        this.blockService = blockService;
    }
    ngOnInit() {
        this.blocks$ = rxjs_1.from(this.blockService.getBlocks());
    }
    trackBlock(index, block) {
        return block ? block.number : undefined;
    }
};
BlocksPanelComponent = __decorate([
    core_1.Component({
        selector: 'app-blocks-panel',
        template: __webpack_require__(/*! ./blocks-panel.component.html */ "./src/app/components/blocks-panel/blocks-panel.component.html"),
        styles: [__webpack_require__(/*! ./blocks-panel.component.scss */ "./src/app/components/blocks-panel/blocks-panel.component.scss")],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [block_service_1.BlockService])
], BlocksPanelComponent);
exports.BlocksPanelComponent = BlocksPanelComponent;


/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n    <div class=\"container h-100\">\n        <div class=\"row pt-4\">\n            <div class=\"col\">\n                <a href=\"/\">\n                    <img src=\"../../assets/images/akroma-logo-on-black.svg\" alt=\"Akroma\">\n                </a>\n            </div>\n            <div class=\"col text-right\">\n                <form class=\"form-inline my-2 my-lg-0 float-right\" [formGroup]=\"lookupForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n                    <div class=\"input-group\">\n                        <input formControlName=\"lookup\" type=\"text\" class=\"form-control form-control-akroma\" placeholder=\"Address | Transaction | Block\" aria-label=\"\" aria-describedby=\"\">\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-akroma\" type=\"submit\">search</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col text-right\">\n                <button id=\"button-basic\" type=\"button\" class=\"btn btn-akroma\" (click)=\"openModal(connection)\">\n                    <span>{{ connectedTo }}</span>\n                    <span> &equiv;</span>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #connection>\n    <div class=\"modal-body text-center\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h4>Current Connection: {{ connectedTo }}</h4>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <table class=\"table table-striped table-dark table-responsive-sm\">\n                    <thead>\n                        <tr>\n                            <th class=\"w-25\" i18n>Option</th>\n                            <th i18n>Connect</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>https://remote.akroma.io</td>\n                            <td><input type=\"button\" value=\"Connect\" (click)=\"setConnection('https://remote.akroma.io')\" class=\"btn btn-akroma text-white\" /></td>\n                        </tr>\n                        <tr>\n                            <td>http://localhost:8545</td>\n                            <td><input type=\"button\" value=\"Connect\" (click)=\"setConnection('http://localhost:8545')\" class=\"btn btn-akroma text-white\" /></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"alert alert-danger\" role=\"alert\">\n                  <p class=\"mb-0\">Please use a local node (localhost connection) during testing period. remote.akroma.io is under development and is not reliable</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-akroma {\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 0 !important; }\n  .card-akroma a {\n    color: #FFFFFF;\n    text-decoration: underline; }\n  .dropdown-akroma {\n  border-radius: 0;\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma {\n  border-radius: 0;\n  background-color: #343a40 !important;\n  color: white;\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma.on-form {\n    background-color: #1A1A1A !important; }\n  .table-akroma {\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .table-akroma.table-dark tr td:first-child {\n    text-transform: uppercase; }\n  .table-akroma.table-dark a,\n  .table-akroma.table-dark a:visited {\n    color: #fff;\n    text-decoration: none; }\n  .table-akroma.table-dark a:hover,\n  .table-akroma.table-dark a.active {\n    text-decoration: underline;\n    opacity: 0.60; }\n  .form-control-akroma {\n  border: 1px solid #fbfbfb;\n  border-radius: 0; }\n  .background {\n  background-image: url('akroma-bg4.png');\n  color: #fff;\n  background-size: cover;\n  min-height: 150px; }\n  .input-group {\n  width: 450px; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const ngx_bootstrap_1 = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/bundles/ngx-bootstrap.es2015.js");
const utils_1 = __webpack_require__(/*! typesafe-web3/dist/lib/utils */ "./node_modules/typesafe-web3/dist/lib/utils.js");
const settings_service_1 = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
let HeaderComponent = class HeaderComponent {
    constructor(formBuilder, router, settings, modalService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.settings = settings;
        this.modalService = modalService;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'akromaModal' });
    }
    ngOnInit() {
        this.lookupForm = this.formBuilder.group({
            lookup: this.formBuilder.control(''),
        });
    }
    get connectedTo() {
        return this.settings.getConnectionUrl();
    }
    setConnection(url) {
        this.settings.setConnectionUrl(url);
        this.modalRef.hide();
    }
    onSubmit() {
        const lookupValue = this.lookupForm.value.lookup;
        const lookupType = this.getLookupType(this.lookupForm.value.lookup);
        if (!lookupType) {
            return;
        }
        this.router.navigate(['/', lookupType, lookupValue]);
    }
    getLookupType(lookupValue) {
        if (this.isAddress(lookupValue)) {
            return 'address';
        }
        if (this.isTransaction(lookupValue)) {
            return 'transaction';
        }
        if (this.isBlock(lookupValue)) {
            return 'block';
        }
        return null;
    }
    isAddress(lookupValue) {
        return utils_1.default.isAddress(lookupValue);
    }
    isTransaction(lookupValue) {
        return /^0x?([A-Fa-f0-9]{64})$/.test(lookupValue);
    }
    isBlock(lookupValue) {
        return Number.parseInt(lookupValue, 10).toString(10) === lookupValue;
    }
};
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        settings_service_1.SettingsService,
        ngx_bootstrap_1.BsModalService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/components/transactions-panel/transactions-panel.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/transactions-panel/transactions-panel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Transactions</h1>\r\n<div *ngFor=\"let block of blocks$ | async\">\r\n  <div class=\"pt-3\" *ngFor=\"let transaction of block.transactions\">\r\n    <div class=\"card card-akroma text-white bg-dark\">\r\n      <div class=\"card-header\">\r\n        <span>\r\n          <a [routerLink]=\"['/', 'transaction', transaction.hash]\" class=\"transaction-hash-link\">\r\n            {{ transaction.hash | slice:0:25 }}\r\n          </a>\r\n\r\n        </span>\r\n        <span class=\"float-right\">{{ block.timestamp | unixTimestampToDate | date:'yyyy-MM-dd HH:mm:ss' }}</span>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-2\">amount</div>\r\n          <div class=\"col\">\r\n            <span class=\"float-right\">{{ transaction.value }}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-2\">from</div>\r\n          <div class=\"col\">\r\n            <span class=\"float-right\">\r\n              <a [routerLink]=\"['/', 'address', transaction.from]\" class=\"transaction-to-from-link\">\r\n                {{ transaction.from }}\r\n              </a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-2\">to</div>\r\n          <div class=\"col\">\r\n            <span class=\"float-right\">\r\n              <a [routerLink]=\"['/', 'address', transaction.to]\" class=\"transaction-to-from-link\">\r\n                {{ transaction.to }}\r\n              </a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/transactions-panel/transactions-panel.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/transactions-panel/transactions-panel.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-akroma {\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 0 !important; }\n  .card-akroma a {\n    color: #FFFFFF;\n    text-decoration: underline; }\n  .dropdown-akroma {\n  border-radius: 0;\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma {\n  border-radius: 0;\n  background-color: #343a40 !important;\n  color: white;\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma.on-form {\n    background-color: #1A1A1A !important; }\n  .table-akroma {\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .table-akroma.table-dark tr td:first-child {\n    text-transform: uppercase; }\n  .table-akroma.table-dark a,\n  .table-akroma.table-dark a:visited {\n    color: #fff;\n    text-decoration: none; }\n  .table-akroma.table-dark a:hover,\n  .table-akroma.table-dark a.active {\n    text-decoration: underline;\n    opacity: 0.60; }\n  .form-control-akroma {\n  border: 1px solid #fbfbfb;\n  border-radius: 0; }\n"

/***/ }),

/***/ "./src/app/components/transactions-panel/transactions-panel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/transactions-panel/transactions-panel.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const block_service_1 = __webpack_require__(/*! ../../services/block.service */ "./src/app/services/block.service.ts");
let TransactionsPanelComponent = class TransactionsPanelComponent {
    constructor(blockService) {
        this.blockService = blockService;
    }
    ngOnInit() {
        this.blocks$ = rxjs_1.from(this.blockService.getBlocks());
    }
    trackTransaction(index, transaction) {
        return transaction ? transaction.hash : undefined;
    }
};
TransactionsPanelComponent = __decorate([
    core_1.Component({
        selector: 'app-transactions-panel',
        template: __webpack_require__(/*! ./transactions-panel.component.html */ "./src/app/components/transactions-panel/transactions-panel.component.html"),
        styles: [__webpack_require__(/*! ./transactions-panel.component.scss */ "./src/app/components/transactions-panel/transactions-panel.component.scss")],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [block_service_1.BlockService])
], TransactionsPanelComponent);
exports.TransactionsPanelComponent = TransactionsPanelComponent;


/***/ }),

/***/ "./src/app/pages/address-details/address-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/address-details/address-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"page-body\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h1>Address</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <table class=\"table table-striped table-dark table-akroma table-responsive-sm\">\r\n\r\n          <tbody>\r\n            <tr>\r\n              <td>Address</td>\r\n              <td>\r\n                {{ address }}\r\n                <span class=\"float-right\">\r\n                    <app-address-qrcode [hash]=\"address\"></app-address-qrcode>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Transactions</td>\r\n              <td>{{ total }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Balance</td>\r\n              <td>{{ (balance$ | async) }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h1>Transactions</h1>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"(addressTransactions$ | async)?.length > 0\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <pagination class=\"pagination-sm\" [totalItems]=\"total\" [maxSize]=\"10\" [(ngModel)]=\"currentPage\" previousText=\"&nbsp;\" nextText=\"&nbsp;\" [itemsPerPage]=\"10\" [rotate]=\"false\" (pageChanged)=\"pageAddressTransactions($event)\" (numPages)=\"numPages = 10\"></pagination>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <ng-container *ngIf=\"addressTransactions$ | async as trans\">\r\n          <table class=\"table table-striped table-dark table-akroma table-responsive-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"w-25\" i18n>Hash</th>\r\n                <th i18n>Date</th>\r\n                <th i18n>Direction</th>\r\n                <th i18n>Address</th>\r\n                <th i18n>Amount</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let transaction of trans\">\r\n                <td>\r\n                    <a [routerLink]=\"['/', 'transaction', transaction.hash]\" class=\"transaction-hash-link\">\r\n                      {{ transaction.hash | slice:0:20 }}...\r\n                    </a>\r\n                </td>\r\n                <td>{{ transaction.ts | unixTimestampToDate | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n                <td>\r\n                  <span *ngIf=\"isFrom(transaction.from); else fromDirection\">\r\n                    <span>Sent</span>\r\n                  </span>\r\n                  <ng-template #fromDirection>\r\n                    <span>Received</span>\r\n                  </ng-template>\r\n                </td>\r\n                <td>\r\n                  <span *ngIf=\"isFrom(transaction.from); else fromAddress\">\r\n                    <a [routerLink]=\"['/', 'address', transaction.to]\" class=\"transaction-to-from-link\">\r\n                      {{ transaction.to }}\r\n                    </a>\r\n                  </span>\r\n                  <ng-template #fromAddress>\r\n                    <a [routerLink]=\"['/', 'address', transaction.from]\" class=\"transaction-to-from-link\">\r\n                      {{ transaction.from }}\r\n                    </a>\r\n                  </ng-template>\r\n                </td>\r\n                <td>\r\n                  <span *ngIf=\"isFrom(transaction.from); else toValue\">\r\n                    <span class=\"sent\">-{{ transaction.value }} AKA</span>\r\n                  </span>\r\n                  <ng-template #toValue>\r\n                    <span class=\"received\">+{{ transaction.value }} AKA</span>\r\n                  </ng-template>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <ng-container *ngIf=\"address$ | async as address\">\r\n  <div class=\"background\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-8\">\r\n          <div class=\"address\">\r\n            {{ address.hash }}\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-4\">\r\n          <div class=\"qrcode\">\r\n            <app-address-qrcode [hash]=\"address.hash\"></app-address-qrcode>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-12 col-md-6\">\r\n          <div class=\"info d-flex align-items-baseline px-2\">\r\n            {{ address.balance }}\r\n          </div>\r\n          <div class=\"py-1 px-2 text-uppercase type\" i18n>\r\n            Akroma Balance\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-3\">\r\n          <div class=\"info d-flex align-items-baseline px-2\">\r\n            {{ address.mined }}\r\n          </div>\r\n          <div class=\"py-1 px-2 text-uppercase type\" i18n>\r\n            Blocks Mined\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-3\">\r\n          <div class=\"info d-flex align-items-baseline px-2\">\r\n            {{ address.transactionsInitiatedCount }}\r\n          </div>\r\n          <div class=\"py-1 px-2 text-uppercase type\" i18n>\r\n            Transactions\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container transactions\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div class=\"transaction-header\" i18n>\r\n          Transactions\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"addressTransactions$ | async as addressTransactions\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div *ngFor=\"let transaction of addressTransactions.transactions\">\r\n            <div class=\"transaction-grid\">\r\n              <div class=\"transaction-icon\">\r\n                <img *ngIf=\"transaction.from.toLowerCase() === address.hash.toLowerCase(); else receivedIcon\" src=\"assets/images/icon-sent.svg\" alt=\"Sent\">\r\n                <ng-template #receivedIcon>\r\n                  <img src=\"assets/images/icon-received.svg\" alt=\"Received\">\r\n                </ng-template>\r\n              </div>\r\n              <a [routerLink]=\"['/explorer', 'transaction', transaction.hash]\" class=\"transaction-hash-link\">\r\n                <div class=\"transaction-hash\">\r\n                  <span class=\"text-truncate\">\r\n                    {{ transaction.hash }}\r\n                  </span>\r\n                </div>\r\n              </a>\r\n              <ng-template *ngIf=\"transaction.from.toLowerCase() === address.hash.toLowerCase(); then sentAction; else receivedAction\"></ng-template>\r\n              <ng-template #sentAction>\r\n                <a [routerLink]=\"['/explorer', 'address', transaction.to]\" class=\"transaction-action-link\">\r\n                  <div class=\"transaction-action\">\r\n                    <span class=\"text-truncate\">\r\n                      <span class=\"bold text-uppercase\" i18n>TO</span> {{ transaction.to }}</span>\r\n                  </div>\r\n                </a>\r\n              </ng-template>\r\n              <ng-template #receivedAction>\r\n                <a [routerLink]=\"['/explorer', 'address', transaction.from]\" class=\"transaction-action-link\">\r\n                  <div class=\"transaction-action\">\r\n                    <span class=\"text-truncate\">\r\n                      <span class=\"bold text-uppercase\" i18n>FROM</span> {{ transaction.from }}</span>\r\n                  </div>\r\n                </a>\r\n              </ng-template>\r\n              <div class=\"transaction-value\">\r\n                {{ transaction.value | number:'1.0-5' }} AKA\r\n              </div>\r\n              <div class=\"transaction-timestamp\">\r\n                {{ transaction.timestamp | unixTimestampToDate | date:'yyyy-MM-dd HH:mm:ss' }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <ng-container *ngIf=\"addressTransactions.totalPages > 1\">\r\n            <pagination class=\"pagination-sm\" [totalItems]=\"addressTransactions.totalTransactions\" [maxSize]=\"6\" [(ngModel)]=\"currentPage\"\r\n              previousText=\"&nbsp;\" nextText=\"&nbsp;\" [itemsPerPage]=\"20\" [rotate]=\"false\" (pageChanged)=\"pageAddressTransactions($event)\" (numPages)=\"numPages = addressTransactions.totalPages\"></pagination>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ng-container> -->"

/***/ }),

/***/ "./src/app/pages/address-details/address-details.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/address-details/address-details.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-akroma {\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 0 !important; }\n  .card-akroma a {\n    color: #FFFFFF;\n    text-decoration: underline; }\n  .dropdown-akroma {\n  border-radius: 0;\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma {\n  border-radius: 0;\n  background-color: #343a40 !important;\n  color: white;\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma.on-form {\n    background-color: #1A1A1A !important; }\n  .table-akroma {\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .table-akroma.table-dark tr td:first-child {\n    text-transform: uppercase; }\n  .table-akroma.table-dark a,\n  .table-akroma.table-dark a:visited {\n    color: #fff;\n    text-decoration: none; }\n  .table-akroma.table-dark a:hover,\n  .table-akroma.table-dark a.active {\n    text-decoration: underline;\n    opacity: 0.60; }\n  .form-control-akroma {\n  border: 1px solid #fbfbfb;\n  border-radius: 0; }\n  :host, .page-body {\n  display: block;\n  min-height: 70vh; }\n  .sent {\n  color: #CF0000; }\n  .received {\n  color: green; }\n"

/***/ }),

/***/ "./src/app/pages/address-details/address-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/address-details/address-details.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const address_service_1 = __webpack_require__(/*! ../../services/address.service */ "./src/app/services/address.service.ts");
const transaction_service_1 = __webpack_require__(/*! ../../services/transaction.service */ "./src/app/services/transaction.service.ts");
let AddressDetailsComponent = class AddressDetailsComponent {
    constructor(route, transactionService, addressService) {
        this.route = route;
        this.transactionService = transactionService;
        this.addressService = addressService;
        this.currentPage = 1;
        this.total = 0;
        this.pages = 1;
        this.address = '';
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.address = params.addressHash;
            this.transactionService.getTransactionCountByAddress(params.addressHash)
                .then(result => {
                this.total = result;
                this.pages = result / 10;
            });
            this.balance$ = rxjs_1.from(this.addressService.getBalance(this.address));
            this.pageAddressTransactions({ init: true, page: 1 });
        });
    }
    pageAddressTransactions(event) {
        // guard to prevent excess firing
        if (this.currentPage === event.page && !event.init) {
            return;
        }
        this.addressTransactions$ = rxjs_1.from(this.transactionService.getTransactionsAndBlockByAddress(this.address, event.page - 1));
        this.currentPage = event.page;
    }
    isFrom(address) {
        return this.address.toUpperCase() === address.toUpperCase();
    }
};
AddressDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-address-details',
        template: __webpack_require__(/*! ./address-details.component.html */ "./src/app/pages/address-details/address-details.component.html"),
        styles: [__webpack_require__(/*! ./address-details.component.scss */ "./src/app/pages/address-details/address-details.component.scss")],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        transaction_service_1.TransactionService,
        address_service_1.AddressService])
], AddressDetailsComponent);
exports.AddressDetailsComponent = AddressDetailsComponent;


/***/ }),

/***/ "./src/app/pages/block-details/block-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/block-details/block-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"page-body\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h1>Block</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <table class=\"table table-striped table-dark table-akroma table-responsive-sm\" *ngIf=\"block$ | async as block\">\r\n          <tbody>\r\n            <tr>\r\n              <td>Number</td>\r\n              <td>{{ block.number }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Hash</td>\r\n              <td>{{ block.hash }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Timestamp</td>\r\n              <td>{{ block.timestamp | unixTimestampToDate | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Parent Hash</td>\r\n              <td>\r\n                <a [routerLink]=\"['/', 'block', block.parentHash]\">\r\n                  {{ block.parentHash }}\r\n                </a>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>SHA3 Uncles</td>\r\n              <td>{{ block.sha3Uncles }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Miner</td>\r\n              <td>{{ block.miner }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Difficulty</td>\r\n              <td>{{ block.difficulty }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Total Difficulty</td>\r\n              <td>{{ block.totalDifficulty }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Gas Limit</td>\r\n              <td>{{ block.gasLimit }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Gas Used</td>\r\n              <td>{{ block.gasUsed }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Nonce</td>\r\n              <td>{{ block.nonce }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Extra Data</td>\r\n              <td>{{ block.extraData | hexToAscii }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/block-details/block-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/block-details/block-details.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-akroma {\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 0 !important; }\n  .card-akroma a {\n    color: #FFFFFF;\n    text-decoration: underline; }\n  .dropdown-akroma {\n  border-radius: 0;\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma {\n  border-radius: 0;\n  background-color: #343a40 !important;\n  color: white;\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma.on-form {\n    background-color: #1A1A1A !important; }\n  .table-akroma {\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .table-akroma.table-dark tr td:first-child {\n    text-transform: uppercase; }\n  .table-akroma.table-dark a,\n  .table-akroma.table-dark a:visited {\n    color: #fff;\n    text-decoration: none; }\n  .table-akroma.table-dark a:hover,\n  .table-akroma.table-dark a.active {\n    text-decoration: underline;\n    opacity: 0.60; }\n  .form-control-akroma {\n  border: 1px solid #fbfbfb;\n  border-radius: 0; }\n  :host, .page-body {\n  display: block;\n  min-height: 70vh; }\n"

/***/ }),

/***/ "./src/app/pages/block-details/block-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/block-details/block-details.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const block_service_1 = __webpack_require__(/*! ../../services/block.service */ "./src/app/services/block.service.ts");
let BlockDetailsComponent = class BlockDetailsComponent {
    constructor(route, blockService) {
        this.route = route;
        this.blockService = blockService;
        console.log('block details!');
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.block$ = rxjs_1.from(this.blockService.getBlock(params.blockId));
        });
    }
};
BlockDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-block-details',
        template: __webpack_require__(/*! ./block-details.component.html */ "./src/app/pages/block-details/block-details.component.html"),
        styles: [__webpack_require__(/*! ./block-details.component.scss */ "./src/app/pages/block-details/block-details.component.scss")],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        block_service_1.BlockService])
], BlockDetailsComponent);
exports.BlockDetailsComponent = BlockDetailsComponent;


/***/ }),

/***/ "./src/app/pages/explorer-home/explorer-home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/explorer-home/explorer-home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"page-body\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <app-blocks-panel></app-blocks-panel>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <app-transactions-panel></app-transactions-panel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/pages/explorer-home/explorer-home.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/explorer-home/explorer-home.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-akroma {\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 0 !important; }\n  .card-akroma a {\n    color: #FFFFFF;\n    text-decoration: underline; }\n  .dropdown-akroma {\n  border-radius: 0;\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma {\n  border-radius: 0;\n  background-color: #343a40 !important;\n  color: white;\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma.on-form {\n    background-color: #1A1A1A !important; }\n  .table-akroma {\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .table-akroma.table-dark tr td:first-child {\n    text-transform: uppercase; }\n  .table-akroma.table-dark a,\n  .table-akroma.table-dark a:visited {\n    color: #fff;\n    text-decoration: none; }\n  .table-akroma.table-dark a:hover,\n  .table-akroma.table-dark a.active {\n    text-decoration: underline;\n    opacity: 0.60; }\n  .form-control-akroma {\n  border: 1px solid #fbfbfb;\n  border-radius: 0; }\n  :host, .page-body {\n  display: block;\n  min-height: 70vh; }\n"

/***/ }),

/***/ "./src/app/pages/explorer-home/explorer-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/explorer-home/explorer-home.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let ExplorerHomeComponent = class ExplorerHomeComponent {
    constructor() {
        this.activePanel = 'blocks';
    }
    ngOnInit() {
    }
    get isBlocksPanelActive() {
        return this.activePanel === 'blocks';
    }
    get isTransactionsPanelActive() {
        return this.activePanel === 'transactions';
    }
    setActivePanel(panel) {
        if (this.activePanel === panel) {
            return;
        }
        this.activePanel = panel;
    }
};
ExplorerHomeComponent = __decorate([
    core_1.Component({
        selector: 'app-explorer-home',
        template: __webpack_require__(/*! ./explorer-home.component.html */ "./src/app/pages/explorer-home/explorer-home.component.html"),
        styles: [__webpack_require__(/*! ./explorer-home.component.scss */ "./src/app/pages/explorer-home/explorer-home.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], ExplorerHomeComponent);
exports.ExplorerHomeComponent = ExplorerHomeComponent;


/***/ }),

/***/ "./src/app/pages/transaction-details/transaction-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/transaction-details/transaction-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"page-body\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h1>Transaction</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <table class=\"table table-striped table-dark table-akroma table-responsive-sm\" *ngIf=\"transaction$ | async as transaction\">\r\n          <tbody>\r\n            <tr>\r\n              <td>Hash</td>\r\n              <td>{{ transaction.hash }}</td>\r\n            </tr>\r\n            <!-- <tr>\r\n              <td>Timestamp</td>\r\n              <td>{{ block.timestamp | unixTimestampToDate | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n            </tr> -->\r\n            <tr>\r\n              <td>From</td>\r\n              <td>\r\n                <a [routerLink]=\"['/', 'address', transaction.from]\">\r\n                  {{ transaction.from }}\r\n                </a>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>To</td>\r\n              <td>\r\n                <a [routerLink]=\"['/', 'address', transaction.to]\">\r\n                  {{ transaction.to }}\r\n                </a>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Confirmations</td>\r\n              <td>0</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Value</td>\r\n              <td>{{ transaction.value }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Block Number</td>\r\n              <td>\r\n                <a [routerLink]=\"['/', 'block', transaction.blockNumber]\">\r\n                  {{ transaction.blockNumber }}\r\n                </a>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Block Hash</td>\r\n              <td>\r\n                <a [routerLink]=\"['/', 'block', transaction.blockHash]\">\r\n                  {{ transaction.blockHash }}\r\n                </a>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Gas Provided</td>\r\n              <td>{{ transaction.gas }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Gas Price</td>\r\n              <td>{{ transaction.gasPrice }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Nonce</td>\r\n              <td>{{ transaction.nonce }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Input Data</td>\r\n              <td> {{ transaction.input | hexToAscii }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/transaction-details/transaction-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/transaction-details/transaction-details.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-akroma {\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 0 !important; }\n  .card-akroma a {\n    color: #FFFFFF;\n    text-decoration: underline; }\n  .dropdown-akroma {\n  border-radius: 0;\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma {\n  border-radius: 0;\n  background-color: #343a40 !important;\n  color: white;\n  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25); }\n  .btn-akroma.on-form {\n    background-color: #1A1A1A !important; }\n  .table-akroma {\n  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.25); }\n  .table-akroma.table-dark tr td:first-child {\n    text-transform: uppercase; }\n  .table-akroma.table-dark a,\n  .table-akroma.table-dark a:visited {\n    color: #fff;\n    text-decoration: none; }\n  .table-akroma.table-dark a:hover,\n  .table-akroma.table-dark a.active {\n    text-decoration: underline;\n    opacity: 0.60; }\n  .form-control-akroma {\n  border: 1px solid #fbfbfb;\n  border-radius: 0; }\n  :host, .page-body {\n  display: block;\n  min-height: 70vh; }\n"

/***/ }),

/***/ "./src/app/pages/transaction-details/transaction-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/transaction-details/transaction-details.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const transaction_service_1 = __webpack_require__(/*! ../../services/transaction.service */ "./src/app/services/transaction.service.ts");
let TransactionDetailsComponent = class TransactionDetailsComponent {
    constructor(route, transactionService) {
        this.route = route;
        this.transactionService = transactionService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.transaction$ = rxjs_1.from(this.transactionService.getTransaction(params.transactionHash));
        });
    }
};
TransactionDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-transaction-details',
        template: __webpack_require__(/*! ./transaction-details.component.html */ "./src/app/pages/transaction-details/transaction-details.component.html"),
        styles: [__webpack_require__(/*! ./transaction-details.component.scss */ "./src/app/pages/transaction-details/transaction-details.component.scss")],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        transaction_service_1.TransactionService])
], TransactionDetailsComponent);
exports.TransactionDetailsComponent = TransactionDetailsComponent;


/***/ }),

/***/ "./src/app/pipes/hex-to-ascii.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/hex-to-ascii.pipe.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const utils_1 = __webpack_require__(/*! typesafe-web3/dist/lib/utils */ "./node_modules/typesafe-web3/dist/lib/utils.js");
let HexToAsciiPipe = class HexToAsciiPipe {
    transform(value) {
        return utils_1.default.toAscii(value);
    }
};
HexToAsciiPipe = __decorate([
    core_1.Pipe({
        name: 'hexToAscii',
    })
], HexToAsciiPipe);
exports.HexToAsciiPipe = HexToAsciiPipe;


/***/ }),

/***/ "./src/app/pipes/unix-timestamp-to-date.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/pipes/unix-timestamp-to-date.pipe.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let UnixTimestampToDatePipe = class UnixTimestampToDatePipe {
    transform(value) {
        return new Date(value * 1000);
    }
};
UnixTimestampToDatePipe = __decorate([
    core_1.Pipe({
        name: 'unixTimestampToDate',
    })
], UnixTimestampToDatePipe);
exports.UnixTimestampToDatePipe = UnixTimestampToDatePipe;


/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const address_details_component_1 = __webpack_require__(/*! ./pages/address-details/address-details.component */ "./src/app/pages/address-details/address-details.component.ts");
const block_details_component_1 = __webpack_require__(/*! ./pages/block-details/block-details.component */ "./src/app/pages/block-details/block-details.component.ts");
const explorer_home_component_1 = __webpack_require__(/*! ./pages/explorer-home/explorer-home.component */ "./src/app/pages/explorer-home/explorer-home.component.ts");
const transaction_details_component_1 = __webpack_require__(/*! ./pages/transaction-details/transaction-details.component */ "./src/app/pages/transaction-details/transaction-details.component.ts");
const routes = [
    { path: '', component: explorer_home_component_1.ExplorerHomeComponent },
    { path: 'block/:blockId', component: block_details_component_1.BlockDetailsComponent },
    { path: 'transaction/:transactionHash', component: transaction_details_component_1.TransactionDetailsComponent },
    { path: 'address/:addressHash', component: address_details_component_1.AddressDetailsComponent },
];
let RoutingModule = class RoutingModule {
};
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
    })
], RoutingModule);
exports.RoutingModule = RoutingModule;


/***/ }),

/***/ "./src/app/services/address.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/address.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const utils_1 = __webpack_require__(/*! typesafe-web3/dist/lib/utils */ "./node_modules/typesafe-web3/dist/lib/utils.js");
const akroma_service_1 = __webpack_require__(/*! ./akroma.service */ "./src/app/services/akroma.service.ts");
let AddressService = class AddressService {
    constructor(akroma) {
        this.akroma = akroma;
    }
    async getBalance(hash) {
        console.log('called: getBalance');
        const result = await this.akroma.connect().getBalance(hash);
        if (result.ok) {
            return utils_1.default.fromWei(result.data, 'ether').toString();
        }
        return Promise.reject('could not get balance');
    }
};
AddressService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [akroma_service_1.AkromaService])
], AddressService);
exports.AddressService = AddressService;


/***/ }),

/***/ "./src/app/services/akroma.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/akroma.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const typesafe_web3_1 = __webpack_require__(/*! typesafe-web3 */ "./node_modules/typesafe-web3/dist/lib/index.js");
const settings_service_1 = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
let AkromaService = class AkromaService {
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    connect() {
        return new typesafe_web3_1.TypeSafeWeb3(this.settingsService.getConnectionUrl());
    }
};
AkromaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], AkromaService);
exports.AkromaService = AkromaService;


/***/ }),

/***/ "./src/app/services/block.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/block.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const akroma_service_1 = __webpack_require__(/*! ./akroma.service */ "./src/app/services/akroma.service.ts");
let BlockService = class BlockService {
    constructor(akroma) {
        this.akroma = akroma;
    }
    async getBlocks() {
        console.log('called: getBlocks');
        const blocks = [];
        const latest = await this.akroma.connect().getBlockByNumber('latest', true);
        if (latest.data !== undefined && latest.data.number !== undefined) {
            blocks.push(latest.data);
            const stop = latest.data.number - 10;
            for (let index = latest.data.number; index > stop; index--) {
                const next = await this.akroma.connect().getBlockByNumber(index, true);
                if (next.data !== undefined) {
                    blocks.push(next.data);
                }
            }
        }
        return blocks;
    }
    async getBlock(numberOrHash) {
        console.log('called: getBlock');
        const result = (this.isHash(numberOrHash) === true)
            ? await this.akroma.connect().getBlockByHash(numberOrHash)
            : await this.akroma.connect().getBlockByNumber(parseInt(numberOrHash, 10));
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }
    isHash(lookupValue) {
        return /^0x?([A-Fa-f0-9]{64})$/.test(lookupValue);
    }
};
BlockService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [akroma_service_1.AkromaService])
], BlockService);
exports.BlockService = BlockService;


/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let SettingsService = class SettingsService {
    constructor() { }
    getConnectionUrl() {
        const url = localStorage.getItem('connection_url');
        if (url !== null) {
            return url;
        }
        return 'http://localhost:8545';
    }
    setConnectionUrl(url) {
        // TODO: validation.
        localStorage.setItem('connection_url', url);
        return url;
    }
};
SettingsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SettingsService);
exports.SettingsService = SettingsService;


/***/ }),

/***/ "./src/app/services/transaction.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/transaction.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const akroma_service_1 = __webpack_require__(/*! ./akroma.service */ "./src/app/services/akroma.service.ts");
let TransactionService = class TransactionService {
    constructor(akroma) {
        this.akroma = akroma;
    }
    async getTransaction(hash) {
        console.log('called: getTransaction');
        const result = await this.akroma.connect().getTransactionByHash(hash);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }
    async getTransactionCountByAddress(hash) {
        console.log('called: getTransactionCountByAddress');
        const result = await this.akroma.connect().getTransactionCountByAddress(hash);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }
    async getTransactionsAndBlockByAddress(hash, page) {
        console.log('called: getTransactionsAndBlockByAddress');
        const result = await this.akroma.connect().getTransactionsAndBlockByAddress(hash, page);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }
    async getTransactionsByAddress(hash) {
        console.log('called: getTransactionsByAddress');
        const result = await this.akroma.connect().getTransactionsByAddress(hash);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get transactions');
    }
};
TransactionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [akroma_service_1.AkromaService])
], TransactionService);
exports.TransactionService = TransactionService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\detroitpro\projects\akroma-static-explorer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map