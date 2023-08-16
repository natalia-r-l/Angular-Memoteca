import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.css']
})
export class CardNoteComponent implements OnInit {

  @Input() note: Note = {
    id: 0,
    content:'',
    author:'',
    model: '',
    favorite: false
  }

  @Input() favoriteNotesList: Note[] = []
  constructor(private service: NoteService) { }

  ngOnInit(): void {
  }

  noteWidth(): string{
    if(this.note.content.length >= 256){
      return 'note-large'
    }
    return 'note-small'
  }

  changeFavoriteIcon(): string{
    if(this.note.favorite == false){
      return 'inativo'
    }
     return 'ativo'
  }

  updateFavorites(){
    this.service.changeFavorite(this.note).subscribe(() => {
      this.favoriteNotesList.splice(this.favoriteNotesList.indexOf(this.note), 1)
    });
  }


}
