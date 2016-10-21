"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var NavigationService = (function () {
    function NavigationService(router) {
        this.router = router;
    }
    NavigationService.prototype.goToIncident = function () {
        this.router.navigate(["/incident"]);
    };
    NavigationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=navigation.service.js.map