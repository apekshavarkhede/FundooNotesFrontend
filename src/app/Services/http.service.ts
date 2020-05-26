import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  token = sessionStorage.getItem('token')

  post(url, user, headers: HttpHeaders) {
    return this.http.post(environment.baseUrl + url, user, { headers: headers })
  }

  postForNote(url, note) {

    var httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('token')
      })
    }
    return this.http.post(environment.baseUrl + url, note, httpOption)
  }

  getNotes(url) {
    const httpoption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('token')
      })
    }
    return this.http.get(environment.baseUrl + url, httpoption)
  }

  getAll(url) {
    return this.http.get(environment.baseUrl + url)
  }
}
