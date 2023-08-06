import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note = {
    id: '1',
    content: 'Aprendendo....',
    author: 'Eu',
    model: 'model3',
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
