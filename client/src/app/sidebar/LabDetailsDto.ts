import {LabDetailsStatus} from './lab-details-status';

export class LabDetailsDto {
  id: Number;
  name: String;
  time: Date;
  status: LabDetailsStatus;

  constructor(id: Number, name: String, time: Date, status: LabDetailsStatus) {
    this.id = id;
    this.name = name;
    this.time = time;
    this.status = status;
  }
}

