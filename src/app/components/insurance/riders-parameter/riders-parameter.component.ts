import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

import {Page} from "../../../enum/page";
import {SelectedInsurancesModel} from "../additional-insurance/selectedInsurances.model";
import {InsuranceService} from "../../../services/insurance.service";

@Component({
  selector: 'app-riders-parameter',
  templateUrl: './riders-parameter.component.html',
  styleUrls: ['./riders-parameter.component.css']
})
export class RidersParameterComponent implements OnInit {
  barState: string;
  riderForm: FormGroup;
  selectedInsurances: SelectedInsurancesModel;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private insuranceService: InsuranceService) {
    this.riderForm = this.formBuilder.group({
      accidental: [],
      traffic: [],
      surgical: [],
    });
  }

  ngOnInit(): void {
    this.barState = Page.SECOND;
    this.selectedInsurances = this.insuranceService.getSelectedInsurances();
    console.log(this.route.snapshot.paramMap.has('id'));
  }

  onSubmit() {
  }

  onPrev() {
    this.insuranceService.setSelectedInsurances(this.selectedInsurances);
    this.router.navigate(['/additional']);
  }
}
