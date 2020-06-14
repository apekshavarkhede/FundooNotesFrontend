import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component'
import { TakeNoteComponent } from '../take-note/take-note.component';
import { MatIconModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
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
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabelsMenuComponent } from '../labels-menu/labels-menu.component'
import { MatDividerModule } from '@angular/material/divider';
import * as data from '../../../app/data.json';
import { from, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;
  let noteService: NoteService;
  let x = [];
  beforeAll(() => {
    sessionStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZDY0MWIwM2JmMDZjM2YyNDI0NmM1YSIsImlhdCI6MTU5MjAyOTAzMH0.Ntm4zlauXXehhWzwKlUhmrXPx8JqbmYbkWUi5KGF7Sc")
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatChipsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        FlexLayoutModule,
        BrowserModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatMenuModule,
        OwlDateTimeModule, OwlNativeDateTimeModule, MatTooltipModule,
        MatDividerModule,
        BrowserAnimationsModule
      ],

      declarations: [
        NotesComponent,
        DisplayNotesComponent,
        TakeNoteComponent,
        IconsComponent,
        LabelsMenuComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    noteService = TestBed.get(NoteService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should return all notes', () => {
    let response = [data[5]]
    spyOn(noteService, 'getAlNotes').and.returnValue(of(response))
    component.getallNotes()
    expect(noteService.getAlNotes).toHaveBeenCalled()
    expect(response.length).toBe(1)

  })
});
