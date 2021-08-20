import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Weapon} from "../../model/items/Weapon";
import {SearchService} from "../search.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-widget-search-bar',
    templateUrl: 'widget-search-bar.component.html',
    styles: []
})
export class WidgetSearchBarComponent implements OnInit {

    search_results$: Observable<Weapon[]>;
    // inject http search service
    constructor(private router: Router, private searchService: SearchService) {
        this.search_results$ = this.searchService.findAll();
    }

    findAll() {

    }
    onSubmit(f: NgForm) {
        console.log("onSubmit from search bar")
    }
    ngOnInit() {
        this.router.events.subscribe(value => this.findAll())
    }

}
