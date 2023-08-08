import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { ListNotesComponent } from './components/notes/list-notes/list-notes.component';
import { ModalDeleteComponent } from './components/notes/modal-delete/modal-delete.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'listNotes',
    pathMatch: 'full',
  },
  {
    path:'createNote',
    component: CreateNoteComponent,
  },
  {
    path:'listNotes',
    component: ListNotesComponent,
  },
  {
    path:'note/deleteNotes/:id',
    component: ModalDeleteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
