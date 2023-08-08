import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  note: Note = {
    id: 0,
    content: '',
    author: '',
    model: '',
  }

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.filterById(parseInt(id!)).subscribe((note) => {
      this.note = note;
    })
  }

  deleteNote(){
    if(this.note.id){
      this.service.delete(this.note.id).subscribe(() => {
        this.router.navigate(['/listNotes'])
      })
    }
  }

  cancel(){
    this.router.navigate(['/listNotes'])
  }

}
