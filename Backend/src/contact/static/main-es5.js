function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n\n\t<div class=\"row\" >\n    \n\t\t<div id=\"contactlist\" class=\"col-sm-5 left\">\n\t\n      <h1>List of Contacts</h1>\n\n          \n\n           \n\n            <a  href=\"#demo\" class=\"btn btn-info new\" (click)=\"showForm()\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-person-plus\" viewBox=\"0 0 16 16\">\n  <path d=\"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z\"/>\n  <path fill-rule=\"evenodd\" d=\"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z\"/>\n</svg><!-- <i class=\"bi bi-person-plus\"></i> --></a>\n<div>\n           <p class=\"length\">{{contacts.length}} Contacts</p></div>\n           <input [(ngModel)]=\"searchText\" placeholder=\"Search..\" class=\"advancedSearchTextbox\"> \n          <ul>\n            <li class=\"list\" *ngFor=\"let contact of contacts| filter: {Name: searchText, ContactNumber:searchText, EmailAddress:searchText} | paginate : {itemsPerPage: pageSize,currentPage: page}\" >\n\n              <a class=\"colorcontact\"  href=\"#contactdetails\" (click)=\"contactClicked(contact)\" >\n                <img class=\"imagebullet\" width=\"25\" height=\"25\" src=\"https://avatars.dicebear.com/v2/avataaars/{{contact.Name}}.svg?mouth[]=smile\"/>{{contact.Name}}</a>\n\n            </li>\n          </ul>\n\n             <pagination-controls class=\"page\" previousLabel=\"Prev\" nextLabel=\"Next\" responsive=\"true\" \n                (pageChange)=\"handlePageChange($event)\">\n                 </pagination-controls>\n       \n    </div>\n\n  <div id=\"details\" class=\"col-sm-7 right\">\n   \n    <div id=\"demo\"  *ngIf=\"showAddform\">\n        \n\n         <form class=\"form-group\" id=\"addform\"  #newContactForm=\"ngForm\" novalidate>\n                  <h3>Add New Contact</h3> \n          <label class=\"col-sm-2 col-form-label\" > Name:</label> \n          <div  class=\"col-sm-10\">\n            <input  class=\"form-control\" [(ngModel)]=\"newContact.Name\" required name=\"name\" type=\"text\"[class.is-invalid]=\"Name.invalid && Name.touched\"  #Name=\"ngModel\" >\n            <small class=\"text-danger\" [class.d-none]=\"Name.valid || Name.untouched\" >Name is required</small>\n        </div>\n\n          <label class=\"col-sm-2 col-form-label\"> EmailAddress:</label> \n          <div class=\"col-sm-10\">\n            <input required name=\"EmailAddress\" class=\"form-control\"  type=\"email\" [(ngModel)]=\"newContact.EmailAddress\" #EmailAddress=\"ngModel\" [class.is-invalid]=\"EmailAddress.invalid && EmailAddress.touched\" pattern=\"[^@\\s]+@[^@\\s]+\\.[^@\\s]{2,7}\"/>\n            <div *ngIf=\"EmailAddress.errors &&(EmailAddress.valid || EmailAddress.touched)\" >\n              <small class=\"text-danger\"*ngIf=\"EmailAddress.errors.required\" >Email id is required </small>\n              <small *ngIf=\"EmailAddress.errors.pattern\">Email must be in valid format(e.g. johndoe@gmail.com)</small>\n            </div>\n           </div>\n        <label class=\"col-sm-2 col-form-label\"> HomeAddress:</label>\n        <div class=\"col-sm-10\">\n          <input name=\"HomeAddress\" class=\"form-control\" type=\"text\" [(ngModel)]=\"newContact.HomeAddress\"/> \n        </div>\n\n         <label class=\"col-sm-2 col-form-label\" > ContactNumber:</label>\n         <div class=\"col-sm-10\">\n          <input required name=\"ContactNumber\" class=\"form-control\"  type=\"number\"  [(ngModel)]=\"newContact.ContactNumber\" #ContactNumber=\"ngModel\" pattern=\"^\\d{9,15}$\" [class.is-invalid]=\"ContactNumber.invalid && ContactNumber.touched\" >\n            <div *ngIf=\"ContactNumber.errors &&(ContactNumber.valid || ContactNumber.touched)\" >\n              <small class=\"text-danger\" *ngIf=\"ContactNumber.errors.required\">Contact Number is required </small>\n              <small *ngIf=\"ContactNumber.errors.pattern\">Contact Number must be 9-15 digits</small>\n            </div>\n         </div>\n\n         <label class=\"col-sm-2 col-form-label\"> Birthday:</label>\n         <div class=\"col-sm-10\">\n          <input name=\"Birthday\" class=\"form-control\" type=\"date\"  [(ngModel)]=\"newContact.Birthday\"/>\n         </div>\n\n         <label class=\"col-sm-2 col-form-label\"class=\"col-sm-2 col-form-label\">Nickname:</label>\n         <div class=\"col-sm-10\">\n          <input class=\"form-control\" name=\"Nickname\" type=\"text\" [(ngModel)]=\"newContact.Nickname\"/>\n         </div>\n  <div class=\"button\">\n         <p class=\"button\">\n          <button *ngIf=\"newContact.id == -1\" [disabled]=\"newContactForm.form.invalid\"  data-target=\"#demo\" data-toggle=\"collapse\" class=\"btn btn-light btn-outline-primary\" (click)=\"addContact();newContactForm.reset();\" ng-message=\"Added Successfully\"> Add \n          </button>\n        </p>\n      </div>\n           \n        </form>\n\n\n          \n  </div>\n\n      <div class=\"crud\" id=\"contactdetails\"*ngIf=\"!hidedeletedContact\">\n        <div  class=\"details\" *ngIf=\"!isEditEnable && this.selectedContact.id != -1\">\n          <ul class=\"showdetails\">\n            <li class=\"showdetails\">\n                <div class=\"detailsimage\" *ngIf=\"!isEditEnable  && this.selectedContact.id != -1\" >\n                  <img  width=\"200\" height=\"200\" src=\"https://avatars.dicebear.com/v2/avataaars/{{selectedContact.Name}}.svg?mouth[]=smile\">\n                </div>\n            </li>\n\n             <li>\n              <label class=\"detailslabel\" >Name:<p class=\"detailslist\">{{selectedContact.Name}}</p></label>\n             </li>\n\n             <li>\n              <label class=\"detailslabel\"> EmailAddress: <p class=\"detailslist\">{{selectedContact.EmailAddress}}</p> </label>\n             </li>\n\n              <li>\n                <label class=\"detailslabel\"> HomeAddress:<p class=\"detailslist\">{{selectedContact.HomeAddress}}</p></label>\n              </li>\n\n              <li>\n                <label class=\"detailslabel\"> ContactNumber:<p class=\"detailslist\">{{selectedContact.ContactNumber}}</p></label> \n              </li>\n\n              <li>\n                <label class=\"detailslabel\">Birthday:<p class=\"detailslist\">{{selectedContact.Birthday}}</p></label>\n              </li>\n\n              <li>\n                <label class=\"detailslabel\"> Nickname:<p class=\"detailslist\">{{selectedContact.Nickname}}</p></label>\n              </li>\n\n               <button  class=\"btn btn-light btn-outline-primary\"  *ngIf=\"!isEditEnable && this.selectedContact.id != -1\" (click)=\"updateContact()\">\n               <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-pencil-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" d=\"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z\"/>\n              </svg>  </button>   \n               <button *ngIf=\"this.selectedContact.id != -1 && !hidedeletedContact\" class=\"btn btn-light btn-outline-primary\" (click)=\"deleteContact(contact)\">  <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z\"/>\n         </svg>\n         </button>\n          </ul> \n        </div> \n\n      <div class=\"showdetails\"   *ngIf=\"isEditEnable\" >\n\n        <div *ngIf=\"isEditEnable && this.selectedContact.id != -1 \" >\n         \n         <img class=\"detailsimage\" width=\"200\" height=\"200\" src=\"https://avatars.dicebear.com/v2/avataaars/{{selectedContact.Name}}.svg\">\n        </div>\n\n          <label class=\"col-sm-2 col-form-label\" > Name:</label>\n             <input required type=\"text\" class=\"form-control \" [(ngModel)]=\"selectedContact.Name \"#uName=\"ngModel\" [class.is-invalid]=\"uName.invalid && uName.touched\"/>\n              <small class=\"text-danger\" [class.d-none]=\"uName.valid || uName.untouched\" >Name is required</small>\n\n          <label class=\"col-sm-2 col-form-label\" >EmailAddress </label> \n            <input required  type=\"email\"  class=\"form-control \" [(ngModel)]=\"selectedContact.EmailAddress\" #uEmailAddress=\"ngModel\" [class.is-invalid]=\"uEmailAddress.invalid && uEmailAddress.touched\" pattern=\"[^@\\s]+@[^@\\s]+\\.[^@\\s]{2,7}\"/>\n            <div *ngIf=\"uEmailAddress.errors &&(uEmailAddress.valid || uEmailAddress.touched)\" >\n             <small class=\"text-danger\"*ngIf=\"uEmailAddress.errors.required\" >Email id is required </small>\n              <small *ngIf=\"uEmailAddress.errors.pattern\">Email must be in valid format(e.g. johndoe@gmail.com)</small>\n            </div>\n\n          <label class=\"col-sm-2 col-form-label\" > HomeAddress:</label>\n            <input type=\"text\"  class=\"form-control\" [(ngModel)]=\"selectedContact.HomeAddress\"/> \n\n          <label class=\"col-sm-2 col-form-label\" > ContactNumber:</label>\n            <input required type=\"number\"  pattern=\"^\\d{9,15}$\"  class=\"form-control\" [(ngModel)]=\"selectedContact.ContactNumber\"#uContactNumber=\"ngModel\" pattern=\"^\\d{9,15}$\" [class.is-invalid]=\"uContactNumber.invalid && uContactNumber.touched\" >\n            <div *ngIf=\"uContactNumber.errors &&(uContactNumber.valid || uContactNumber.touched)\" >\n             <small class=\"text-danger\" *ngIf=\"uContactNumber.errors.required\">Contact Number is required </small>\n             <small *ngIf=\"uContactNumber.errors.pattern\">Contact Number must be 9-15 digits</small>\n            </div>\n\n           <label class=\"col-sm-2 col-form-label\" >Birthday:</label>\n            <input type=\"date\"   class=\"form-control\" [(ngModel)]=\"selectedContact.Birthday\"/>\n\n            <label class=\"col-sm-2 col-form-label\" >Nickname: </label>\n             <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedContact.Nickname\"/>\n               \n              <div class=\"button\">\n        \n      </div> \n           <button *ngIf=\"selectedContact.id != -1 && isEditEnable \" [disabled]=\"uName.errors?.required||uEmailAddress.errors?.required||uContactNumber.errors?.required||uContactNumber.errors?.pattern||uEmailAddress.errors?.pattern\" class=\"btn btn-light btn-outline-primary\"  (click)=\"updateContact()\"> Update </button>\n             <button *ngIf=\"this.selectedContact.id != -1 && !hidedeletedContact\" class=\"btn btn-light btn-outline-primary\" (click)=\"deleteContact(contact)\">  <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" d=\"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z\"/>\n         </svg>\n         </button>\n\n          \n     </div>\n</div>\n      \n      <a href=\"#contactlist\" class=\"scrollup btn btn-info\"><span class=\"glyphicon glyphicon-circle-arrow-up\"></span></a>  \n\n  </div>\n\n</div>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.baseurl = "/contacts/";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
        this._refreshNeeded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(ApiService, [{
        key: "getAllContacts",
        value: function getAllContacts() {
          return this.http.get(this.baseurl, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "getOneContact",
        value: function getOneContact(id) {
          return this.http.get(this.baseurl + id + '/', {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "updateContact",
        value: function updateContact(contact) {
          var body = {
            Name: contact.Name,
            EmailAddress: contact.EmailAddress,
            ContactNumber: contact.ContactNumber,
            HomeAddress: contact.HomeAddress,
            Birthday: contact.Birthday,
            Nickname: contact.Nickname
          };
          return this.http.put(this.baseurl + contact.id + '/', body, {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "addContact",
        value: function addContact(contact) {
          var _this = this;

          var body = {
            Name: contact.Name,
            EmailAddress: contact.EmailAddress,
            ContactNumber: contact.ContactNumber,
            HomeAddress: contact.HomeAddress,
            Birthday: contact.Birthday,
            Nickname: contact.Nickname
          };
          return this.http.post(this.baseurl, body, {
            headers: this.httpHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this._refreshNeeded$.next();
          }));
        }
      }, {
        key: "deleteContact",
        value: function deleteContact(id) {
          return this.http["delete"](this.baseurl + id + '/', {
            headers: this.httpHeaders
          });
        }
      }, {
        key: "refreshNeeded$",
        get: function get() {
          return this._refreshNeeded$;
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".left{\r\n\tbackground-color: #43a2dc;\r\nmin-height: 100vh;\r\nfloat: left;\r\n\r\n}\r\n.colorcontact{\r\n\tcolor:white;\r\n\ttext-decoration: none;\r\n}\r\n.de{\r\n\ttext-align:  center;\r\n}\r\n.imagebullet{\r\n\tbackground-color: white;\r\n\tborder:2px solid;\r\n\tborder-radius:20px;\r\n\tmargin-right: 8px;\r\n}\r\nh1{\r\n\tcolor: white;\r\n\ttext-align:center;\r\n}\r\nh3{\r\n\tcolor: #43a2dc;\r\n\ttext-align:center;\r\n\tfont-size: 20px;\r\n\tmargin: 0 auto;\r\n}\r\na:hover{\r\n\tbackground-color: white;\r\n\r\n\t\r\n\tbox-sizing: border-box;\r\n\tmargin:0 auto;\r\n\tpadding: 5px;\r\n\tletter-spacing: 1px;\r\n\tborder-radius: 5px;\r\n\tcursor: pointer;\r\n\tcolor: #43a2dc;\r\n\r\n}\r\n.right{\r\n\tfloat: right;\r\n\tmin-height: 100vh;\r\n\t\r\n\r\n\t\tmargin: 0 auto;\r\n}\r\nform{\r\n\t\r\n\tjustify-content: center;\r\n\tmargin-top: 50px;\r\n\t\r\n}\r\n.crud{\r\n\r\n\tmargin-top: 80px;\r\n}\r\n.showdetails{\r\nlist-style-type: none;\r\ndisplay: table;\r\nmargin: auto;\r\n}\r\n.list{\r\n\tlist-style-type: none;\r\npadding: 5px;\r\n\t\r\n}\r\n.page /deep/ .ngx-pagination{\r\n\t\r\n\tcolor: white;\r\nborder-color: white;\r\nfloat: left;\r\n}\r\n.page /deep/ .ngx-pagination .current{\r\n\r\n\tbackground-color: white;\r\n\tcolor:  #43a2dc;\r\n\tborder-radius: 10px;\r\n}\r\n.page /deep/ .ngx-pagination a:hover, .ngx-pagination button:hover{\r\n\tbackground-color: white;\r\n\tcolor:  #43a2dc;\r\n\tborder-radius: 10px ;\r\nborder-color: white;\r\n}\r\np{\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n}\r\n.length{\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tmargin-left:32px;\r\n}\r\n.advancedSearchTextbox{\r\n\tcolor:#43a2dc;\r\nborder: 2px solid  #1a73e8;\r\n\tfont-size: 15px;\r\n\tmargin-bottom:1em;\r\n\tfont-weight: 200;\r\n\tmargin-left:32px;\r\n\twidth:40%;\r\n\r\n}\r\n.advancedSearchTextbox:focus{\r\n\tcolor:#43a2dc;\r\nborder: 2px solid  #1a73e8;\r\n\tfont-size: 15px;\r\n\tmargin-bottom:1em;\r\n\tfont-weight: 200;\r\n\tpadding: 6px;\r\n}\r\n.detailslabel{\r\n\tdisplay: table;\r\n\tcolor:#43a2dc;\r\n}\r\n.detailsimage{\r\n\r\n\tmargin-bottom: 20px;\r\n\t\r\n\tborder-radius: 50%;\r\n\tbackground-color: #43a2dc;\r\n}\r\nimg{\r\n\tborder-radius: 50%;\r\n\r\n}\r\n.detailslist{\r\n\tcolor:#1a73e8;\r\n}\r\n.col-form-label{\r\n\tcolor:#43a2dc;\r\n\t\r\n}\r\n.col-sm-10{\r\n\tpadding-left: 60px;\r\n\r\n}\r\n.form-control {\r\ncolor:#43a2dc;\r\nborder: 2px solid  #1a73e8;\r\n\tfont-size: 15px;\r\n\tmargin-bottom:1em;\r\n\tfont-weight: 600;\r\n}\r\n.scrollup{\r\n\tfloat: right;\r\n\tbottom:1%;\r\n\tright: 1%;\r\n\tposition: absolute;\r\n\tborder-radius: 50%;\r\n}\r\n.scrollup:hover{\r\n\t\r\n\tborder-radius: 50%;\r\n}\r\n.button{\r\n\ttext-align: center;\r\n}\r\n.new{\r\nbackground-color: white;\r\n\r\n\t\r\n\t\r\n\tborder-radius: 50%;\r\n\tfloat: right;\r\n\tcolor: #43a2dc;\r\n}\r\n.new:hover{\r\n\r\nbackground-color: white;\r\n\t\r\n\tborder-radius: 50%;\r\n\twidth:10%;\r\n\r\n\tcursor: pointer;\r\n\tcolor: #43a2dc;\r\n\t\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7QUFDMUIsaUJBQWlCO0FBQ2pCLFdBQVc7O0FBRVg7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7QUFDQTtDQUNDLHVCQUF1Qjs7O0NBR3ZCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGNBQWM7O0FBRWY7QUFFQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7OztFQUdoQixjQUFjO0FBQ2hCO0FBSUE7O0NBRUMsdUJBQXVCO0NBQ3ZCLGdCQUFnQjs7QUFFakI7QUFDQTs7Q0FFQyxnQkFBZ0I7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEIsWUFBWTs7QUFFWjtBQUNBOztDQUVDLFlBQVk7QUFDYixtQkFBbUI7QUFDbkIsV0FBVztBQUNYO0FBR0E7O0NBRUMsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2Ysb0JBQW9CO0FBQ3JCLG1CQUFtQjtBQUNuQjtBQUdBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGFBQWE7QUFDZCwwQkFBMEI7Q0FDekIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLFNBQVM7O0FBRVY7QUFDQTtDQUNDLGFBQWE7QUFDZCwwQkFBMEI7Q0FDekIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtBQUNkO0FBRUE7O0NBRUMsbUJBQW1COztDQUVuQixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxrQkFBa0I7O0FBRW5CO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7O0FBRWQ7QUFDQTtDQUNDLGtCQUFrQjs7QUFFbkI7QUFFQTtBQUNBLGFBQWE7QUFDYiwwQkFBMEI7Q0FDekIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7Q0FDWixTQUFTO0NBQ1QsU0FBUztDQUNULGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0FBQ0EsdUJBQXVCOzs7O0NBSXRCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osY0FBYztBQUNmO0FBRUE7O0FBRUEsdUJBQXVCOztDQUV0QixrQkFBa0I7Q0FDbEIsU0FBUzs7Q0FFVCxlQUFlO0NBQ2YsY0FBYzs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQzYTJkYztcclxubWluLWhlaWdodDogNzAwcHg7XHJcbmZsb2F0OiBsZWZ0O1xyXG5cclxufVxyXG4uY29sb3Jjb250YWN0e1xyXG5cdGNvbG9yOndoaXRlO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZGV7XHJcblx0dGV4dC1hbGlnbjogIGNlbnRlcjtcclxufVxyXG4uaW1hZ2VidWxsZXR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyOjJweCBzb2xpZDtcclxuXHRib3JkZXItcmFkaXVzOjIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbmgxe1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5oM3tcclxuXHRjb2xvcjogIzQzYTJkYztcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuYTpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcblx0XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRtYXJnaW46MCBhdXRvO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICM0M2EyZGM7XHJcblxyXG59XHJcblxyXG4ucmlnaHR7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG5cdFxyXG5cclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbmZvcm17XHJcblx0XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRcclxufVxyXG4uY3J1ZHtcclxuXHJcblx0bWFyZ2luLXRvcDogODBweDtcclxufVxyXG4uc2hvd2RldGFpbHN7XHJcbmxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuZGlzcGxheTogdGFibGU7XHJcbm1hcmdpbjogYXV0bztcclxufVxyXG4ubGlzdHtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbnBhZGRpbmc6IDVweDtcclxuXHRcclxufVxyXG4ucGFnZSAvZGVlcC8gLm5neC1wYWdpbmF0aW9ue1xyXG5cdFxyXG5cdGNvbG9yOiB3aGl0ZTtcclxuYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4ucGFnZSAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50e1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRjb2xvcjogICM0M2EyZGM7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucGFnZSAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIGE6aG92ZXIsIC5uZ3gtcGFnaW5hdGlvbiBidXR0b246aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Y29sb3I6ICAjNDNhMmRjO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHggO1xyXG5ib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxucHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sZW5ndGh7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tbGVmdDozMnB4O1xyXG59XHJcbi5hZHZhbmNlZFNlYXJjaFRleHRib3h7XHJcblx0Y29sb3I6IzQzYTJkYztcclxuYm9yZGVyOiAycHggc29saWQgICMxYTczZTg7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206MWVtO1xyXG5cdGZvbnQtd2VpZ2h0OiAyMDA7XHJcblx0bWFyZ2luLWxlZnQ6MzJweDtcclxuXHR3aWR0aDo0MCU7XHJcblxyXG59XHJcbi5hZHZhbmNlZFNlYXJjaFRleHRib3g6Zm9jdXN7XHJcblx0Y29sb3I6IzQzYTJkYztcclxuYm9yZGVyOiAycHggc29saWQgICMxYTczZTg7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206MWVtO1xyXG5cdGZvbnQtd2VpZ2h0OiAyMDA7XHJcblx0cGFkZGluZzogNnB4O1xyXG59XHJcbi5kZXRhaWxzbGFiZWx7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0Y29sb3I6IzQzYTJkYztcclxufVxyXG5cclxuLmRldGFpbHNpbWFnZXtcclxuXHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQzYTJkYztcclxufVxyXG5pbWd7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxufVxyXG4uZGV0YWlsc2xpc3R7XHJcblx0Y29sb3I6IzFhNzNlODtcclxufVxyXG4uY29sLWZvcm0tbGFiZWx7XHJcblx0Y29sb3I6IzQzYTJkYztcclxuXHRcclxufVxyXG4uY29sLXNtLTEwe1xyXG5cdHBhZGRpbmctbGVmdDogNjBweDtcclxuXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG5jb2xvcjojNDNhMmRjO1xyXG5ib3JkZXI6IDJweCBzb2xpZCAgIzFhNzNlODtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0bWFyZ2luLWJvdHRvbToxZW07XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc2Nyb2xsdXB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGJvdHRvbToxJTtcclxuXHRyaWdodDogMSU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc2Nyb2xsdXA6aG92ZXJ7XHJcblx0XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5idXR0b257XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uZXd7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuXHRcclxuXHRcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGNvbG9yOiAjNDNhMmRjO1xyXG59XHJcblxyXG4ubmV3OmhvdmVye1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHdpZHRoOjEwJTtcclxuXHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGNvbG9yOiAjNDNhMmRjO1xyXG5cdFxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(api) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.api = api;
        this.contacts = [];
        this.page = 1;
        this.pageSize = 33;

        this.getContacts = function () {
          _this2.api.getAllContacts().subscribe(function (data) {
            _this2.contacts = data;
          }, function (error) {
            // console.log(error);
          });
        };

        this.isEditEnable = false; // to show and hide the edit button 

        this.showAddform = false;
        this.hidedeletedContact = false;

        this.contactClicked = function (contact) {
          _this2.api.getOneContact(contact.id).subscribe(function (data) {
            // console.log(data);
            _this2.selectedContact = data;

            if (_this2.isEditEnable === true) {
              _this2.isEditEnable = false;
            }

            if (_this2.hidedeletedContact === true) {
              _this2.hidedeletedContact = false;
            }
          }, function (error) {
            // console.log(error);
          });
        };

        this.updateContact = function () {
          _this2.isEditEnable = !_this2.isEditEnable;

          _this2.api.updateContact(_this2.selectedContact).subscribe(function (data) {
            _this2.getContacts();
          }, function (error) {
            // console.log(error);
          });
        };

        this.addContact = function () {
          _this2.api.addContact(_this2.newContact).subscribe(function (data) {
            _this2.contacts.push(data);

            _this2.getContacts();

            _this2.selectedContact = data;
          }, function (error) {
            // console.log(error);
            
          });
        };

        this.deleteContact = function (contact) {
          _this2.api.deleteContact(_this2.selectedContact.id).subscribe(function (data) {
            _this2.getContacts();

            _this2.hidedeletedContact = !_this2.hidedeletedContact;
          }, function (error) {
            // console.log(error);
          });
        };

        this.selectedContact = {
          id: -1,
          Name: '',
          EmailAddress: '',
          ContactNumber: '',
          HomeAddress: '',
          Birthday: null,
          Nickname: ''
        };
        this.newContact = {
          id: -1,
          Name: '',
          EmailAddress: '',
          ContactNumber: 0,
          HomeAddress: '',
          Birthday: null,
          Nickname: ''
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getContacts();
        }
      }, {
        key: "handlePageChange",
        value: function handlePageChange(event) {
          this.page = event;
          this.getContacts();
        }
      }, {
        key: "handlePageSizeChange",
        value: function handlePageSizeChange(event) {
          this.pageSize = event.target.value;
          this.page = 1;
          this.getContacts();
        }
      }, {
        key: "showForm",
        value: function showForm() {
          this.showAddform = !this.showAddform;
          this.newContact = {
            id: -1,
            Name: '',
            EmailAddress: '',
            ContactNumber: 0,
            HomeAddress: '',
            Birthday: null,
            Nickname: ''
          };
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./filter.pipe */
    "./src/app/filter.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/filter.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/filter.pipe.ts ***!
    \********************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, filter, defaultFilter) {
          if (!filter) {
            return items;
          }

          if (!Array.isArray(items)) {
            return items;
          }

          if (filter && Array.isArray(items)) {
            var filterKeys = Object.keys(filter);

            if (defaultFilter) {
              return items.filter(function (item) {
                return filterKeys.reduce(function (x, keyName) {
                  return x && new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                }, true);
              });
            } else {
              return items.filter(function (item) {
                return filterKeys.some(function (keyName) {
                  return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                });
              });
            }
          }
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\ContactManagement\public\frontend\frontcontact\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map