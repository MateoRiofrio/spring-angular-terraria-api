import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Item} from "../../model/items/Item";

@Component({
    selector: 'app-widget-search-bar',
    templateUrl: 'widget-search-bar.component.html',
    styles: []
})
export class WidgetSearchBarComponent {

    onSubmit(f: NgForm) {
        console.log("onSubmit from search bar")
    }

}
