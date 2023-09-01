import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests

@Injectable({
  providedIn: 'root'
})
export class ClintService {
  baseurl = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }; // Close the httpOptions object

  constructor(private http: HttpClient) { } // Inject the HttpClient service

  // You can define methods here to make HTTP requests

  getAllemployee(){
    console.log("getAllemployee")
    let url=this.baseurl+'/employees'
    return this.http.get(url,this.httpOptions)
  }
  getEmployeeid(id:any){
    let url=this.baseurl+'/empolyee/'+ id;
    return this.http.get(url,this.httpOptions);
  }
}
