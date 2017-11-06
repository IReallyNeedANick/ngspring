import {Component, OnInit} from '@angular/core';
import {LabDetailsService} from './lab-details.service';
import {LabDetailsDto} from './LabDetailsDto';
import {LabDetailsStatus} from './lab-details-status';
import {ContentComponent} from '../content/content.component';

@Component({
  selector: 'app-sidebar',
  template: `
    <div (click)="openDetails(labDetail)" class="detail" *ngFor="let labDetail of labDetails">
      <p class="TextHeading3">{{ labDetail.name + ' - ' + labDetail.id}}</p>
      <p class="TextData">{{labDetail.time | date:  "dd.MM.y HH:mm" }}</p>
    </div>`,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  labDetails: LabDetailsDto[] = [];

  constructor(private labDetailsService: LabDetailsService, private content: ContentComponent) {
  }

  ngOnInit() {
    this.labDetailsService
      .getLabDetails()
      .forEach(
        value => this.labDetails = value.map((labDetails: LabDetailsDto) =>
          new LabDetailsDto(
            +labDetails['id'],
            labDetails['name'],
            new Date(labDetails['time']),
            LabDetailsStatus['' + labDetails['status']])
        )
      );
  }

  openDetails(labDetail: LabDetailsDto) {
    this.content.labDetail = labDetail;
  }
}
