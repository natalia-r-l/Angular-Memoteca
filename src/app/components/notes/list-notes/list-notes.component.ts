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

  constructor(private service: NoteService) { }

  ngOnInit(): void {
    this.service.list().subscribe((notesList) => {
      this.notesList = notesList
    })
  }

}
