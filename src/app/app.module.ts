import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialUiModule} from './material-ui/material-ui.module';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';



import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { DashboradComponent } from './Components/dashborad/dashborad.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconsComponent } from './Components/icons/icons.component';
import { TakeNoteComponent } from './Components/take-note/take-note.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { NotesComponent } from './Components/notes/notes.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CollabratorComponent } from './Components/collabrator/collabrator.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { RemaindersComponent } from './Components/remainders/remainders.component';
import { TrashComponent } from './Components/trash/trash.component';
import { LabelsComponent } from './Components/labels/labels.component';
import { ArchiveComponent } from './Components/archive/archive.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    DashboradComponent,
    IconsComponent,
    TakeNoteComponent,
    DisplayNotesComponent,
    NotesComponent,
    CollabratorComponent,
    ToolbarComponent,
    RemaindersComponent,
    TrashComponent,
    LabelsComponent,
    ArchiveComponent,
  ],
  entryComponents:[CollabratorComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    FlexLayoutModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
    
       ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
