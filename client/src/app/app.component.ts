import {Component} from '@angular/core';
import {LabDetailsDto} from './sidebar/LabDetailsDto';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  template: `
    <app-sidebar (pickedDetail)="onDetailPicked($event)"></app-sidebar>
    <app-content [labDetail]="selectedLabDetail"></app-content>`,
  styleUrls: ['./app.component.css']
})
// <!--[labDetail]="selectedLabDetail"-->
export class AppComponent {
  selectedLabDetail: LabDetailsDto;

  onDetailPicked(pickedDetail: LabDetailsDto) {
    console.log('HURRRAAAA');
    console.log('START');
    // this.selectedLabDetail = pickedDetail;
  }
}
