import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Register } from './register.model';
import { FormsModule, NgModel } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  register = new Register();
  target:any='';
  constructor(private userdata:NoteService,private router:Router){};

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  } 

registerUser(){
  if(this.register.name == undefined || this.register.email == undefined || this.register.password == undefined){
    this.target = '<div class="alert alert-danger">Error! Please enter the details</div>'
    
  }
  this.userdata.registerUser(this.register).subscribe((response:any)=>{
    this.register.name='';
    this.register.email='';
    this.register.password='';

    console.log(response)

    if(response.code == 201){
      this.target = '<div class="alert alert-success">Success! '+response.message+'</div>';
      this.router.navigate(['/login'])
    }
    else{
      this.target = '<div class="alert alert-danger">Error! '+response.message+'</div>'
    }
  })
   
}

}
