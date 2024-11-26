import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { LoginnavComponent } from "./loginnav/loginnav.component";


@NgModule({
    declarations:[AppComponent,LoginnavComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})

export class AppModule{

}