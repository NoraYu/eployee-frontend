import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {apiUrl} from '../../environments/environment';
import {Employee} from '../models/employee';

class RequestDay {
}

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  allEmp(): Observable<Employee[]>{
    return  this.http.get<Employee[]>(`${apiUrl}`);
  }


    work(rq: RequestDay, id: number): Observable<Employee> {
    const url = `${apiUrl}/${id}/work`;
    return this.http.post<Employee>(url, rq);
  }

  takeVacation(rq: RequestDay, id: number): Observable<Employee>  {
    const url = `${apiUrl}/${id}/vacation`;
    return this.http.post<Employee>(url, rq);
  }
  getVday(id: number): Observable<number>{
    return  this.http.get<number>(`${apiUrl}/${id}/vday`); }

}
