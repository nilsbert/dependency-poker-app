import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _nickname = new BehaviorSubject<string | null>(null);
  nickname$ = this._nickname.asObservable();

  login(nickname: string) {
    this._nickname.next(nickname);
  }
}
