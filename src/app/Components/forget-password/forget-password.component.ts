import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})

export class ForgetPasswordComponent implements OnInit {

  constructor(private router: Router, private matSnackBar: MatSnackBar, private userService: UserService) { }
  userEmail = new FormControl('', [Validators.required, Validators.email])

  getErrorMessage() {
    return this.userEmail.hasError('required') ? 'You must Enter Email' :
      this.userEmail.hasError('email') ? 'Enter valid mail' : ''
  }

  showSucessMessage: boolean;

  next() {
    if (this.userEmail.status === "VALID") {
      let userData = {
        userEmail: this.userEmail.value
      }
      this.userService.forgetPassword(userData).subscribe(
        (response: any) => {
          this.showSucessMessage = true;
          this.matSnackBar.open(response.message, "end now")
        }, err => {
          this.showSucessMessage = false;
          this.matSnackBar.open(err.error.text, "end now")
        }
      )
    }
    if (this.userEmail.status === "INVALID") {
      this.matSnackBar.open("Please Enter the Email", "end now")
    }
  }



  ngOnInit() {
  }

}
