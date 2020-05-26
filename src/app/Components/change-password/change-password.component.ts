import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/user.service'
import { MatSnackBar } from '@angular/material';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  passwordData: FormGroup;

  constructor(private formBuilder: FormBuilder, private userServices: UserService,
    private router: ActivatedRoute, private snackBar: MatSnackBar) { }

  passwordValidation() {
    this.passwordData = this.formBuilder.group({
      password: new FormControl('', [Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]
      ),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]
      )
    })
  }

  showSucessMessage: boolean;

  changePassword() {
    if (this.passwordData.status === "VALID") {
      let password1 = this.passwordData.value.password;
      let confirm = this.passwordData.value.confirmPassword
      if (password1 === confirm) {
        let password =
        {
          password: this.passwordData.value.password
        }
        let headers = new HttpHeaders({
          token: this.router.snapshot.params.token,
        })
        this.userServices.changePassword(password, headers).subscribe(
          (response: any) => {
            this.showSucessMessage = true;
            this.snackBar.open(response.message, "end now")
          },
          err => {
            console.log("err==", err);
            this.snackBar.open("err", "end now")
          }
        )
      }
      if (password1 != confirm) {
        this.snackBar.open("Passwords  not match", "end now")
      }
    }


  }



  ngOnInit() {
    this.passwordValidation()
  }

}
