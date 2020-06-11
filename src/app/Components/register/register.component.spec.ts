import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { UserService } from 'src/app/Services/user.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userService: UserService;
  let input: HTMLElement;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        HttpClientModule,
        FlexLayoutModule,
        BrowserModule,
        RouterTestingModule,
        MatSnackBarModule, MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [RegisterComponent],
      providers: [
        UserService
      ]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    userService = TestBed.get(UserService)
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
    input = fixture.nativeElement.querySelector('input')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check user is created or not', () => {
    let registration = component.next()
    let response = { "data": "mail sent check your email", "status": true }
    let result;

    let user = {
      "firstName": "xyz",
      "lastName": "abc",
      "userEmail": "abc@gmail.com",
      "password": "Apeksha1234"
    }

    spyOn(userService, 'register').and.returnValue(of(response))
    userService.register(user).subscribe(res => {
      result = res
    })

    expect(userService.register).toHaveBeenCalled()
    expect(result.data).toBe('mail sent check your email')
  })

  fit('given improper userData when check for valid should return false', () => {
    component.formData.controls['firstName'].setValue('');
    component.formData.controls['lastName'].setValue('');
    component.formData.controls['userEmail'].setValue('');
    component.formData.controls['password'].setValue('')
    expect(component.formData.valid).toBeFalsy()
  })

});

