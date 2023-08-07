import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note : Note = {
    content: '',
    author: '',
    model: '',
  }

  constructor(
    private service: NoteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createNote(){
    this.service.createNote(this.note).subscribe(() => {
      this.router.navigate(['/listNotes'])
    })
  }

  cancelNote(){
    this.router.navigate(['/listNotes'])
  }
}
