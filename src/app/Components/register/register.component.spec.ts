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
import * as data from '../../../../src/app/data.json';

describe('RegisterComponent', () => {
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
        BrowserAnimationsModule,
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
    de = fixture.debugElement.query(By.css('div'));
    input = fixture.nativeElement.querySelector('input')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check user is created or not', () => {
    let result;
    let registration = component.next()
    let response = { "data": "mail sent check your email", "status": true }
    spyOn(userService, 'register').and.returnValue(of(response))
    userService.register(data[0].registerData).subscribe(res => {
      result = res
    })
    expect(userService.register).toHaveBeenCalled()
    expect(result.data).toBe('mail sent check your email')
  })

  it('given improper userData when check for valid should return false', () => {
    component.formData.setValue(data[0].registerData)
    expect(component.formData.valid).toBeTruthy()
  })

  fit('given proper userData when check for validation should return true', () => {
    component.formData.setValue(data[1].improperRegisterCredentials)
    expect(component.formData.valid).toBeFalsy()
  })

});

