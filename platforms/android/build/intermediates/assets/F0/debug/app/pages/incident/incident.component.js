"use strict";
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var IncidentComponent = (function () {
    function IncidentComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    IncidentComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    IncidentComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/incident/incident.html",
            styleUrls: ["pages/incident/incident-common.css"]
        }), 
        __metadata('design:paramtypes', [router_extensions_1.RouterExtensions])
    ], IncidentComponent);
    return IncidentComponent;
}());
exports.IncidentComponent = IncidentComponent;
//# sourceMappingURL=incident.component.js.map