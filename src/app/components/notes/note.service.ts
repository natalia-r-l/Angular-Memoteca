import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Note } from './note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

 private API = 'https://json-server-fake-api-1zu2.vercel.app/note'

  constructor(private http: HttpClient) { }

  list(page: number, filter: string, favorites: boolean): Observable<Note[]>{

    const itensPage = 6;

    let params = new HttpParams()
      .set("_page",  page)
      .set("_limit", itensPage)

     if(filter.trim().length > 2){
      params = params.set("q", filter)
     }

     if(favorites){
      params = params.set("favorite", true)
     }

     return this.http.get<Note[]>(this.API, { params })
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

  update(note: Note): Observable<Note> {
    const url = `${this.API}/${note.id}`
    return this.http.put<Note>(url, note )
  }

  changeFavorite(note: Note): Observable<Note>{
    note.favorite = !note.favorite
    return this.update(note)
  }

}


