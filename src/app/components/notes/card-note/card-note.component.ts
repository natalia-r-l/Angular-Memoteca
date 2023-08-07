import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.css']
})
export class CardNoteComponent implements OnInit {

  @Input() note: Note = {
    id: 0,
    content:'',
    author:'',
    model: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  noteWidth(): string{
    if(this.note.content.length >= 256){
      return 'note-large'
    }
    return 'note-small'
  }
}
