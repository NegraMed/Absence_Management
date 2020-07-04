import { ResponsibleComponent } from './../info/responsible/responsible.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  body: any;
  id: any;
  userdata: any;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: max-line-length
  postResponsible(FirstName , ResponsibleUsername , ResponsiblePass ,  LastName,   Email ) {
  const body = {
    firstName: FirstName ,
    responsibleUsername : ResponsibleUsername ,
    responsiblePass : ResponsiblePass,
    lastName: LastName ,
    email:  Email,
    }
  console.log(FirstName);
  return this.http.post('https://localhost:44372/api/Responsible' , body);
  }
  postEmployee(FirstName , EmployeeUsername  , EmployeeCin , LastName,   Email ,  Department, Responsibleid ) {
    const body = {
      firstName: FirstName ,
      employeeUsername : EmployeeUsername ,
      employeeCin : EmployeeCin,
      lastName: LastName ,
      email:  Email,
      department: Department,
      responsibleid: Responsibleid,
    }
    console.log(FirstName);
    return this.http.post('https://localhost:44372/api/Employee' , body);
    }
    postContract(AbsenceDays , VacationDays  , years , Type, EmployeeId ) {
      const body = {
        absenceDays: AbsenceDays ,
        vacationDays : VacationDays ,
        years : years,
        type:  Type,
        employeeid: EmployeeId,
      }
      return this.http.post('https://localhost:44372/api/Contract' , body);
      }
    // tslint:disable-next-line: max-line-length
    UpdateResponsible(Id, FirstName , ResponsibleUsername , ResponsiblePass , ResponsibleCin , LastName,   Email , Location, Department , TeamSize) {
      const body = {
        firstName: FirstName ,
        responsibleUsername : ResponsibleUsername ,
        responsiblePass : ResponsiblePass,
        responsibleCin : ResponsibleCin,
        lastName: LastName ,
        email:  Email,
        location: Location,
        department: Department,
        teamSize: TeamSize,
      }
      return this.http.put('https://localhost:44372/api/Responsible/' + Id,  body);
      }
      // tslint:disable-next-line: max-line-length
      UpdateEmployee(Id, FirstName , EmployeeUsername  , EmployeePass, EmployeeCin , LastName,   Email ,  Department ) {
        const body = {
          employeepass: EmployeePass,
          firstName: FirstName ,
          employeeUsername : EmployeeUsername,
          lastName: LastName ,
          email:  Email,
          employeeCin : EmployeeCin,
          department: Department,
        }
        return this.http.put('https://localhost:44372/api/Employee/' + Id,  body);
        }
  getUsers(id) {
      return this.http.get( 'https://localhost:44372/api/Employee/GetbyResponsible?id=' + id);
  }
  loginResponsible(userdata) {
    return this.http.post('https://localhost:44372/api/Responsible/Login', userdata);
  }
  loginEmployee(userdata) {
    return this.http.post('https://localhost:44372/api/Employee/Login', userdata);
  }
  getEmployeeId(email) {
    return this.http.get( 'https://localhost:44372/api/Employee/GetIdByEmail?email=' + email);

  }
}
