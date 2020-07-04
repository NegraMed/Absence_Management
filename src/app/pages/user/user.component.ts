import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'app/shared/services.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    Id: any;
    FirstName: any;
    ResponsibleUsername: any;
    ResponsiblePass: any;
    ResponsibleCin: any;
    LastName: any;
    DateOfBirth: any;
    PhoneNumber: any;
    Email: any;
    Location: any;
    Department: any;
    TeamSize: any;
    constructor(public service: ServicesService) { }
    ngOnInit() {
        this.Id =  localStorage.getItem('id');
    }
    update() {
        const id = this.Id;
        const nom = this.FirstName;
        const username = this.ResponsibleUsername;
        const pass = this.ResponsiblePass;
        const cin = this.ResponsibleCin;
        const prenom = this.LastName;
        const email = this.Email;
        const location = this.Location;
        const department = this.Department;
        const teamsize = this.TeamSize;
        this.service.UpdateResponsible(id, nom, username, pass, cin, prenom, email, location, department, teamsize).subscribe();
        console.log('works!')
    }
}
