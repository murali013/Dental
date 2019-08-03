(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <img src=\"../assets/images/logo.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home-container\">\n    <ion-card class=\"welcome-card\">\n      <!-- <ion-img src=\"/assets/shapes.svg\"></ion-img> -->\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide>\n          <ion-img src=\"./assets/images/dental_merger_fb_post_1060x.jpg\"></ion-img>          \n        </ion-slide>\n        <ion-slide>\n          <ion-img src=\"./assets/images/laser_RnD_1060x.jpg\"></ion-img>          \n        </ion-slide>\n        <ion-slide>\n          <ion-img src=\"./assets/images/PDispenser_RnD_1060x.jpg\"></ion-img>          \n        </ion-slide>\n      </ion-slides>\n      <ion-card-header>\n        <!-- <ion-card-subtitle>Rental Dental feels proud to join hands with Outchem.com</ion-card-subtitle> -->\n        <ion-card-title>Welcome to <span class=\"title\">LAMECH</span></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Lease a dental product by ordering online and leave us the rest</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-grid>\n\n      <ion-row align-items-center  class=\"product\">\n        <ion-col><h2><u>CHENNAI</u></h2></ion-col>\n      </ion-row>\n\n      <ion-row align-items-center class=\"product\">\n        <ion-col>\n          <div>Equipments available in Chennai</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row align-items-center *ngFor=\"let item of equipments;let i = index;\" class=\"product\">\n        <ion-col>\n          <div class=\"prd-container\">\n            <ion-img src={{item.img}}></ion-img>  \n            <p class=\"prd-name\">{{item.name}}</p>\n            <p>             \n              <span class=\"price\">{{item.price}}</span>\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.title, div {\n  color: #372677; }\n\n.home-container .prd-container {\n  color: #372677;\n  padding: 10px; }\n\n.home-container .prd-container ion-img {\n    border: 1px solid #372677; }\n\n.home-container .prd-container p {\n    font-weight: 500; }\n\n.home-container .product {\n  text-align: center; }\n\n.home-container .product .price {\n    color: #3cdb12;\n    text-decoration: underline; }\n\n.home-container .product .prd-name {\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcRGVudGFsL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBRUksY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFIakI7SUFLTSx5QkFBeUIsRUFBQTs7QUFML0I7SUFRTSxnQkFBZ0IsRUFBQTs7QUFSdEI7RUFhSSxrQkFBa0IsRUFBQTs7QUFidEI7SUFlUSxjQUFjO0lBQ2QsMEJBQTBCLEVBQUE7O0FBaEJsQztJQW9CUSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGUsIGRpdiB7XG4gIGNvbG9yOiAjMzcyNjc3O1xufVxuXG4uaG9tZS1jb250YWluZXIgeyAgXG4gIC5wcmQtY29udGFpbmVyIHsgXG4gICAgY29sb3I6ICMzNzI2Nzc7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBpb24taW1nIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNzI2Nzc7XG4gICAgfSAgIFxuICAgIHAge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9IFxuICB9XG5cbiAgLnByb2R1Y3Qge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAucHJpY2Uge1xuICAgICAgICBjb2xvcjogIzNjZGIxMjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgLnByZC1uYW1lIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
        this.slideOpts = {
            autoplay: true,
            loop: true,
            delay: 1000,
            speed: 300
        };
        this.equipments = [
            {
                "name": "Autoclaves",
                "price": "Rs. 1,800.00",
                "img": "./assets/images/equipments/Autoclaves.jpg"
            },
            {
                "name": "Compressor",
                "price": "Rs. 3,500.00",
                "img": "./assets/images/equipments/Compressor.jpg"
            },
            {
                "name": "Fumigation",
                "price": "Rs. 2,000.00",
                "img": "./assets/images/equipments/Fumigation.jpg"
            },
            {
                "name": "Medical furniture",
                "price": "Rs. 2,500.00",
                "img": "./assets/images/equipments/medical-furniture.jpg"
            },
            {
                "name": "Suction",
                "price": "Rs. 4,000.00",
                "img": "./assets/images/equipments/Suction.jpg"
            },
            {
                "name": "Surgical Chairs",
                "price": "Rs. 7,500.00",
                "img": "./assets/images/equipments/Surgical-Chairs.jpg"
            },
            {
                "name": "Surgical Lights",
                "price": "Rs. 7,500.00",
                "img": "./assets/images/equipments/surgical-lights.jpg"
            },
            {
                "name": "X-Ray",
                "price": "Rs. 7,500.00",
                "img": "./assets/images/equipments/xray.jpg"
            }
        ];
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map