import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor(
    private companyService: CompanyService,
    ) { }
  companies : Company[];
  ngOnInit(): void {
    this.getCompanyList();
  }
  getCompanyList(){
    return this.companyService.getCompanyList().subscribe(
      companies => this.companies = companies
    );
  }
}
