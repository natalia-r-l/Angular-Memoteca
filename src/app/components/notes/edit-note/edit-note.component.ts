import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private service: NoteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.filterById(parseInt(id!)).subscribe((note) => {
      this.form = this.formBuilder.group({
        id:[note.id],
        content: [note.content, Validators.compose([
          Validators.required,
          Validators.pattern('[^0-9]+')
        ])],
        author: [note.author, Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[^0-9]+')
        ])],
        model: [note.model],
        favorite: [note.favorite]
      })
    })
  }

  update(){
    if(this.form.valid){
      this.service.update(this.form.value).subscribe(() => {
        this.router.navigate(['/listNotes'])
      })
    }

  }

  cancelUpdate(){
    this.router.navigate(['/listNotes'])
  }

  enableButtonUpdate(): string {
    if(this.form.valid ) {
      return 'button'
    } else {
      return 'button-disabled'
    }
  }
}
