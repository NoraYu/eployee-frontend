import { Component, OnInit } from '@angular/core';
import {EmpService} from '../services/emp.service';
import {ActivatedRoute, Router} from '@angular/router';

import {Employee} from '../models/employee';
import {Requestdays} from '../models/requestdays';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  rq: Requestdays;
  list: Employee[];

  constructor(private empService: EmpService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.empService.allEmp().subscribe(data => {
      this.list = data;
    });
  }

}
