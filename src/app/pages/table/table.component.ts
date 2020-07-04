import { ServicesService } from 'app/shared/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    responsibleUsername: any;
    responsibleId: any;
    Users: any;
    EmployeeId: any;
    FirstName: any;
    EmployeeUsername: any;
    EmployeeCin: any;
    LastName: any;
    Email: any;
    Department: any;
    email: any;
    test: any;
    AbsenceDays: any;
    VacationDays: any;
    years: any;
    Type: any;
    employeeid: any;
    EmployeeEmail: any;
    constructor(public service: ServicesService) { }
    ngOnInit() {

        this.responsibleId = localStorage.getItem('id');
        this.service.getUsers( this.responsibleId).subscribe(res => {
            this.Users = res;
            console.log(this.Users.firstName);
        });
    }
    ajoutemploye() {
        const nom = this.FirstName;
        const username = this.EmployeeUsername;
        const cin = this.EmployeeCin;
        const prenom = this.LastName;
        const email = this.Email;
        const department = this.Department;
        const responsibleid = this.responsibleId;
        this.service.postEmployee(nom, username,  cin, prenom,  email,  department, responsibleid ).subscribe();
        console.log(email);
    }
    ajoutContract() {
        const employee = this.employeeid;
        const absencedays = this.AbsenceDays;
        const vacationdays = this.VacationDays;
        const years = this.years;
        const type = this.Type;
        this.service.postContract(absencedays, vacationdays, years, type, this.employeeid ).subscribe();
    }
    choisirEmployee(){
        this.service.getEmployeeId(this.EmployeeEmail).subscribe(res => {this.employeeid = res; });
        console.log(this.employeeid);
    }
    getUsers() {
    }
}
