"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var image_service_1 = require("../../services/image.service");
var HomeComponent = (function () {
    function HomeComponent(router, imageService, page) {
        this.router = router;
        this.imageService = imageService;
        this.page = page;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://background_home";
    };
    HomeComponent.prototype.showDialog = function () {
        this.imageService.showImageDialog();
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
        __metadata('design:paramtypes', [router_1.Router, image_service_1.ImageService, page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map