import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'app/shared/services.service';





@Component({
    selector: 'app-maps-cmp',
    templateUrl: 'maps.component.html',
    styleUrls: ['./maps.component.css']
})

export  class MapsComponent implements OnInit {
    role: any;
    username: any;
    password: any;
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
    returnMessageResponsible: any ;
    returnMessageEmployee: any ;
    alert: any ;
    constructor(public service: ServicesService, private router: Router) { }
    ngOnInit() {
        this.alert = ''
        localStorage.setItem('role', 'visitor');
        localStorage.setItem('id', 'null');
        localStorage.setItem('username', 'null');
    }

    loginResponsible() {
        const username = this.username;
        const password = this.password;
        const data = {username, password }
        this.service.loginResponsible(data).subscribe(
            res => {this.returnMessageResponsible = res;


        if ( this.returnMessageResponsible[0] ===  'wrong password' || this.returnMessageResponsible[0] ===  'wrong username' ) 
        { this.alert = this.returnMessageResponsible[0] } else  {
            localStorage.setItem('role', this.returnMessageResponsible[0]);
            localStorage.setItem('id', this.returnMessageResponsible[1]);
            if (this.returnMessageResponsible[2] === this.username) {
                this.router.navigate(['/table'])}
            }
        });
    }
    loginEmployee() {
        const username = this.username;
        const password = this.password;
        const data = {username, password }
        this.service.loginEmployee(data).subscribe(
            res => {this.returnMessageEmployee = res; 
            if ( this.returnMessageEmployee[0] ===  'wrong password' || this.returnMessageEmployee[0] ===  'wrong username' )
            { this.alert = this.returnMessageEmployee[0] } else {
            localStorage.setItem('role', this.returnMessageEmployee[0]);
            localStorage.setItem('id', this.returnMessageEmployee[1]);
            if (this.returnMessageEmployee[2] === this.username) {
                this.router.navigate(['/Profile'])}
            }
        });
    }

}
