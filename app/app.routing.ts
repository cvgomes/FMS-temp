import {HomeComponent} from "./pages/home/home.component";
import {ListIncidentComponent} from "./pages/incident/list-incident.component";
import {IncidentComponent} from "./pages/incident/incident.component";
import {UseTermsComponent} from "./pages/useTerms/use-terms.component";
import {LoginComponent} from "./pages/login/login.component";
import {CategoriesComponent} from "./pages/categories/categories.component";

export const routes = [
    { path: "", component: HomeComponent },
    { path: "listIncident", component: ListIncidentComponent },
    { path: "incident", component: IncidentComponent },
    { path: "useTerms", component: UseTermsComponent },
    { path: "login", component: LoginComponent },
    { path: "categories", component: CategoriesComponent },

];

export const navigatableComponents = [
    HomeComponent,
    ListIncidentComponent,
    IncidentComponent,
    UseTermsComponent,
    LoginComponent,
    CategoriesComponent
];
