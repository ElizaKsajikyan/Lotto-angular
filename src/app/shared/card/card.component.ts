import {Component, Input, OnInit} from '@angular/core';
import {SubjectsInteractionsService} from '../../services/subjects-interactions.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public card: Array<any> = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
  ];
  public cardItemsCount: number = 0;

  @Input() cardNumber: number = 0;

  constructor(public subject: SubjectsInteractionsService) {
  }

  ngOnInit(): void {
    this.lottoCard();
    this.subject.passNumber.subscribe(e => {
      this.checkNumbers(e);
    });
  }

  private checkNumbers(numb: number): any {
    let emptyCount = 0;
    for (const cardRow of this.card) {
      if (cardRow.indexOf(numb) !== -1) {
        cardRow.splice(cardRow.indexOf(numb), 1, 'empty');
      }
      for (const cardItem of cardRow) {
        if (cardItem === ('empty') && emptyCount < 5) {
          emptyCount++;
        } else if (emptyCount === 5) {
          alert('winn card number is ' + this.cardNumber + ' ' + cardRow);
          this.subject.gameOver.next(true);
        }
      }
      emptyCount = 0;
    }
  }

  private lottoCard(): any {
    const generalNumbers: Array<number> = [];
    for (let i = 1; i < 90; i++) {
      generalNumbers.push(i);
    }
    for (const cardRow of this.card) {
      for (let i = 0; this.cardItemsCount < 5; i++) {
        let number = Math.round(Math.random() * generalNumbers.length) + 1;
        if (generalNumbers[number] <= 9 && cardRow[0] === null) {
          cardRow[0] = generalNumbers[number];
          this.cardItemsCount++;
        } else if (generalNumbers[number] > 9 && generalNumbers[number] <= 19 && cardRow[1] === null) {
          cardRow[1] = generalNumbers[number];
          this.cardItemsCount++;
        } else if (generalNumbers[number] > 19 && generalNumbers[number] <= 29 && cardRow[2] === null) {
          cardRow[2] = generalNumbers[number];
          this.cardItemsCount++;
        } else if (generalNumbers[number] > 29 && generalNumbers[number] <= 39 && cardRow[3] === null) {
          cardRow[3] = generalNumbers[number];
          this.cardItemsCount++;
        } else if (generalNumbers[number] > 39 && generalNumbers[number] <= 49 && cardRow[4] === null) {
          cardRow[4] = generalNumbers[number];
          this.cardItemsCount++;
        }
        else if (generalNumbers[number] > 49 && generalNumbers[number] <= 59 && cardRow[5] === null) {
          cardRow[5] = generalNumbers[number];
          this.cardItemsCount++;
        } else if (generalNumbers[number] > 59 && generalNumbers[number] <= 69 && cardRow[6] === null) {
          cardRow[6] = generalNumbers[number];
          this.cardItemsCount++;
        }
        else if (generalNumbers[number] > 69 && generalNumbers[number] <= 79 && cardRow[7] === null) {
          cardRow[7] = generalNumbers[number];
          this.cardItemsCount++;
        } else if (generalNumbers[number] > 79 && generalNumbers[number] <= 89 && cardRow[8] === null) {
          cardRow[8] = generalNumbers[number];
          this.cardItemsCount++;
        }
        generalNumbers.splice(number, 1);
      }
      this.cardItemsCount = 0;
    }

    return this.card;
  }
}
