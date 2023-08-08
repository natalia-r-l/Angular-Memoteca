import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  note: Note = {
    id: 0,
    content: '',
    author: '',
    model: ''
}

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.filterById(parseInt(id!)).subscribe((note) => {
    this.note = note
    })
  }

  update(){
    this.service.update(this.note).subscribe(() => {
      this.router.navigate(['/listNotes'])
    })
  }

  cancelUpdate(){
    this.router.navigate(['/listNotes'])
  }
}
