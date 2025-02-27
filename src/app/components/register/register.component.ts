import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Register } from './register.model';
import { FormsModule, NgModel } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
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
  if(this.register.username == undefined || this.register.email == undefined || this.register.password == undefined){
    this.target = '<div class="alert alert-danger">Error! Please enter the details</div>'
    
  }  
  this.userdata.registerUser(this.register).subscribe((response:any)=>{
    this.register.username='';
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

  console.log('register api called')
   

}

}
