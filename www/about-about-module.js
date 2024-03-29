(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");







var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <img src=\"../assets/images/logo.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n      <ion-img src=\"./assets/images/about.jpg\"></ion-img>\n      \n      <ion-card-header>\n        <ion-card-subtitle>\n          <span>Welcome to the new league of dentistry with the concept of <b>RENTAL DENTAL.</b></span><br>\n        </ion-card-subtitle>\n        <!-- <ion-card-title>CONTACT US</ion-card-title> -->\n      </ion-card-header>\n      <ion-card-content>\n        <span>We provide an excellent platform to rent out equipments and instruments for dental procedures</span><br>\n        <span>Our objective is to make you a \"Smart & Effective \". SAVE your HARD EARNED money by renting out expensive \"Dental Equipments.</span>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list detail>\n      <ion-list-header>\n        <ion-label><b>FEATURES</b></ion-label>\n      </ion-list-header>\n      <ion-item >\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label text-wrap>Total solution for Technical support in Dentistry.</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label text-wrap>Time bound delivery of neccesary Equipments and Kits.</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label text-wrap>Instant avaibility of support due to amazing network.</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label text-wrap>A concept by dentist for dentist.</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label>Our testimonials.</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list detail>\n      <ion-list-header>\n        <ion-label><b>WHY WE</b></ion-label>\n      </ion-list-header>\n      <ion-item >\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label text-wrap>No hassle of machine EMI's.</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label text-wrap>No hassle of machine maintenance.</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label text-wrap>No need to buy expensive kits for bone manipulations, Ridge split, Ridge expansion, Indirect sinus lift, Bone grafting if not needed regularly</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label text-wrap>No tension of breakdown of machine Just focus on implant placement and it's restoration...</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n        <ion-label text-wrap>Get benefit of hight end equiments like physiodispenser,lasers and piezoelectric and upgrade your practice.</ion-label>\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map