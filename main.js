(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar\">\n    <a href=\"https://developer.datalogic.com\" src=\"_self\"><img src=\"/assets/dl-logo.png\" class=\"dl-logo\"></a>\n</div>\n\n\n<app-wifi-form></app-wifi-form>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/generator/generator.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/generator/generator.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper\">\n      <qrcode #parent [qrdata]=\"qrCode\" [size]=\"256\" [level]=\"'L'\" download></qrcode>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wifi-form/wifi-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wifi-form/wifi-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Wi-Fi QR Code Generator</h1>\n<h4>Fill out the fields to automatically generate your Wi-Fi QR Code.</h4>\n<form [formGroup]=\"QrForm\">\n    <div class=\"col\">\n\n        <mat-form-field appearance=\"outline\">\n            <mat-label>SSID</mat-label>\n            <input matInput type=\"text\" formControlName=\"ssid\" [maxlength]=\"32\">\n            <mat-error>SSID is required</mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Encryption</mat-label>\n            <mat-select formControlName=\"encryption\" name=\"encryption\" placeholder=\"Encryption\">\n                <mat-option value=\"WPA\">WPA/WPA2</mat-option>\n                <mat-option value=\"WEP\">WEP</mat-option>\n                <mat-option value=\"none\">none</mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <mat-form-field [hidden]=\"!showkey\" appearance=\"outline\">\n            <input matInput [type]=\"show ? 'text' : 'password'\" [hidden]=\"!showkey\" formControlName=\"nwkey\"\n                placeholder=\"Password\" [required]=\"showkey\" [maxlength]=\"QrForm.value.encryption === 'WPA' ? 63 : 13\">\n\n            <button mat-icon-button matSuffix (click)=\"togglePw()\"\n                [ngStyle]=\"{'background': show ?  'url(../assets/visible.svg) no-repeat' : 'url(../assets/off.svg) no-repeat'}\"\n                [hidden]=\"!showkey || QrForm.value.nwkey.toString() === ''\" type=\"button\"></button>\n            <mat-error>{{keyErrorMessage}}</mat-error>\n        </mat-form-field>\n\n        <div class=\"a\">\n            <mat-checkbox formControlName=\"hidden\" matTooltip=\"Is the network hidden?\" matTooltipPosition=\"right\">\n                Hidden Network\n            </mat-checkbox>\n        </div>\n\n        <div [hidden]=\"!showkey\" class=\"b\">\n            <mat-checkbox formControlName=\"encryptQr\" matTooltip=\"Encrypts the network password.\" matTooltipPosition=\"right\">\n                Encrypt QR Code\n            </mat-checkbox>\n        </div>\n        <span [hidden]=\"!showkey\" [ngClass]=\"QrForm.value.encryptQr && QrForm.valid ? 'qr-reveal' : 'qr-info'\">\n            <mat-icon style=\"font-size: 30px; color: rgb(0,37,150);\">warning</mat-icon><br />\n            Encrypted QR Code. This\n            code may only be scanned by\n            Datalogic devices running <a href=\"https://datalogic.github.io/wifiqrdoc/overview\">supported firmware.</a>\n        </span>\n\n    </div>\n\n</form>\n\n<app-generator #qrGen class=\"container\" *ngIf=\"this.wizardService.qrValid\"></app-generator>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard.service */ "./src/app/wizard.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(wizardService) {
        this.wizardService = wizardService;
        this.title = 'qr-web';
        this.wizardService.name = 'Trinity!';
        this.wizardService.qrValid = true;
    }
    AppComponent.prototype.message = function () {
        alert('Generated barcode!');
    };
    AppComponent.ctorParameters = function () { return [
        { type: _wizard_service__WEBPACK_IMPORTED_MODULE_2__["WizardService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./generator/generator.component */ "./src/app/generator/generator.component.ts");
/* harmony import */ var _wifi_form_wifi_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wifi-form/wifi-form.component */ "./src/app/wifi-form/wifi-form.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _generator_generator_component__WEBPACK_IMPORTED_MODULE_16__["GeneratorComponent"],
                _wifi_form_wifi_form_component__WEBPACK_IMPORTED_MODULE_17__["WifiFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__["QRCodeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/generator/generator.component.css":
/*!***************************************************!*\
  !*** ./src/app/generator/generator.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 832px) {}\n\nqrcode {\n    display: inline-block !important;\n    margin-top: 44px;\n}\n\n.wrapper {\n    text-align: center !important;\n}\n\n.container {\n    position: relative;\n}\n\n@media (max-width: 831px) {\n    qrcode {\n        display: inline-block !important;\n        margin-top: 10px;\n        margin-bottom: 40px;\n    }\n    .wrapper{\n        text-align: center !important;\n    }\n    .container {\n        position: relative;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhdG9yL2dlbmVyYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjs7QUFFM0I7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxnQ0FBZ0M7UUFDaEMsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRvci9nZW5lcmF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA4MzJweCkge31cblxucXJjb2RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xufVxuXG4ud3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgzMXB4KSB7XG4gICAgcXJjb2RlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuICAgIC53cmFwcGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/generator/generator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/generator/generator.component.ts ***!
  \**************************************************/
/*! exports provided: GeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function() { return GeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wizard.service */ "./src/app/wizard.service.ts");



var forge = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
var qrCode = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent(wizardService) {
        var _this = this;
        this.wizardService = wizardService;
        this.qrCode = ' ';
        this.limit = 850;
        this.version = 2;
        this.wizardService.encodeJson.subscribe(function () {
            console.log('Encoding json', _this.wizardService.jsonData);
            _this.json = _this.wizardService.jsonData;
            if (Object.keys(_this.json).length > 0) {
                _this.encodeJson();
            }
        });
    }
    GeneratorComponent.prototype.encodeJson = function () {
        // Check for encryption option
        var encryptFlag = this.json.encryptQr === true && this.json.encryption.toString() !== 'none';
        this.json.ssid = this.escapeChars(this.json.ssid.toString());
        this.json.key = this.escapeChars(this.json.nwkey.toString());
        // Initial JSON -> string
        // Needs to be declared with let, otherwise generate only works 1 time
        var wifiString = 'WIFI:S:' + this.json.ssid + ';T:' + this.json.encryption;
        if (encryptFlag) {
            // RSA encrypt symmetric key
            var pki = forge.pki;
            // convert a PEM-formatted public key to a Forge public key
            var pem = '-----BEGIN PUBLIC KEY-----\n' +
                'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsca7DbXsLRGrvRdC5k6o\n' +
                'iKpPwErFfvFlPUlTWPTNlSgZC7vUZNDw05LPXhBvwFcJQEFFzy5Xg0NLgt865XvB\n' +
                'FDqDTBkrW3VpizZO83/fqUEIz47dNqLdJXnjdRzfHdcMYYOxTsHAVVDCdv1GGDZA\n' +
                'Psg1i4LWnjjl8f6s0a4kjtvjxW+qkGDL99OO29lOlba/onlXo9DoVLVyKzizq0Fa\n' +
                '9Y2Aqdb9XlIfkg3yo4Y0Lk8WULEieHF37XFL4B1IJkACgnq/jP1qVr1pAFmu1K0t\n' +
                'qbFauTp6IXGSplM3wOCH4TtqyU6Em3TzoOgOP2ObOUD1+yMEDy8NPqHfmy2A/3Sc\n' +
                'kQIDAQAB\n' +
                '-----END PUBLIC KEY-----';
            var publicKey = pki.publicKeyFromPem(pem);
            var encryptedJsonKey = publicKey.encrypt(this.json.key);
            // Base64 encode
            this.encodedB64 = forge.util.encode64(encryptedJsonKey);
            wifiString = wifiString.concat(';P:' + this.encodedB64 + ';DL_ENC:true');
        }
        else {
            // No encryption option
            if (this.json.key.toString() === '') {
                wifiString = 'WIFI:S:' + this.json.ssid + ';T:' + 'nopass' + ';P:' + this.json.key;
            }
            else {
                wifiString = 'WIFI:S:' + this.json.ssid + ';T:' + this.json.encryption + ';P:' + this.json.key;
            }
        }
        // Handle hidden ssid option
        if (this.json.hidden === true) {
            wifiString = wifiString.concat(';H:true;');
        }
        else {
            wifiString = wifiString.concat(';;');
        }
        this.qrCode = wifiString;
        // console.log('Final QR String:', this.qrCode);
    };
    GeneratorComponent.prototype.escapeChars = function (str) {
        // Search string for ':' and ';' and escape them
        // Also escape existing '\' in string since they could escape
        // a delimiting character when trailing
        var f = /\\/g;
        str = str.replace(f, '\\\\');
        var re = /;/g;
        str = str.replace(re, '\\;');
        var re2 = /:/g;
        str = str.replace(re2, '\\:');
        return str;
    };
    GeneratorComponent.ctorParameters = function () { return [
        { type: _wizard_service__WEBPACK_IMPORTED_MODULE_2__["WizardService"] }
    ]; };
    GeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generator',
            template: __webpack_require__(/*! raw-loader!./generator.component.html */ "./node_modules/raw-loader/index.js!./src/app/generator/generator.component.html"),
            styles: [__webpack_require__(/*! ./generator.component.css */ "./src/app/generator/generator.component.css")]
        })
    ], GeneratorComponent);
    return GeneratorComponent;
}());



