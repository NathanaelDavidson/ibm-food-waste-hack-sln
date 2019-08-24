import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginErrorMessage: string;
  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [undefined, [Validators.required]],
      password: [undefined, [Validators.required]],
      remember: [false]
    });
  }

  onSubmit() {
    const formValues = this.loginForm.value;
    this.auth.login(formValues.username, formValues.password, formValues.remember).subscribe(success => {
      if (success) {
        this.router.navigate(['/']);
      } else {
        this.loginErrorMessage = 'Something went wrong. Please try again.';
      }
    });
  }
}
