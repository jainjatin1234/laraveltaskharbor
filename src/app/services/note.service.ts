import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpRequest:HttpClient) { }

  
  getnotesfromapi(){
    return  this.httpRequest.get('https://exampleapp-6.onrender.com/api/getnotes')
    }

    addNote(data:any){
      return this.httpRequest.post('https://exampleapp-6.onrender.com/api/add-note',data)
    }

    registerUser(data:any){
      return this.httpRequest.post('https://taskharbourbackend.onrender.com/api/v1/user/register',data)
    }
    loginUser(data:any){
      return this.httpRequest.post('https://taskharbourbackend.onrender.com/api/v1/user/signin',data)
    }

    deletenotedata(id:any){
      return this.httpRequest.delete('https://exampleapp-6.onrender.com/api/delete-note/'+id)
    } 

    getoneNote(id:any){
    return  this.httpRequest.get('https://exampleapp-6.onrender.com/api/getoneNote/'+id) 
    }
    updateNote(id:any,data:any){
      return this.httpRequest.put('https://exampleapp-6.onrender.com/api/update-note/'+id,data)
    }


}
 