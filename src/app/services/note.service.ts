import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpRequest:HttpClient) { }

  
  getnotesfromapi(){
    return  this.httpRequest.get('http://127.0.0.1:8000/api/getnotes')
    }

    addNote(data:any){
      return this.httpRequest.post('http://127.0.0.1:8000/api/add-note',data)
    }

    registerUser(data:any){
      return this.httpRequest.post('http://127.0.0.1:8000/api/register',data)
    }

    deletenotedata(id:any){
      return this.httpRequest.delete('http://127.0.0.1:8000/api/delete-note/'+id)
    }

    getoneNote(id:any){
    return  this.httpRequest.get('http://127.0.0.1:8000/api/getoneNote/'+id)
    }
    updateNote(id:any,data:any){
      return this.httpRequest.put('http://127.0.0.1:8000/api/update-note/'+id,data)
    }


}
 