/***/ }),

/***/ "./src/app/wifi-code.ts":
/*!******************************!*\
  !*** ./src/app/wifi-code.ts ***!
  \******************************/
/*! exports provided: WifiCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiCode", function() { return WifiCode; });
var WifiCode = /** @class */ (function () {
    function WifiCode(ssid, encryption, nwkey, hidden, encryptQr) {
        this.ssid = ssid;
        this.encryption = encryption;
        this.nwkey = nwkey;
        this.hidden = hidden;
        this.encryptQr = encryptQr;
    }
    WifiCode.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Boolean }
    ]; };
    return WifiCode;
}());



/***/ }),

/***/ "./src/app/wifi-form/wifi-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/wifi-form/wifi-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 832px) {\n    .qr-info {\n        visibility: hidden;\n    }\n    .qr-reveal {\n        visibility: visible;\n        font-size: 15px;\n        font-weight: 500;\n        margin: auto;\n        margin-top: 10px;\n        max-width: 440px;\n        border-radius: 6px;\n        padding: 3px;\n        border: 1px #006896 solid;\n        background-color: #F0F3F7;\n        color: #172F66;\n    }\n    mat-form-field {\n        min-width: 440px;\n        max-width: 440px;\n        margin: auto;\n        margin-bottom: 10px;\n    }\n    mat-checkbox {\n        max-width: 440px;\n        display: inline-block;\n        margin-bottom: 10px;\n    }\n    form {\n        display: block;\n        text-align: center;\n        position: relative;\n    }\n    h1 {\n        padding-top: 20px;\n        font-size: 30px;\n    }\n    h1, h4 {\n        text-align: center;\n        font-weight: 400;\n    }\n    .a {\n        margin: auto;\n        padding-right: 304px;\n    }\n    .b {\n        margin: auto;\n        padding-right: 300px;\n    }\n    .col {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n    }\n    ::ng-deep .mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-indeterminate .mat-checkbox-background {\n        background-color: rgb(0, 37, 150) !important;\n    }\n    .mat-icon-button{\n        vertical-align: center;\n    }\n}\n\n@media (max-width: 831px) {\n    .qr-info {\n        visibility: hidden;\n    }\n    .qr-reveal {\n        visibility: visible;\n        font-size: 14px;\n        font-weight: 500;\n        margin: auto;\n        margin-top: 10px;\n        max-width: 260px;\n        border-radius: 6px;\n        padding: 3px;\n        border: 1px #006896 solid;\n        background-color: #F0F3F7;\n        color: #172F66;\n    }\n    mat-form-field {\n        min-width: 260px;\n        margin: auto;\n        margin-bottom: 8px;\n    }\n    form {\n        display: block;\n        text-align: center;\n    }\n    h1 {\n        padding-top: 20px;\n        font-size: 30px;\n    }\n    h1, h4 {\n        text-align: center;\n        font-weight: 400;\n        max-width: 300px;\n        margin: auto;\n    }\n    mat-checkbox {\n        display: block;\n        max-width: 200px;\n        margin: auto;\n    }\n    .a {\n        margin-bottom: 10px;\n        margin-right: 124px;\n    }\n    .b {\n        margin-right: 120px;\n    }\n    button {\n        min-width: 30px !important;\n        min-height: 30px !important;\n        background-position: center !important;\n        border: 0px;\n        opacity: 0.5;\n        margin: 0px !important;\n        top: -12px;\n        right: -10px;\n    }\n    .col {\n        display: flex;\n        flex-direction: column;\n    }\n    ::ng-deep .mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-indeterminate .mat-checkbox-background {\n        background-color: rgb(0, 37, 150) !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lmaS1mb3JtL3dpZmktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7UUFDWixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLFlBQVk7UUFDWixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSw0Q0FBNEM7SUFDaEQ7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLHNDQUFzQztRQUN0QyxXQUFXO1FBQ1gsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksNENBQTRDO0lBQ2hEO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC93aWZpLWZvcm0vd2lmaS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogODMycHgpIHtcbiAgICAucXItaW5mbyB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gICAgLnFyLXJldmVhbCB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDQ0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgYm9yZGVyOiAxcHggIzAwNjg5NiBzb2xpZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjNGNztcbiAgICAgICAgY29sb3I6ICMxNzJGNjY7XG4gICAgfVxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgbWluLXdpZHRoOiA0NDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA0NDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBtYXQtY2hlY2tib3gge1xuICAgICAgICBtYXgtd2lkdGg6IDQ0MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIGZvcm0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgaDEsIGg0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICAuYSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzA0cHg7XG4gICAgfVxuICAgIC5iIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMDBweDtcbiAgICB9XG4gICAgLmNvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDM3LCAxNTApICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tYXQtaWNvbi1idXR0b257XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODMxcHgpIHtcbiAgICAucXItaW5mbyB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gICAgLnFyLXJldmVhbCB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDI2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgYm9yZGVyOiAxcHggIzAwNjg5NiBzb2xpZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjNGNztcbiAgICAgICAgY29sb3I6ICMxNzJGNjY7XG4gICAgfVxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGZvcm0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIGgxLCBoNCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBtYXQtY2hlY2tib3gge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAuYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTI0cHg7XG4gICAgfVxuICAgIC5iIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICB9XG4gICAgLmNvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDM3LCAxNTApICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/wifi-form/wifi-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wifi-form/wifi-form.component.ts ***!
  \**************************************************/
