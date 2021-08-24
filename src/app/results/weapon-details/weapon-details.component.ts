import {Component, OnInit} from '@angular/core';
import {Weapon} from "../Weapon";
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../../../search/search.service";

@Component({
    selector: 'app-weapon-details',
    templateUrl: 'weapon-details.component.html',
    styles: []
})
export class WeaponDetailsComponent implements OnInit {

    allWeapons: Weapon[] = []
    weapon: Weapon | undefined;

    constructor(private route: ActivatedRoute, private searchService: SearchService) {
    }

    setWeapon() {
        // First get the weapon id from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('id'));
        // Find the weapon that correspond with the id provided in route.
        this.weapon = this.allWeapons.find(weapon => weapon.id === productIdFromRoute)
    }

    ngOnInit(): void {
        // Load all the weapons from the service.
        this.searchService.findAll().subscribe(data => {
            this.allWeapons = data
            this.setWeapon()
        })

    }

    generateHeaders(weapon: Weapon) {
        return Object.keys(weapon).map((key)=>{
            // return each field of the Weapon type
            return key
        })
    }

    generateData(weapon: Weapon) {
        return Object.values(weapon).map((value) => {
            // return each field of the Weapon type
            if (value === -1 || value == null || value == "") {
                return "N/A"
            }
            return value
        })
    }
}
