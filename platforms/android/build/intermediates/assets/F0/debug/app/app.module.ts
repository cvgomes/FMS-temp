import {AppComponent} from "./app.component";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NgModule} from "@angular/core";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {routes, navigatableComponents} from "./app.routing";
import {NavigationService} from "./services/navigation.service";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers:[
        NavigationService
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
