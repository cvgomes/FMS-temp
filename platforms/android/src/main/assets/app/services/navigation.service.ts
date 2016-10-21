import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class NavigationService {
    constructor(private router: Router){
    }
    goToIncident(){
        this.router.navigate(["/incident"]);
    }
}
