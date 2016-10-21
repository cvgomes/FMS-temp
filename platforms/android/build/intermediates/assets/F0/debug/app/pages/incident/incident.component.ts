import { Component } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router/router-extensions";


@Component({
    templateUrl: "pages/incident/incident.html",
    styleUrls: ["pages/incident/incident-common.css"]
})
export class IncidentComponent {

    constructor(
        private routerExtensions: RouterExtensions
    ){}

    goBack(){
        this.routerExtensions.back();
    }
}