import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../notes/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-note',
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss'
})
export class EditNoteComponent {
  id:any;
  noteobj  = new Note();
  data:any;
  constructor(
    private route:ActivatedRoute,
    private notedata : NoteService,
    private router:Router
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.id =  this.route.snapshot.params.id;
   this.getonenote()
  }

  getonenote(){
    this.notedata.getoneNote(this.id).subscribe(res=>{
      // console.log(res)
      this.data=res
      this.noteobj=this.data
    })
  }

  updateNote(){
    
    this.notedata.updateNote(this.id,this.noteobj).subscribe((response:any)=>{
      if(response.code == 200){
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
