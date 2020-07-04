import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'app/shared/services.service';


@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent{
    Id: any;
    FirstName: any;
    EmployeeUsername: any;
    EmployeePass: any;
    EmployeeCin: any;
    LastName: any;
    Email: any;
    Department: any;

  constructor(public service: ServicesService) {}

  ngOnInit() {

    this.Id =  localStorage.getItem('id');
}
  update() {
    const id = this.Id;
    const nom = this.FirstName;
    const username = this.EmployeeUsername;
    const pass = this.EmployeePass;
    const cin = this.EmployeeCin;
    const prenom = this.LastName;
    const email = this.Email;
    const department = this.Department;
    this.service.UpdateEmployee(id, nom, username, pass, cin, prenom, email, department).subscribe();
    console.log('works!')
    window.location.reload();
}
}
