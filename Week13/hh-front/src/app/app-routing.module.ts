import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';


const routes: Routes = [
  {path: 'vacancies', component: VacanciesComponent},
  {path: 'vacancies/:id', component: VacancyDetailComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/:id', component: CompanyDetailComponent},
  {path: '', redirectTo: 'companies', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
