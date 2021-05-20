(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+otB":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map-mapbox{\n    width: 100%;\n    height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwLW1hcGJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/javier/MecanicoUbuntu/Documentos/HackInai/HackINAI/ini/src/main.ts */"zUnb");


/***/ }),

/***/ "2392":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/salarios/salarios.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container \" appearance=\"fill\">\n  <label>Select</label>\n  <select [(ngModel)]=\"selected\">\n    <option value=\"puestos\">Puestos</option>\n    <option value=\"ubicacion\">Ubicación</option>\n  </select>\n</div>\n\n<p>You selected: {{selected}}</p>\n<div *ngIf=\"selected=='puestos'\">\nPrueba\n\n</div>\n<div *ngIf=\"selected=='ubicacion'\">\nUbicacon\n</div>\n<!--\n  <h1>Salarios</h1>\n <div *ngFor= \"let d of data\">\n  <p>{{d[1]}}</p>\n</div>\n-->\n \n");

/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "yxfS");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "sx49");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "2Nm4":
/*!************************************!*\
  !*** ./src/app/services/getCsv.ts ***!
  \************************************/
/*! exports provided: getCsv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCsv", function() { return getCsv; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let getCsv = class getCsv {
    constructor(http) {
        this.http = http;
        this.data = 'https://raw.githubusercontent.com/Erick2G/Hack2021/main/csvs/primer_trim_concurso.csv';
    }
    getInfo(dir) {
        const lista = this.http.get(dir, { responseType: 'text' });
        return lista;
    }
};
getCsv.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
getCsv = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], getCsv);



/***/ }),

/***/ "9pw4":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table.component.html */ "j1zz");
/* harmony import */ var _table_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.component.css */ "UKFD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TableComponent = class TableComponent {
    constructor() { }
    ngOnInit() {
    }
};
TableComponent.ctorParameters = () => [];
TableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-table',
        template: _raw_loader_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_table_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TableComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ANJD":
/*!********************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    mapboxKey: 'pk.eyJ1IjoiamF2bXZ6MTAwMTAiLCJhIjoiY2tvd2R1dHh3MDRncTJ2cXd1dWdscXFxZyJ9.YoptSE4PlTV_8rplhq5rZw'
};


/***/ }),

/***/ "EZtS":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map.component.html */ "eC1z");
/* harmony import */ var _map_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.component.css */ "+otB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_5__);






let MapComponent = class MapComponent {
    constructor() {
        this.lat = 19.201255;
        this.lng = -99.141044;
    }
    ngOnInit() {
        mapbox_gl__WEBPACK_IMPORTED_MODULE_5__["accessToken"] = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].mapboxKey;
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_5__["Map"]({
            container: 'map-mapbox',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.lng, this.lat],
            zoom: 16.6
        });
    }
};
MapComponent.ctorParameters = () => [];
MapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map',
        template: _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapComponent);



/***/ }),

/***/ "J+5y":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filtros-salatios/filtros-salatios.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>filtros-salatios works!</p>\n");

/***/ }),

/***/ "MS77":
/*!****************************************************************************!*\
  !*** ./src/app/components/filtros-salatios/filtros-salatios.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0cm9zLXNhbGF0aW9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "PKpc":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/inicio.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'inico';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UKFD":
/*!******************************************************!*\
  !*** ./src/app/components/table/table.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\">\n  <app-header>\n    <app-nav-bar>\n    </app-nav-bar>\n  </app-header>\n</div>\n<div>\n  <router-outlet></router-outlet>\n</div>\n<div class=\"\">\n</div>\n");

/***/ }),

/***/ "W3ws":
/*!***********************************************************!*\
  !*** ./src/app/components/salarios/salarios.component.ts ***!
  \***********************************************************/
/*! exports provided: SalariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalariosComponent", function() { return SalariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_salarios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./salarios.component.html */ "2392");
/* harmony import */ var _salarios_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salarios.component.css */ "jp2v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_getCsv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getCsv */ "2Nm4");
/* harmony import */ var _services_transformSalarios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/transformSalarios */ "yqP/");






