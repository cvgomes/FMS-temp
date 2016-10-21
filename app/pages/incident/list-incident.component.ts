import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {NavigationService} from "../../services/navigation.service";

@Component({
    templateUrl: "pages/incident/list-incident.html",
    styleUrls: ["pages/incident/incident-common.css", "pages/incident/list-incident.css"]
})

export class ListIncidentComponent {
    constructor(
        private router: Router,
        private navigationService: NavigationService
    ){
    }
    goToIncident(){
        this.navigationService.goToIncident();
    }
}
