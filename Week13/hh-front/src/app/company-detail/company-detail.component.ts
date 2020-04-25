import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  constructor(
    private companyService: CompanyService,
    private location: Location,
    private route: ActivatedRoute,
    ) { }
  @Input() company: Company
  ngOnInit(): void {
    this.getCompany()
  }
  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id).subscribe(
      company => this.company = company
    )
  }
  goBack(): void {
    this.location.back();
  }
}
