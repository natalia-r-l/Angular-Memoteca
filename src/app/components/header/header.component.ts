import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../notes/note';
import { Router } from '@angular/router';
import { NoteService } from '../notes/note.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {

  }


}
