"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var navigation_service_1 = require("../../services/navigation.service");
var ListIncidentComponent = (function () {
    function ListIncidentComponent(router, navigationService) {
        this.router = router;
        this.navigationService = navigationService;
    }
    ListIncidentComponent.prototype.goToIncident = function () {
        this.navigationService.goToIncident();
    };
    ListIncidentComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/incident/list-incident.html",
            styleUrls: ["pages/incident/incident-common.css", "pages/incident/list-incident.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, navigation_service_1.NavigationService])
    ], ListIncidentComponent);
    return ListIncidentComponent;
}());
exports.ListIncidentComponent = ListIncidentComponent;
//# sourceMappingURL=list-incident.component.js.map