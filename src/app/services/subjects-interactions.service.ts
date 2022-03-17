import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class SubjectsInteractionsService {
  public passNumber: Subject<number> = new Subject<number>();
  public gameOver: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }
}
