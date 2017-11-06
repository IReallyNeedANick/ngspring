import {Component, Input, OnInit} from '@angular/core';
import {LabDetailsDto} from '../sidebar/LabDetailsDto';
import {LabDetailsStatus} from '../sidebar/lab-details-status';

@Component({
  selector: 'app-content',
  template: '<div>{{labDetail.name}}</div>',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private _labDetail: LabDetailsDto;
  @Input() name: String;
  show = true;

  constructor() {
    this.name = 'bla';
    this._labDetail = new LabDetailsDto(12, 'asd', new Date, LabDetailsStatus.IN_PROGRESS);
  }

  ngOnInit() {
  }


  get labDetail(): LabDetailsDto {
    return this._labDetail;
  }

  set labDetail(value: LabDetailsDto) {
    this.name = 'novi bla';
    console.log(this.name);
    this._labDetail = value;
  }

  setCurrentSelectedLab(labDetail: LabDetailsDto) {
    console.log('setting current lab' + labDetail.name)
    console.log('setting current lab' + this.name)
    this.show = true;
    // this.labDetail = labDetail;
    this._labDetail.name = 'new name';

  }
}
