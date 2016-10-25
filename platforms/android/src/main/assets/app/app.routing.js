"use strict";
var home_component_1 = require("./pages/home/home.component");
var list_incident_component_1 = require("./pages/incident/list-incident.component");
var incident_component_1 = require("./pages/incident/incident.component");
var use_terms_component_1 = require("./pages/useTerms/use-terms.component");
var login_component_1 = require("./pages/login/login.component");
var categories_component_1 = require("./pages/categories/categories.component");
exports.routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "listIncident", component: list_incident_component_1.ListIncidentComponent },
    { path: "incident", component: incident_component_1.IncidentComponent },
    { path: "useTerms", component: use_terms_component_1.UseTermsComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "categories", component: categories_component_1.CategoriesComponent },
];
exports.navigatableComponents = [
    home_component_1.HomeComponent,
    list_incident_component_1.ListIncidentComponent,
    incident_component_1.IncidentComponent,
    use_terms_component_1.UseTermsComponent,
    login_component_1.LoginComponent,
    categories_component_1.CategoriesComponent
];
//# sourceMappingURL=app.routing.js.map