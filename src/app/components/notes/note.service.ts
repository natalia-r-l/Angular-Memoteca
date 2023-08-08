import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly API = 'http://localhost:3000/note'
  constructor(private http: HttpClient) { }

  list(): Observable<Note[]>{
    return this.http.get<Note[]>(this.API);
  }

  createNote(note: Note): Observable<Note>{
    return this.http.post<Note>(this.API, note);
  }

  delete(id: number):Observable<Note>{
    const url = `${this.API}/${id}`
    return this.http.delete<Note>(url)
  }

  filterById(id: number): Observable<Note>{
    const url = `${this.API}/${id}`
    return this.http.get<Note>(url)
  }

}
