import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WidgetSearchBarComponent} from './search/widget-search-bar/widget-search-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from "./search/search.service";
import {CommonModule} from '@angular/common';
import {WeaponDetailsComponent} from './results/weapon-details/weapon-details.component';
import {HomeComponent} from './core/home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        WidgetSearchBarComponent,
        WeaponDetailsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
