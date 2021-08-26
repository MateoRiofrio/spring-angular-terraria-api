import { Component, OnInit } from '@angular/core';
import {Weapon} from "../../model/items/weapon/Weapon";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  chosenWeapon: Weapon | undefined
  constructor() { }

  setChosenWeapon(weapon: Weapon) {
    this.chosenWeapon = weapon
  }

  ngOnInit(): void {
  }

}
