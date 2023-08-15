import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

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

  constructor(private service: NoteService) { }

  ngOnInit(): void {
    this.service.list(this.page, this.filter).subscribe((notesList) => {
      this.notesList = notesList
    })
  }

  loadMoreNotes(){
    this.service.list(++this.page, this.filter).subscribe(notesList => {
      this.notesList.push(...notesList);
      if (!notesList.length){
        this.hasMoreNotes = false;
      }
    })
  }

  searchNotes(){
    this.hasMoreNotes = true;
    this.page = 1;
    this.service.list(this.page, this.filter)
      .subscribe(notesList => {
        this.notesList = notesList
      })
  }

}