let SalariosComponent = class SalariosComponent {
    constructor(getcsv, t) {
        this.getcsv = getcsv;
        this.t = t;
        this.data = [];
        this.selected = 'puestos';
        this.urlTrimestre = 'https://raw.githubusercontent.com/Erick2G/Hack2021/main/csvs/primer_trim_concurso.csv';
    }
    ngOnInit() {
        this.getData();
        this.sendSelected(); //del combobox
    }
    getData() {
        this.getcsv.getInfo(this.urlTrimestre).subscribe(infos => {
            const list = infos.split('\n');
            this.data = this.t.transform(list);
        });
    }
    sendSelected() {
    }
};
SalariosComponent.ctorParameters = () => [
    { type: _services_getCsv__WEBPACK_IMPORTED_MODULE_4__["getCsv"] },
    { type: _services_transformSalarios__WEBPACK_IMPORTED_MODULE_5__["TransformSalario"] }
];
SalariosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-salarios',
        template: _raw_loader_salarios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_salarios_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SalariosComponent);



/***/ }),

/***/ "XFqa":
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio.component.html */ "PKpc");
/* harmony import */ var _inicio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.component.css */ "ANJD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InicioComponent = class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
};
InicioComponent.ctorParameters = () => [];
InicioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_salarios_salarios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/salarios/salarios.component */ "W3ws");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/map/map.component */ "EZtS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/table/table.component */ "9pw4");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_filtros_salatios_filtros_salatios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/filtros-salatios/filtros-salatios.component */ "lUYb");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "XFqa");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_salarios_salarios_component__WEBPACK_IMPORTED_MODULE_6__["SalariosComponent"],
            _components_filtros_salatios_filtros_salatios_component__WEBPACK_IMPORTED_MODULE_12__["FiltrosSalatiosComponent"],
            _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_13__["InicioComponent"],
            _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
            _components_table_table_component__WEBPACK_IMPORTED_MODULE_9__["TableComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            //HttpModule,
            //HttpClient,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    mapboxKey: 'pk.eyJ1IjoiamF2bXZ6MTAwMTAiLCJhIjoiY2tvd2R1dHh3MDRncTJ2cXd1dWdscXFxZyJ9.YoptSE4PlTV_8rplhq5rZw'
};


/***/ }),

/***/ "eC1z":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />\n<div id=\"map-mapbox\"></div>");

/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "zP2R");
/* harmony import */ var _nav_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar.component.css */ "yh4/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent.ctorParameters = () => [];
NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-bar',
        template: _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavBarComponent);



/***/ }),

/***/ "j1zz":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table/table.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\n    <tr>\n        <td class=\"theader\">FUNCIONARIO</td>\n        <td class=\"theader\">SALARIO </td>\n        <td class=\"theader\">SALARIO NETO</td>\n        <td class=\"theader\">Holi4 :)</td>\n        <td class=\"theader\">Holi5 :)</td>\n\n    </tr>\n    <tr>\n        <td class=\"campo\">John Smith</td>\n        <td class=\"campo\">$1,000,000.00</td>\n        <td class=\"campo\">Crayoli3 (:</td>\n        <td class=\"campo\">Crayoli4 (:</td>\n        <td class=\"campo\">Crayoli5 (:</td>\n    </tr>\n    <tr>\n        <td class=\"campo\">Una fila</td>\n        <td class=\"campo\">2</td>\n        <td class=\"campo\">3</td>\n        <td class=\"campo\">4</td>\n        <td class=\"campo\">5</td>\n    </tr>\n    <tr>\n        <td class=\"campo\">fila y un poco de magia</td>\n        <td class=\"campo\">2</td>\n        <td class=\"campo\">3</td>\n        <td class=\"campo\">4</td>\n        <td class=\"campo\">5</td>\n    </tr>\n    <tr>\n        <td class=\"campo\">fila con patadita</td>\n        <td class=\"campo\">2</td>\n        <td class=\"campo\">3</td>\n        <td class=\"campo\">4</td>\n        <td class=\"campo\">5</td>\n    </tr>\n    <tr>\n        <td class=\"campo\">fila con uggghhajsfsvjksd</td>\n        <td class=\"campo\">2</td>\n        <td class=\"campo\">3</td>\n        <td class=\"campo\">4</td>\n        <td class=\"campo\">5</td>\n    </tr>\n    <tr>\n        <td class=\"campo\"><img src=\"../../assets/img/SpidermanXD.png\" alt=\"\" style=\"height: 70px;\"></td>\n        <td class=\"campo\">2</td>\n        <td class=\"campo\">3</td>\n        <td class=\"campo\">4</td>\n        <td class=\"campo\">5</td>\n    </tr>\n</table>\n");

