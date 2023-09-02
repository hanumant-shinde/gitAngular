import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClintService {
  baseurl = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getAllemployee(){
    console.log("getAllemployee")
    let url = this.baseurl + '/employees'; // Corrected URL
    return this.http.get(url, this.httpOptions);
  }

  getEmployeeid(id: any){
    let url = this.baseurl + '/employees/' + id; // Corrected URL
    return this.http.get(url, this.httpOptions);
  }

  deleteEmployee(id: any){
    let url = this.baseurl + '/employees/' + id; // Corrected URL
    return this.http.delete(url, this.httpOptions);
  }

  addEmployee(body: any){
    console.log(body);
   
    let url = this.baseurl + '/employees'; // Corrected URL
    return this.http.post(url, body, this.httpOptions);
  }
  updateEmployee(id:any,body:any){
    let url=this.baseurl + '/employees/'+id;
    return this.http.put(url,body,this.httpOptions);
  }
}
