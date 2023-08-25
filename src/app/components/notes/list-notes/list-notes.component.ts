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
  title: string = 'Exibindo todos os lembretes '

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
    this.service.list(this.page, this.filter, this.favorites)
      .subscribe(listFavorites => {
        this.notesList = listFavorites
        this.favoriteNotesList = listFavorites
      })
  }

  loadNotes(){
    this.favorites = false;
    this.page = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  /*
  activeButton(){
    if(this.favorites = false && this.page == 1){
      return 'button-active'
    } else {
      return 'button'
    }
  }*/

}
