import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import {ImageService} from "../../services/image.service";

@Component({
    selector: "my-app",
    templateUrl: "pages/home/home.html",
    styleUrls: ["pages/home/home.css"]

})
export class HomeComponent implements OnInit{

    constructor(
        private router: Router,
        private imageService : ImageService,
        private page : Page
    ){}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://background_home";
    }

    public showDialog() {
        this.imageService.showImageDialog();
    }
    public goToListIncident() {
        this.router.navigate(["/listIncident"]);
    }
    public goToTerms() {
        this.router.navigate(["/useTerms"]);
    }
    public goToLogin() {
        this.router.navigate(["/login"]);
    }
}