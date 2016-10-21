import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router/router-extensions";
import {Page} from "ui/page"


@Component({
    templateUrl: "pages/incident/incident.html",
    styleUrls: ["pages/incident/incident-common.css"]
})
export class IncidentComponent implements OnInit {

    ngOnInit(): void {

    }

    constructor(
        private routerExtensions: RouterExtensions,
        private page:Page
    ){}

    goBack(){
        this.routerExtensions.back();
    }
}