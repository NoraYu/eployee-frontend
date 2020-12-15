import { Component, OnInit } from '@angular/core';
import {EmpService} from '../../services/emp.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Employee} from '../../models/employee';
import {Requestdays} from '../../models/requestdays';

@Component({
  selector: 'app-add-workdays',
  templateUrl: './add-workdays.component.html',
  styleUrls: ['./add-workdays.component.css']
})
export class AddWorkdaysComponent implements OnInit {
  emp: Employee;
  empId: number;
  rq: Requestdays;
  days: number;
  title: string;
  iswork: boolean;
  isvac: boolean;
  vday: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private empService: EmpService) {
  }

  ngOnInit(): void {
    this.empId = this.activatedRoute.snapshot.params.id;
    console.log(this.activatedRoute.toString().includes('work'));
    if (this.activatedRoute.toString().includes('work')){
      this.iswork = true;
    }
    if (this.activatedRoute.toString().includes('vacation')){
      this.isvac = true;
    }
    console.log('work:' + this.iswork + ' isv: ' + this.isvac);
    this.rq = new Requestdays();
    if (this.isvac) {
      this.title = 'Take Vacation';
    } else {
      this.title = 'Set Work Days';
    }
    this.empService.getVday(this.empId).subscribe(data => this.vday = data);
  }

  onSubmit(): void {
    console.log(this.iswork);
    if (this.iswork) {
      if ( this.rq.days < 0 || this.rq.days > 260){
        window.alert('Please enter a number between 0(exclude) and 260');
        this.rq.days = 0;
      }
      else{
      this.empService.work(this.rq, this.empId).subscribe(data => {
        this.emp = data;
        // console.log(this.emp.id + 'v:' + this.emp.vacationDays + 'w' + this.emp.workDays);
        this.router.navigate([`/all`]);
      }, e => {
      }); }
    } else {

      if ( this.rq.days < 0 || this.rq.days > this.vday){
        window.alert('Please enter a number between 0(exclude) and ' + this.vday + '. you do not have enough vacation days left');
        this.rq.days = 0;
      }
      else {
      this.empService.takeVacation(this.rq, this.empId).subscribe(data => {
        this.emp = data;
        this.router.navigate([`/all`]);
      }, e => {
      }); }
    }
  }
}
