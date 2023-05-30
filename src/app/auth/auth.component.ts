import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  login(nickname: string) {
    this.authService.login(nickname);
  }
}
