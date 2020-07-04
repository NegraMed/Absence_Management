import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'app/shared/services.service';

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
})
export class ResponsibleComponent implements OnInit {

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
  }

}
