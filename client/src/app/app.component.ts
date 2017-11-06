import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sidebar></app-sidebar>
    <app-content></app-content>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
