import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultItemComponent } from './search/search-result-item/search-result-item.component';
import { WidgetSearchBarComponent } from './search/widget-search-bar/widget-search-bar.component';
import { SearchResultListComponent } from './search/search-result-list/search-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultItemComponent,
    WidgetSearchBarComponent,
    SearchResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
