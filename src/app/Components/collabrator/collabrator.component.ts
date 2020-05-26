import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../Services/user.service'
import { MatSnackBar } from '@angular/material';
import { NoteService } from '../../Services/note.service';
import { element } from 'protractor';


@Component({
  selector: 'app-collabrator',
  templateUrl: './collabrator.component.html',
  styleUrls: ['./collabrator.component.scss']
})
export class CollabratorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CollabratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, private matSnackbar: MatSnackBar, private noteService: NoteService) { }
  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  firstName: string = sessionStorage.getItem('firstName');
  lastName: string = sessionStorage.getItem('lastName');
  userEmail: string = sessionStorage.getItem('userEmail');
  totalUsers: Array<any>
  note: any;
  input: any;
  collabratorAction = []

  onNoClick(): void {
    this.dialogRef.close();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((response: any) => {
      this.totalUsers = response.data
    }, (error) => {
    })
  }

  inputChange(event: any) {
    this.input = event.target.value;
  }

  addCollaborator() {
    if (!this.emailPattern.test(this.input)) {
      this.matSnackbar.open("please Enter proper email", "end now")
    }
    if (this.emailPattern.test(this.input)) {
      for (let index = 0; index < this.totalUsers.length; index++) {
        if (this.totalUsers[index].userEmail === this.input) {
          this.note.collabrator.push(this.input)
          let object = {
            type: 'SAVE',
            item: this.totalUsers[index]
          }
          this.collabratorAction.push(object)
          return ''
        }
      }
    }
  }

  saveCollabrator() {
    if (this.collabratorAction.length !== 0) {
      this.dialogRef.close()
      this.collabratorAction.forEach(collabrator => {
        switch (collabrator.type) {
          case 'SAVE':
            let addRequest = {
              noteId: this.note._id,
              collabrator: collabrator.item
            }
            this.noteService.addCollabrator(addRequest).subscribe(response => {
              console.log(response);
            })
            break;
          case 'DELETE':
            let removeRequest = {
              noteId: this.note._id,
              collabrator: collabrator.item
            }
            this.noteService.removeCollabrator(removeRequest).subscribe(response => {
              console.log(response)
            })
            break;
          default:
            break;
        }
      })
    }
  }

  deleteCollabrator(item: any) {
    for (let index = 0; index < this.note.collabrator.length; index++) {
      if (this.note.collabrator[index].userEmail === item.userEmail) {
        this.note.collabrator.splice(index, 1);
        break;
      }
    }
    let object = {
      type: 'DELETE',
      item: item
    }
    this.collabratorAction.push(object)
    return ''
  }

  ngOnInit() {
    this.getUsers(),
      this.note = this.data.note
  }

  close() {
    this.dialogRef.close()
  }

}
