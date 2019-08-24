import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

function matchingFieldsValidator(field1Name: string, field2Name: string): ValidatorFn {
    return (control: FormGroup): {passwordMismatch: boolean} | null => {
        return control.get(field1Name).value === control.get(field2Name).value ? null : {passwordMismatch: true};
    };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupErrorMessage: string;
  signupForm: FormGroup;
  userTypes = ['buyer', 'seller'];
  productChoices = ['apple', 'banana'];
  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      type: [undefined, [Validators.required]],
      company: [undefined, [Validators.required]],
      industry: [undefined, [Validators.required]],
      username: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, [Validators.required]],
      confirmPassword: [undefined, [Validators.required]],
      product: [undefined]
    }, {
      validators: matchingFieldsValidator('password', 'confirmPassword')
    });
  }

  onSubmit() {
    const formData = this.signupForm.value;
    this.auth.signup({
      username: formData.username,
      email: formData.email,
      password: formData.password,
      type: formData.type,
      industry: formData.industry,
      company: formData.company,
      product: formData.product
    }).subscribe(user => this.router.navigate(['/signup/success']),
    (error: ErrorEvent) => this.signupErrorMessage = error.message);
  }
}
