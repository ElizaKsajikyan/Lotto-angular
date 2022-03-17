import {Component, OnInit} from '@angular/core';
import {SubjectsInteractionsService} from './services/subjects-interactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lotto';
  public cardCountPrUser: any = [1, 2, 3];
  private numbersArray: Array<number> = [];
  public removedNumbersArray: Array<number> = [];
  public disableBtn = false;
  public gameOver = false;

  constructor(private subject: SubjectsInteractionsService) {
    for (let i = 1; i < 90; i++) {
      this.numbersArray.push(i);
    }
  }

  ngOnInit(): void {
    this.subject.gameOver.subscribe(e => {
      this.gameOver = e
      console.log(e);
    });
  }

  public lotto(): void {
    const numb: number = Math.round(Math.random() * this.numbersArray.length);
    // this.disableBtn = true;
    if (this.numbersArray.length && this.numbersArray[numb] !== undefined) {
      this.subject.passNumber.next(this.numbersArray[numb]);
      this.removedNumbersArray.push(this.numbersArray[numb]);
      this.numbersArray.splice(numb, 1);
    }
    setTimeout(() => {
      // this.disableBtn = false;
    }, 500);
  }
}
