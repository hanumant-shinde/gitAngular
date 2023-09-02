import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import  {ClintService} from '../clint.service'
import { Router, ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-create-employee', // Corrected selector
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createEmployee!: FormGroup;
  employeeId:any;
  msg:any;
  id:any;
  isEditMode: any;
  name:any;
  designation:any;
  salary:any

  constructor(
    private fb: FormBuilder, 
    private Clint:ClintService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.createEmployee = this.fb.group({
      name: [''],
      designation: [''],
      salary: ['']
    });
    this.activatedRoute.params.subscribe(params=>{
      this.employeeId=params['id'];
      if(this.employeeId){
        this.msg="Edit Employee"
      }else{
        this.msg="Create Empolyee"
      }
    })
   
      if (this.employeeId) {
        // Use the ClintService to get employee data by ID
        this.Clint.getEmployeeid(this.employeeId).subscribe((data:any)=>{
          console.log(data);
          this.name=data.name;
          this.designation=data.designation;
          this.salary=data.salary;
          


        });

        
      }
}

  SaveEmployee() {
    // Implement your form submission logic here
    let body=this.createEmployee.value;
    if(this.employeeId){
      this.Clint.updateEmployee(this.employeeId,body).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/employeelist'])
      })

    }else{
      this.Clint.addEmployee(body).subscribe(
        (response) => {
          // Handle successful response here
          console.log('Response:', response);
          this.router.navigate(['/employeelist']);
        },
        (error) => {
          // Handle error here
          console.error('Error:', error);
        }
      );
    }

    }
    
}
function fetchEmployeeData(id: any, number: any) {
  throw new Error('Function not implemented.');
}