/***/ }),

/***/ "jp2v":
/*!************************************************************!*\
  !*** ./src/app/components/salarios/salarios.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.salario{\n  position: relative;\n  top: 600px;\n  width: 200px;\n}\n.relativo{\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyaW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzYWxhcmlvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2FsYXJpb3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDYwMHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG4ucmVsYXRpdm97XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "lUYb":
/*!***************************************************************************!*\
  !*** ./src/app/components/filtros-salatios/filtros-salatios.component.ts ***!
  \***************************************************************************/
/*! exports provided: FiltrosSalatiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosSalatiosComponent", function() { return FiltrosSalatiosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filtros_salatios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filtros-salatios.component.html */ "J+5y");
/* harmony import */ var _filtros_salatios_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtros-salatios.component.css */ "MS77");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FiltrosSalatiosComponent = class FiltrosSalatiosComponent {
    constructor() { }
    ngOnInit() {
    }
};
FiltrosSalatiosComponent.ctorParameters = () => [];
FiltrosSalatiosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filtros-salatios',
        template: _raw_loader_filtros_salatios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filtros_salatios_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FiltrosSalatiosComponent);



/***/ }),

/***/ "sx49":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\n/* You can add global styles to this file, and also import other style files */\n* {\n    margin: 0;\n}\n.body2 {\n    margin: auto;\n    margin-top: 0%;\n    width: 80vw;\n    display: flex;\n    flex-direction: column;\n}\n.header {\n    position: relative;\n}\n.header img {\n    position: absolute;\n    top: 0;\n    object-fit: contain;\n    object-position: center;\n    height: 350px;\n    width: 80vw;\n}\n.espacio{\n    width: 80vw;\n}\n.navbar {\n    background-color: #c52293;\n    height: 60px;\n    display: flex;\n    justify-content: space-between;\n    width: 80vw;\n}\n.logo {\n    background-color: black;\n    width: 15%;\n    display: flex;\n}\n.navbar a {\n    justify-self: center;\n    display: block;\n    width: 80vw;\n}\n.navbar img {\n    height: 80%;\n    margin: 6px auto auto 3vw;\n}\n.navbar p {\n    color: white;\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 700;\n    margin-right: 40%;\n    text-align: center;\n    margin-top: 20px;\n}\ntable {\n    border-collapse: collapse;\n    position: relative;\n    margin: auto;\n    margin-top: 100px;\n    font-family: 'Open Sans', sans-serif;\n}\ntd {\n    border-bottom: 1px solid #dddddd;\n    padding: 20px;\n}\n.theader {\n    background-color: rgb(255, 255, 255);\n    color: rgb(161, 161, 161);\n    font-size: small;\n    font-weight: 600;\n    text-align: center;\n}\n@media (max-width: 1440px) {\n    .body2 {\n        margin-top: 0%;\n        width: 100vw;\n    }\n    .header img {\n        width: 100vw;\n    }\n    .navbar{\n        width: 100%;\n    }\n    .navbar img {\n        height: 70%;\n        margin: .3% auto auto 3vw;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsOEVBQThFO0FBRjlFLDhFQUE4RTtBQUc5RTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7QUFDakI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XG4qIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5ib2R5MiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDgwdnc7XG59XG4uZXNwYWNpb3tcbiAgICB3aWR0aDogODB2dztcbn1cblxuLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1MjI5MztcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDgwdnc7XG59XG5cbi5sb2dvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXZiYXIgYSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDgwdnc7XG59XG5cbi5uYXZiYXIgaW1nIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW46IDZweCBhdXRvIGF1dG8gM3Z3O1xufVxuXG4ubmF2YmFyIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbnRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGNvbG9yOiByZ2IoMTYxLCAxNjEsIDE2MSk7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIC5ib2R5MiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgfVxuICAgIC5oZWFkZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgIH1cbiAgICAubmF2YmFye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLm5hdmJhciBpbWcge1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgbWFyZ2luOiAuMyUgYXV0byBhdXRvIDN2dztcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map/map.component */ "EZtS");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/table/table.component */ "9pw4");
/* harmony import */ var _components_salarios_salarios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/salarios/salarios.component */ "W3ws");






