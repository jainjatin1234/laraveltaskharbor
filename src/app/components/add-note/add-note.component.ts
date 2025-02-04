import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../notes/note.model';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';  // Import Router for navigation
import { error } from 'console';
import { response } from 'express';
@Component({
  selector: 'app-add-note',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {
  noteobj = new Note()
  constructor(private notedata:NoteService,
    private router : Router
  ){}

  addNote(){
    
    this.notedata.addNote(this.noteobj).subscribe((response:any)=>{
      if(response.code == 201){
        console.log(response)
        alert(response.message)
        this.router.navigate(['/notes'])
      }else{
        console.log(response)
        alert("some error")
      }
    })
  }
}
