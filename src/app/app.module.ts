import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WidgetSearchBarComponent} from './search/widget-search-bar/widget-search-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from "./search/search.service";
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { WeaponDetailsComponent } from './model/items/weapon/weapon-details/weapon-details.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        AppComponent,
        WidgetSearchBarComponent,
        WeaponDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        MatListModule,
        RouterModule.forRoot([
            { path: 'weapons/:id', component: WeaponDetailsComponent },
        ])
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
