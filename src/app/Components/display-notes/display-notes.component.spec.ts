import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayNotesComponent } from './display-notes.component';
import { IconsComponent } from '../icons/icons.component'
import { from } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatChipsModule, MatFormFieldModule, MatCardModule, MatSnackBarModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelsMenuComponent } from '../labels-menu/labels-menu.component'
import { MatDialogModule } from '@angular/material/dialog';
import { DebugElement } from '@angular/core';
import { NotesComponent } from '../notes/notes.component'
import { TakeNoteComponent } from '../take-note/take-note.component';
import * as data from '../../../../src/app/data.json';
import { title } from 'process';

fdescribe('DisplayNotesComponent', () => {
  let component: DisplayNotesComponent;
  let fixture: ComponentFixture<DisplayNotesComponent>;
  // let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDividerModule,
        MatIconModule,
        MatChipsModule,
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
        BrowserAnimationsModule,
        MatDialogModule
      ],
      declarations: [DisplayNotesComponent,
        IconsComponent,
        NotesComponent,
        TakeNoteComponent,
        LabelsMenuComponent],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNotesComponent);
    component = fixture.componentInstance;
    component.note = data[6]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check input ', () => {
    expect(fixture.nativeElement.querySelector('mat-card').querySelector('div').innerText).toEqual('1st Note')
  })
});
