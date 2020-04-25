import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../vacancy';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  constructor(private vacancyService: VacancyService) { }
  vacancies : Vacancy[];
  ngOnInit(): void {
    this.getVacancies()
  }
  getVacancies(): void {
    this.vacancyService.getVacancyList().subscribe(
      vacancies => this.vacancies = vacancies
    )
  }
}