import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {NavigationService} from "../../services/navigation.service";
import cameraModule = require("camera");
import imageModule = require("ui/image");
import { Page } from "ui/page";

@Component({
    selector: "my-app",
    templateUrl: "pages/home/home.html",
    styleUrls: ["pages/home/home.css"]

})
export class HomeComponent implements OnInit{

    constructor(
        private router: Router,
        private navigationService: NavigationService,
        private page : Page
    ){}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    public takePicture(args) {
        cameraModule.takePicture().then(picture => {
            console.log("Result is an image source instance");
            var image = new imageModule.Image();
            image.imageSource = picture;
        });
        this.navigationService.goToIncident();
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