import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _selectedCards = new BehaviorSubject<number[]>([]);
  selectedCards$ = this._selectedCards.asObservable();

  selectCard(card: number) {
    this._selectedCards.next([...this._selectedCards.value, card]);
  }
}
