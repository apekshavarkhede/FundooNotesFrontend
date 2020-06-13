import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeNoteComponent } from './take-note.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NoteService } from '../../Services/note.service';
import { IconsComponent } from '../icons/icons.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabelsMenuComponent } from '../labels-menu/labels-menu.component'
import { MatDividerModule } from '@angular/material/divider';
import * as data from '../../../app/data.json';
import { HttpTestingController } from '@angular/common/http/testing';

import { from, of } from 'rxjs';


fdescribe('TakeNoteComponent', () => {
  let component: TakeNoteComponent;
  let fixture: ComponentFixture<TakeNoteComponent>;
  let noteService: NoteService
  // let httpMock: HttpTestingController;

  beforeAll(() => {
    sessionStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDY0MWIwM2JmMDZjM2YyNDI0NmM1YSIsImlhdCI6MTU5MjAyOTAzMH0.Ntm4zlauXXehhWzwKlUhmrXPx8JqbmYbkWUi5KGF7Sc")
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FlexLayoutModule,
        BrowserModule,
        MatCardModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatMenuModule,
        MatIconModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatChipsModule,
        MatTooltipModule,
        MatDividerModule,
        // HttpTestingController
      ],
      declarations: [TakeNoteComponent, IconsComponent, LabelsMenuComponent],

      providers: [
        NoteService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeNoteComponent);
    component = fixture.componentInstance;
    noteService = TestBed.get(NoteService);
    // httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('given noteData when check for validation should return true', () => {
    component.formData.setValue(data[4].noteData)
    expect(component.formData.valid).toBeTruthy()
  })

  it('given improper noteData when check for validation should return false', () => {
    component.formData.setValue(data[5].imProperNoteData)
    expect(component.formData.valid).toBeFalsy()
  })

  fit(`given proper data when create notes should create note`, () => {
    component.formData.setValue(data[4].noteData)
    let response = { success: true, message: "note created" }
    spyOn(noteService, 'createNote').and.returnValue(of(response))
    component.createNote()
    expect(noteService.createNote).toHaveBeenCalled()
    expect(response.success).toBe(true)
  })

});
