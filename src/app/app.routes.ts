import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/notes/notes.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'notes',
        component:NotesComponent
    },
    {
        path:'notes/edit/:id',
        component:EditNoteComponent
    },
    {
        path:'notes/addnote',
        component:AddNoteComponent
    },
    {
        path:'register',
        component:RegisterComponent
    }
];
