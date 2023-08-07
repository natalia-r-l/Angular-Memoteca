import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notesList = [
    {
      content:'Passo as minhas informações para o meu componente filho',
      author:'Componente pai',
      model: 'model3'
    },
    {
      content:'Recebo as informações do meu componente pai, e sou decorado pelo @Input',
      author:'Componente filho',
      model: 'model3'
    },
    {
      content:'Recebo as informações do meu componente pai, e sou decorado pelo @Input huauhahuauhauhauhauhauhauhauhauhauhahuuhauhauhahuahuahuauhahuauhahuauhauhauhahuauhauhauhauhauhahuahuhuauhahuahuauhauhahuahuahuahuahuauhauhahuauhahuahuuhauhahuahuauhahuauhahuauhauhauhauhauhahuahuauhhuahuahuahua',
      author:'Componente filho',
      model: 'model3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
