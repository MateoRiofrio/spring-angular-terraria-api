import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Terraria API';
  weapon = {}
  constructor(private http: HttpClient) {
    http.get('api/weapons/copper_shortsword').subscribe(data => this.weapon = data)
  }

}
