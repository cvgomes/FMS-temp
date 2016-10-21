"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var navigation_service_1 = require("../../services/navigation.service");
var cameraModule = require("camera");
var imageModule = require("ui/image");
var page_1 = require("ui/page");
var HomeComponent = (function () {
    function HomeComponent(router, navigationService, page) {
        this.router = router;
        this.navigationService = navigationService;
        this.page = page;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    HomeComponent.prototype.takePicture = function (args) {
        cameraModule.takePicture().then(function (picture) {
            console.log("Result is an image source instance");
            var image = new imageModule.Image();
            image.imageSource = picture;
        });
        this.navigationService.goToIncident();
    };
    HomeComponent.prototype.goToListIncident = function () {
        this.router.navigate(["/listIncident"]);
    };
    HomeComponent.prototype.goToTerms = function () {
        this.router.navigate(["/useTerms"]);
    };
    HomeComponent.prototype.goToLogin = function () {
        this.router.navigate(["/login"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/home/home.html",
            styleUrls: ["pages/home/home.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, navigation_service_1.NavigationService, page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map