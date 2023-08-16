import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { upperCaseValidator } from '../upperCaseValidator';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private service: NoteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[^0-9]+')
      ])],
      author: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        upperCaseValidator,
        Validators.pattern('[^0-9]+')
      ])],
      model: ['model1'],
      favorite: [false]
    })
  }

  createNote(){
    if(this.form.valid){
      this.service.createNote(this.form.value).subscribe(() => {
        this.router.navigate(['/listNotes'])
      })
    }
  }

  cancelNote(){
    this.router.navigate(['/listNotes'])
  }

  enableButton(): string {
    if(this.form.valid ) {
      return 'button'
    } else {
      return 'button-disabled'
    }
  }



}
