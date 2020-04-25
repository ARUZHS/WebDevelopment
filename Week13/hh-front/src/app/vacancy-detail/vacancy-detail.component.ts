import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../vacancy';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit {
  
  constructor(
    private vacancyService: VacancyService,
    private location: Location,
    private route: ActivatedRoute,
    ) { }
  @Input() vacancy: Vacancy
  ngOnInit(): void {
    this.getVacancy()
  }
  getVacancy(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacancyService.getVacancy(id).subscribe(
      vacancy => this.vacancy = vacancy
    )
  }
  goBack(): void {
    this.location.back();
  }
}
