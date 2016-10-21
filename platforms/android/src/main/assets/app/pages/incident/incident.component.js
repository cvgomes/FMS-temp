"use strict";
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var page_1 = require("ui/page");
var IncidentComponent = (function () {
    function IncidentComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
    }
    IncidentComponent.prototype.ngOnInit = function () {
    };
    IncidentComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    IncidentComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/incident/incident.html",
            styleUrls: ["pages/incident/incident-common.css"]
        }), 
        __metadata('design:paramtypes', [router_extensions_1.RouterExtensions, page_1.Page])
    ], IncidentComponent);
    return IncidentComponent;
}());
exports.IncidentComponent = IncidentComponent;
//# sourceMappingURL=incident.component.js.map