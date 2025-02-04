import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes',
  imports: [CommonModule, RouterModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  noteData:any;
  constructor(private notedata:NoteService){}

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
  
  
}
  