import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpListComponent} from './emp-list/emp-list.component';

import {AddWorkdaysComponent} from './components/add-workdays/add-workdays.component';

const routes: Routes = [
  {path: '', redirectTo: '/all', pathMatch: 'full'},
  {path: 'all', component: EmpListComponent},
  {path: 'emp/:id/work', component: AddWorkdaysComponent},
  {path: 'emp/:id/vacation', component: AddWorkdaysComponent},
  {path: '**', redirectTo: '/all', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
