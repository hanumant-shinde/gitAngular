import { Component, OnInit } from '@angular/core';
import { ClintService } from '../clint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  [x: string]: any;
  employees: any[] = [];

  constructor(private clintService: ClintService, private router:Router ) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.clintService.getAllemployee().subscribe(
      (data: any) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  deletemployee(id:any){
    this.clintService.deleteEmployee(id).subscribe(
      (data:any)=>{
        console.log("deletemployee");
        this.fetchEmployees();
       this.router.navigate(['/employeelist']);
      }
    )
  }
  editEmployee(id:any){
    this.router.navigate(['/editEmployee/'+id]);

  }
  
  
}
