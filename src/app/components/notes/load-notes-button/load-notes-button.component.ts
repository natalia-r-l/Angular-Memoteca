import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-notes-button',
  templateUrl: './load-notes-button.component.html',
  styleUrls: ['./load-notes-button.component.css']
})
export class LoadNotesButtonComponent implements OnInit {

  @Input() hasMoreNotes: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