const routes = [
    { path: 'mapComp', component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"] },
    { path: 'table', component: _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"] },
    { path: 'salarios', component: _components_salarios_salarios_component__WEBPACK_IMPORTED_MODULE_5__["SalariosComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yh4/":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n  }\n  \n  li {\n    float: left;\n  }\n  \n  li a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\n  \n  /* Change the link color to #111 (black) on hover */\n  \n  li a:hover {\n    background-color: #111;\n  } \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQSxtREFBbUQ7O0VBQ25EO0lBQ0Usc0JBQXNCO0VBQ3hCIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICAvKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXG4gIGxpIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gIH0gIl19 */");

/***/ }),

/***/ "yqP/":
/*!***********************************************!*\
  !*** ./src/app/services/transformSalarios.ts ***!
  \***********************************************/
/*! exports provided: TransformSalario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformSalario", function() { return TransformSalario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TransformSalario = class TransformSalario {
    constructor() {
        this.registros = [];
    }
    transform(texto) {
        console.log('Datos en array');
        this.registros.push([]);
        texto.forEach((e) => {
            let campos = e.split(',');
            this.registros.push(campos);
        });
        return this.registros;
    }
};
TransformSalario.ctorParameters = () => [];
TransformSalario = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    //const array3 = array1.concat(array2);
], TransformSalario);



/***/ }),

/***/ "yxfS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body2\">\n    <div class=\"header \">\n        <div class=\"fondo\">\n            <img src=\"../../assets/img/fondo_pnt.png\" alt=\"\" style=\"height: 400px; object-fit: cover;\">\n        </div>\n\n        <div class=\"transparencia\">\n            <img src=\"../../assets/img/tranparencia.svg\" alt=\"\">\n        </div>\n        <div class=\"pnt\">\n            <img src=\"../../assets/img/PNT.svg\" alt=\"\" style=\"height: 400px;\">\n        </div>\n        <div class=\"logoheader\">\n            <img src=\"../../assets/img/logoheader.png\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"espacio\" style=\"height: 400px;\"></div>\n    <div class=\"navbar\">\n        <div class=\"logo\">\n            <a href=\"map\"><img src=\"../../assets/img/mapa.png\" alt=\"\"></a>\n        </div>\n        <p>INFORMACIÓN PÚBLICA</p>\n\n</div>");

/***/ }),

/***/ "zP2R":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <ul>\n    <li><a routerLink=\"mapComp\">MAP</a></li>\n    <li><a routerLink=\"table\">Table</a></li>\n    <li><a routerLink=\"salarios\">Salarios</a></li>\n  </ul> ");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.6fa2e708478ded5490d1.js.map