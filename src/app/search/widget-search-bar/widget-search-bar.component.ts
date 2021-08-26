import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Weapon} from "../../model/items/weapon/Weapon";
import {SearchService} from "../search.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-widget-search-bar',
    templateUrl: 'widget-search-bar.component.html',
    styleUrls: ['widget-search-bar.component.css']
})
export class WidgetSearchBarComponent implements OnInit{

    searchResults: Weapon[] = []
    showList: boolean = false
    @Output() chosenWeapon = new EventEmitter<Weapon>()

    // inject http search service
    constructor(private router: Router, private searchService: SearchService) {
    }

    showStartsWithResults(event: any) {
        this.showList = true
        // show the list make a LIKE query on every current input in text field
        this.searchService.findStartsWith(event.target.value).subscribe(data => this.searchResults = data)
    }
    parseName(name: string) {
        // use regular expression with /g flag to replace all instances of character '_'
        // source: https://stackoverflow.com/questions/2116558/fastest-method-to-replace-all-instances-of-a-character-in-a-string/2116614
        return name.replace(/_/g, " ")
    }

    setWeaponById(id: number) {
        this.showList = false
        let weapon = this.searchResults.find(weapon => weapon.id === id)
        this.chosenWeapon.emit(weapon)
    }

    ngOnInit() {
        // show all weapons by default
        this.searchService.findAll().subscribe(data => {
            this.searchResults = data
        })
    }

}
