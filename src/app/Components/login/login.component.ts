import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { MatSnackBar } from '@angular/material';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  formData: FormGroup
  constructor(private route: Router, private matSnackbar: MatSnackBar,
    private formBuilder: FormBuilder, private userService: UserService) { }

  formControlValidation() {
    this.formData = this.formBuilder.group({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  getErrorMessage(controlName: string, alias: string) {
    let control = this.formData.controls[controlName]
    if (control.errors) {
      if (control.errors.required) {
        return alias + " " + 'is required'
      }

      if (control.errors.pattern) {
        return alias + 'is not valid'
      }
    }
  }
  sucessMessage: boolean;
  errorMessage: string;
  next() {
    if (this.formData.status === "VALID") {
      let userInformation = {
        userEmail: this.formData.value.userEmail,
        password: this.formData.value.password
      }
      this.userService.login(userInformation).subscribe(
        (response: any) => {
          this.sucessMessage = true;
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("firstName", response.data.firstName)
          sessionStorage.setItem("lastName", response.data.lastName)
          sessionStorage.setItem("userEmail",response.data.userEmail)
          this.matSnackbar.open("Login sucessful", "end now");
          this.route.navigate(['dashboard'])
        },
        err => {
          this.sucessMessage = false;
          this.matSnackbar.open(err.error.text, "end now")
        })
    }
    if (this.formData.status === "INVALID") {
      this.matSnackbar.open("Enter correct information", "end now")
    }
  }

  forgetPassword() {
    this.route.navigate(['forgetPassword'])

  }

  ngOnInit() {
    this.formControlValidation()
  }

}
