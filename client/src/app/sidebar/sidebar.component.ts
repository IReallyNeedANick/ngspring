import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LabDetailsService} from './lab-details.service';
import {LabDetailsDto} from './LabDetailsDto';
import {LabDetailsStatus} from './lab-details-status';

@Component({
  selector: 'app-sidebar',
  template: `
    <div (click)="selectDetail(labDetail)" class="detail" *ngFor="let labDetail of labDetails">
      <p class="TextHeading3">{{ labDetail.name + ' - ' + labDetail.id}}</p>
      <p class="TextData">{{labDetail.time }}</p>
    </div>
  `,
  styleUrls: ['./sidebar.component.css']
})/* | date:  "dd.MM.y HH:mm" */
export class SidebarComponent implements OnInit {

  labDetails: LabDetailsDto[] = [];
  @Output('pickedDetail') pickedDetail = new EventEmitter();

  constructor(private labDetailsService: LabDetailsService) {
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

  selectDetail(labDetail: LabDetailsDto) {
    this.pickedDetail.emit(labDetail);
  }
}
