import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import  {ClintService} from '../clint.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee', // Corrected selector
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createEmployee!: FormGroup;

  constructor(private fb: FormBuilder, private Clint:ClintService, private router:Router) {}

  ngOnInit(): void {
    this.createEmployee = this.fb.group({
      name: [''],
      designation: [''],
      salary: ['']
    });
  }

  SaveEmployee() {
    // Implement your form submission logic here
    let body=this.createEmployee.value;
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
