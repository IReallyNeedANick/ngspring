import {Injectable} from '@angular/core';
import {LabDetailsDto} from './LabDetailsDto';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LabDetailsService {

  constructor(private http: HttpClient) { }

  getLabDetails(): Observable<LabDetailsDto[]> {
   return this.http.get('http://localhost:8080/laboratory/');
  }

}
