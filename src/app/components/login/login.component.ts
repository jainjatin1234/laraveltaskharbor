import { Component } from '@angular/core';
import { Login } from './login.model';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = new Login();
  target:any='';

  constructor(private userdata:NoteService,private router:Router){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  loginUser(){
    if( this.login.email == undefined || this.login.password == undefined){
      this.target = '<div class="alert alert-danger">Error! Please enter the details</div>'
      
    }
    this.userdata.loginUser(this.login).subscribe((response:any)=>{
      this.login.email='';
      this.login.password='';
  
      console.log(response)
  
      if(response.code ==201){
        // this.target = '<div class="alert alert-success">Success! '+response.message+'</div>';
        alert(response.message)
        this.router.navigate(['/notes'])
      }
      else if(response.code==400){
        alert(response.message)
      }
    })

    console.log('login aapi called')
     
  }
}
