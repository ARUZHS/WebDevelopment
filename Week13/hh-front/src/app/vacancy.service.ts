import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Vacancy } from './vacancy';


@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http: HttpClient) { }
  BASE_URL = 'http://localhost:8000'
  getVacancyList(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`);
  }
  getVacancy(id): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`);
  }

  deleteCompany(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/vacancies/${id}/`);
  }
}
