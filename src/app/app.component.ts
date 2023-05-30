import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency-poker-app';
  form: FormGroup;
  roles = ['Scrum Master', 'Developer', 'Product Owner'];
  sessionStarted = false;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      nickname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      role: new FormControl('', Validators.required)
    });
  }

  startSession() {
    if (this.form.valid) {
      this.authService.login(this.form.value.nickname);
      this.sessionStarted = true;
    }
  }
}
