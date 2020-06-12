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


fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;


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
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('given correct login credentials when check for validation should return true', () => {
    component.formData.controls['userEmail'].setValue('apekshavarkhede1508@gmail.com');
    component.formData.controls['password'].setValue('Apeksha123');
    expect(component.formData.valid).toBeTruthy()
  })

});
