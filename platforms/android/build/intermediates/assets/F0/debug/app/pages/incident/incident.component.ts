import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router/router-extensions";
import { Page } from "ui/page";
import {Router} from "@angular/router";
import {ImageService} from "../../services/image.service";


@Component({
    templateUrl: "pages/incident/incident.html",
    styleUrls: ["pages/incident/incident-common.css"]
})
export class IncidentComponent implements OnInit {

    ngOnInit(): void {
        this.page.actionBar.navigationButton.icon = "res://ico_arrow_back";
    }

    constructor(
        private routerExtensions: RouterExtensions,
        private page:Page,
        private router: Router,
        private imageService : ImageService
    ){}

    private goBack(){
        this.routerExtensions.back();
    }

    private incidentDialog(){
        this.imageService.showImageDialog();
    }

    private goToCategories(){
        this.router.navigate(["/categories"]);
    }
}