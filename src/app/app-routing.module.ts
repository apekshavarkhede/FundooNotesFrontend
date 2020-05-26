import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component'
import { LoginComponent } from './Components/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { DashboradComponent } from './Components/dashborad/dashborad.component';

import { TakeNoteComponent } from './Components/take-note/take-note.component';
import { NotesComponent } from './Components/notes/notes.component'
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { RemaindersComponent } from './Components/remainders/remainders.component';
import { ArchiveComponent } from './Components/archive/archive.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'changePassword/:token', component: ChangePasswordComponent },
  {
    path: 'dashboard', component: DashboradComponent, children: [
      { path: '', component: NotesComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'getAllNotes', component: DisplayNotesComponent },
      { path: 'remainders', component: RemaindersComponent },
      { path: 'archive', component: ArchiveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
