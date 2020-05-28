import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpService } from '../Services/http.service'
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpService) { }

  createNote(note) {
    console.log("sjdhgdjsfbgd")
    return this.http.postForNote('/createNote', note)
  }

  getAlNotes() {
    return this.http.getNotes('/getAllNotes')
  }

  changeColor(note) {
    return this.http.postForNote('/changeColor/noteId', note)
  }

  addRemainder(note) {
    return this.http.postForNote('/addRemainder', note)
  }

  removeRemainder(note) {
    return this.http.postForNote('/removeRemainder/noteId', note)
  }

  addCollabrator(note) {
    return this.http.postForNote('/addCollabrator', note)
  }

  removeCollabrator(note) {
    return this.http.postForNote('/removeCollabrator', note)
  }

  deleteNote(note) {
    return this.http.postForNote('/deleteNote', note)
  }

  archiveNote(note) {
    return this.http.postForNote('/archiveNote', note)
  }

  unArchieveNote(note) {
    return this.http.postForNote('/unArchieveNote', note)
  }

  createLabel(label) {
    return this.http.postForNote('/createLabel', label)
  }

  addLableToNote(req) {
    return this.http.postForNote('addLableToNote', req)
  }

  // addLableToNote(note) {
  //   return this.http.postForLabel('/notes/{noteId}/addLabelToNotes/{lableId}/add', note)
  // }

}