/*! exports provided: WifiFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiFormComponent", function() { return WifiFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _wifi_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wifi-code */ "./src/app/wifi-code.ts");
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wizard.service */ "./src/app/wizard.service.ts");





var WifiFormComponent = /** @class */ (function () {
    function WifiFormComponent(wizardService) {
        this.wizardService = wizardService;
        this.model = new _wifi_code__WEBPACK_IMPORTED_MODULE_3__["WifiCode"]('', 'WPA', '', false, false);
        this.keyValidator = function (control) {
            if (control.value !== '' && this.showkey) {
                var pwsize = control.value.length;
                if (this.QrForm.value.encryption.toString() === 'WEP') {
                    if (pwsize === 5 || pwsize === 13) {
                        return null;
                    }
                    else {
                        return {
                            errorObj: {
                                someobj: 'error'
                            }
                        };
                    }
                }
            }
            return null;
        };
        this.QrForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ssid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.ssid, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            encryption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.encryption),
            nwkey: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.nwkey, this.keyValidator.bind(this)),
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.hidden),
            encryptQr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.encryptQr),
        });
        this.keyErrorMessage = 'Password is required';
        this.wizardService.name = 'Smith!';
        this.onChanges();
        this.show = false;
        this.showkey = true;
        this.wizardService.qrValid = this.QrForm.valid;
    }
    WifiFormComponent.prototype.onChanges = function () {
        var _this = this;
        this.QrForm.valueChanges.subscribe(function (val) {
            _this.showHideKeyField();
            _this.updateKeyError();
            _this.wizardService.jsonData = _this.QrForm.value;
            _this.wizardService.encodeJson.emit();
            _this.wizardService.qrValid = _this.QrForm.valid;
        });
    };
    WifiFormComponent.prototype.togglePw = function () {
        this.show = !this.show;
        // console.log('Key is:', this.QrForm.value.nwkey.toString());
    };
    WifiFormComponent.prototype.showHideKeyField = function () {
        if (this.QrForm.value.encryption.toString() === 'none') {
            this.QrForm.value.nwkey = '';
            this.showkey = false;
        }
        else {
            this.showkey = true;
        }
    };
    WifiFormComponent.prototype.updateKeyError = function () {
        if (this.QrForm.value.encryption.toString() === 'WEP') {
            this.keyErrorMessage = 'WEP Key must be either 5 or 13 characters';
        }
        else {
            this.keyErrorMessage = 'Password is required';
        }
    };
    WifiFormComponent.ctorParameters = function () { return [
        { type: _wizard_service__WEBPACK_IMPORTED_MODULE_4__["WizardService"] }
    ]; };
    WifiFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wifi-form',
            template: __webpack_require__(/*! raw-loader!./wifi-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/wifi-form/wifi-form.component.html"),
            styles: [__webpack_require__(/*! ./wifi-form.component.css */ "./src/app/wifi-form/wifi-form.component.css")]
        })
    ], WifiFormComponent);
    return WifiFormComponent;
}());



/***/ }),

/***/ "./src/app/wizard.service.ts":
/*!***********************************!*\
  !*** ./src/app/wizard.service.ts ***!
  \***********************************/
/*! exports provided: EnableState, WizardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableState", function() { return EnableState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardService", function() { return WizardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnableState;
(function (EnableState) {
    EnableState[EnableState["Default"] = 0] = "Default";
    EnableState[EnableState["Enabled"] = 1] = "Enabled";
    EnableState[EnableState["Disabled"] = 2] = "Disabled";
})(EnableState || (EnableState = {}));
var WizardService = /** @class */ (function () {
    function WizardService() {
        this.wstr = '';
        this._name = '';
        this.encodeJson = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(WizardService.prototype, "name", {
        set: function (name) {
            this._name = (name && name.trim()) || '<no name set>';
            this.wstr += ' I mean ' + this._name;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], WizardService.prototype, "name", null);
    WizardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WizardService);
    return WizardService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cody/git/840/wifi-qr-generator/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map