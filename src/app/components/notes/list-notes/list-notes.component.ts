import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notesList: Note[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
