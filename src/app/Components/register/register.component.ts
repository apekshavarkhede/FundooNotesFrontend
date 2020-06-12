import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { MatSnackBar } from '@angular/material';
import { log } from 'util';
import * as data from '../../../../src/app/data.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formData: FormGroup;
  constructor(private route: Router, private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder, private userservice: UserService) { }

  formControlValidation() {
    this.formData = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
    })
  }

  getErrorMessage(controlName: string, alias: string) {
    let control = this.formData.controls[controlName];

    if (control.errors) {
      if (control.errors.required) {
        return alias + 'is required';
      }

      if (control.errors.pattern) {
        return alias.toLowerCase() + ' is not valid';
      }

      if (control.errors.minLength)
        return alias + 'should  ' + control.errors.minLength;
    }
  }

  showSucessMessage: boolean;
  serverErrorMessages: string;

  next() {
    if (this.formData.status === "VALID") {
      var userData = {
        firstName: this.formData.value.firstName,
        lastName: this.formData.value.lastName,
        userEmail: this.formData.value.userEmail,
        password: this.formData.value.password
      }
      this.userservice.register(userData).subscribe(
        (response: any) => {
          this.showSucessMessage = true;
          this.route.navigate(["/login"]);
          this.matSnackBar.open("registration sucessful", "end now")
          return true
        },
        err => {
          this.showSucessMessage = false;
          this.matSnackBar.open("err while registrating user", "end now")
        }
      )
    }
    else if (this.formData.status != "VALID") {
      this.matSnackBar.open("please fill the correct information")
    }

  }

  singIn() {
    this.route.navigate(['login'])
  }

  ngOnInit() {
    this.formControlValidation()
  }

}
