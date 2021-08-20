import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
      <h1> {{title}} </h1>
      <app-widget-search-bar></app-widget-search-bar>
      <p>{{weapon}}</p>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Terraria API';
  weapon = {}
  constructor(private http: HttpClient) {
    http.get('api/weapons/copper_shortsword').subscribe(data => this.weapon = data)
  }

}
