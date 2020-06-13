import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule, By } from '@angular/platform-browser';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { of } from 'rxjs';
import * as data from '../../../../src/app/data.json';



fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let userService: UserService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        FlexLayoutModule,
        BrowserModule,
        MatSnackBarModule,
        MatInputModule, MatListModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [LoginComponent],
      providers: [
        UserService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService)
    // de = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('given correct login credentials when check for validation should return true', () => {
    component.formData.setValue(data[3].loginCredentials)
    expect(component.formData.valid).toBeTruthy()
  })

  fit('given improper login credentials when check for validation should throw error', () => {
    component.formData.setValue(data[2].improperLoginCredentials)
    expect(component.formData.valid).toBeFalsy()
  })

  fit('given proper credentials when try to login should be able to login', () => {
    component.formData.setValue(data[3].loginCredentials)
    let response = { success: true, message: "login sucess" }
    let login = component.next()
    spyOn(userService, 'login').and.returnValue(of(response))
    expect(component.formData.valid).toBeTruthy()
    expect(response.success).toBe(true)
  })

});
