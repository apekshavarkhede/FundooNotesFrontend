import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private change = new BehaviorSubject({ data: '', type: '' });
  // newChange = this.change.asObservable();

  private messageSource = new BehaviorSubject(false);

  open = this.messageSource.asObservable();
 
  constructor() { }

  changeInValue(value: boolean) {
    this.messageSource.next(value)
  }
}
