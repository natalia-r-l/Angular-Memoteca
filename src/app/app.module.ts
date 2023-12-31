import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { CardNoteComponent } from './components/notes/card-note/card-note.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalDeleteComponent } from './components/notes/modal-delete/modal-delete.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { LoadNotesButtonComponent } from './components/notes/load-notes-button/load-notes-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent, CreateNoteComponent, ListNotesComponent, CardNoteComponent, ModalDeleteComponent, EditNoteComponent, LoadNotesButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
