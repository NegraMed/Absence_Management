import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServicesService } from 'app/shared/services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  FirstName: any;
  ResponsibleUsername: any;
  ResponsiblePass: any;
  Email: any;
  LastName: any;
  form: any;

  constructor(public service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('role', 'visitor');
  }
  ajout() {
    const nom = this.FirstName;
    const username = this.ResponsibleUsername;
    const pass = this.ResponsiblePass;
    const prenom = this.LastName;
    const email = this.Email;
    this.service.postResponsible(nom, username, pass, prenom,  email ).subscribe();
    console.log(email);


}
}
