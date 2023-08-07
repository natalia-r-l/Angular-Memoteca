import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note : Note = {
    id: 0,
    content: '',
    author: '',
    model: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  createNote(){
    alert("Novo pensamento criado!");
  }

  cancelNote(){
    alert("Operação cancelada!");
  }
}
