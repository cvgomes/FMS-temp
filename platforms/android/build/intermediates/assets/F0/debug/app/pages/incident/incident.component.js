"use strict";
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var image_service_1 = require("../../services/image.service");
var IncidentComponent = (function () {
    function IncidentComponent(routerExtensions, page, router, imageService) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.router = router;
        this.imageService = imageService;
    }
    IncidentComponent.prototype.ngOnInit = function () {
        this.page.actionBar.navigationButton.icon = "res://ico_arrow_back";
    };
    IncidentComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    IncidentComponent.prototype.incidentDialog = function () {
        this.imageService.showImageDialog();
    };
    IncidentComponent.prototype.goToCategories = function () {
        this.router.navigate(["/categories"]);
    };
    IncidentComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/incident/incident.html",
            styleUrls: ["pages/incident/incident-common.css"]
        }), 
        __metadata('design:paramtypes', [router_extensions_1.RouterExtensions, page_1.Page, router_1.Router, image_service_1.ImageService])
    ], IncidentComponent);
    return IncidentComponent;
}());
exports.IncidentComponent = IncidentComponent;
//# sourceMappingURL=incident.component.js.map