import { Injectable } from "@angular/core";
import cameraModule = require("camera");
import imageModule = require("ui/image");
var imagepicker = require("nativescript-imagepicker");
import dialogs = require("ui/dialogs");
import {NavigationService} from "./navigation.service";

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class ImageService {

    constructor(
        private navigationService:NavigationService
    ){}

    public showImageDialog() {
        var options = {
            cancelButtonText : "Annuler",
            actions: [ "Prendre une photo" , "Choisir une image"],
            cancelable: false
        };
        dialogs.action(options)
            .then((result) => {
                if(result === "Annuler" ){
                    return;
                }
                if (result === "Prendre une photo"){
                    this.takePicture();
                }else if(result === "Choisir une image"){
                    this.chooseImage();
                }
                this.navigationService.goToIncident();
            });
    }

    public chooseImage(){
        var context = imagepicker.create({
            mode: "single"
        });

        context
            .authorize()
            .then(function() {
                return context.present();
            })
            .then(function(selection) {
                console.log("Selection done:");
                selection.forEach(function(selected) {
                    console.log(" - " + selected.uri);
                });
            }).catch(function (e) {
            console.log(e);
        });
    }

    public takePicture() {
        cameraModule.takePicture().then(picture => {
            console.log("Result is an image source instance");
            var image = new imageModule.Image();
            image.imageSource = picture;
        });
    }
}
