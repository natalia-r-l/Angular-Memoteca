import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notesList: Note[] = [];
  page: number = 1
  hasMoreNotes: boolean = true;
  filter: string = ''
  favorites: boolean = false
  title: string = 'Exibindo todos os lembretes'
  purple: boolean = false;


  @Input() favoriteNotesList: Note[] = []

  constructor(
    private service: NoteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.service.list(this.page, this.filter, this.favorites).subscribe((notesList) => {
      this.notesList = notesList
    })
  }

  loadMoreNotes(){
    this.service.list(++this.page, this.filter, this.favorites).subscribe(notesList => {
      this.notesList.push(...notesList);
      if (!notesList.length){
        this.hasMoreNotes = false;
      }
    })
  }

  searchNotes(){
    this.hasMoreNotes = true;
    this.page = 1;
    this.service.list(this.page, this.filter, this.favorites)
      .subscribe(notesList => {
        this.notesList = notesList
      })
  }

  listNotesFavorites(){
    this.title = 'Exibindo meus favoritos'
    this.favorites = true
    this.hasMoreNotes = true
    this.page = 1;
    this.activeButton()
    this.service.list(this.page, this.filter, this.favorites)
      .subscribe(listFavorites => {
        this.notesList = listFavorites
        this.favoriteNotesList = listFavorites
      })
  }

  loadNotes(){
    this.title = 'Exibindo todos os lembretes'
    this.favorites = false;
    this.purple = true;
    this.page = 1;
    this.service.list(this.page, this.filter, this.favorites)
      .subscribe(listFavorites => {
        this.notesList = listFavorites
        this.favoriteNotesList = listFavorites
    })
  }


  activeButton(): string{
    if(this.purple = true){
      return 'button-active'
    } else {
      return 'button'
    }
  }

}
