import {Component, Input, OnInit} from '@angular/core';
import {LabDetailsDto} from '../sidebar/LabDetailsDto';

@Component({
  selector: 'app-content',
  template: '<div>{{labDetail?.name}}</div>',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() labDetail: LabDetailsDto;

  constructor() {
  }

  ngOnInit() {
  }
}
