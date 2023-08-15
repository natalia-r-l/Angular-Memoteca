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

  constructor(private service: NoteService) { }

  ngOnInit(): void {
    this.service.list(this.page).subscribe((notesList) => {
      this.notesList = notesList
    })
  }

  loadMoreNotes(){
    this.service.list(++this.page).subscribe(notesList => {
      this.notesList.push(...notesList);
      if (!notesList.length){
        this.hasMoreNotes = false;
      }
    })
  }

}
