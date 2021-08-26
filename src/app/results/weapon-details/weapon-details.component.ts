import {Component, Input, OnInit} from '@angular/core';
import {Weapon} from "../../model/items/weapon/Weapon";

@Component({
    selector: 'app-weapon-details',
    templateUrl: 'weapon-details.component.html',
    styles: []
})
export class WeaponDetailsComponent implements OnInit {

    @Input() weapon: Weapon | undefined;

    constructor() {
    }

    generateHeaders(weapon: Weapon) {
        return Object.keys(weapon).map((key)=>{
            // return each field of the Weapon type.
            return key
        })
    }

    generateData(weapon: Weapon) {
        return Object.values(weapon).map((value) => {
            // return each field of the Weapon type and set N/A to any blank field.
            if (value === -1 || value == null || value == "") {
                return "N/A"
            }
            return value
        })
    }

    ngOnInit(): void {
    }


}
