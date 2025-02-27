import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-notes',
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  noteData:any;
  constructor(private notedata:NoteService,private router:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showapidata()
  }

  showapidata(){
    this.notedata.getnotesfromapi().subscribe(res=>{
      console.log(res)
      this.noteData=res;
    })
  }

  deleteData(id: any) {
    this.notedata.deletenotedata(id).subscribe(res => {
      // Show success alert with a delete confirmation message
      alert('Data with ID ' + id + ' has been deleted successfully!');
  
      // Call the function to update the data after deletion
      this.showapidata();
    });
  }

  logout():void{
    // Clear the token from localStorage
    localStorage.removeItem('token'); 

    // Optionally, redirect the user to the login page
    this.router.navigate(['/']);
    console.log('hello')
  }
  
  
}
  