import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router/router-extensions";
import { Page } from "ui/page";
import {Router} from "@angular/router";


@Component({
    templateUrl: "pages/categories/categories.html",
    styleUrls: ["pages/categories/categories.css"]
})
export class CategoriesComponent implements OnInit {

    myItems: string [] = ["trotoire","bananier", "tobogan","piscinne","trotoire","bananier", "tobogan","piscinne",
        "trotoire","bananier", "tobogan","piscinne","trotoire","bananier", "tobogan","piscinne","trotoire",
        "bananier", "tobogan","piscinne","trotoire","bananier", "tobogan","piscinne",
        "trotoire","bananier", "tobogan","piscinne","trotoire","bananier", "tobogan","piscinne"
    ];

    ngOnInit(): void {
        this.page.actionBar.navigationButton.icon = "res://ico_arrow_back";
    }

    constructor(
        private routerExtensions: RouterExtensions,
        private page:Page,
        private router:Router
    ){}

    goBack(){
        this.routerExtensions.back();
    }

    close(){
        this.router.navigate(["/incident"]);
    }
}