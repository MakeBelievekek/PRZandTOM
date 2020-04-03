import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Page} from '../../../enum/page';
import {UtilRepoService} from '../../../services/util-repo.service';

import * as $ from 'jquery';
import {SelectedInsurancesModel} from "./selectedInsurances.model";
import {Router} from "@angular/router";
import {query} from "@angular/animations";
import {InsuranceService} from "../../../services/insurance.service";


@Component({
  selector: 'app-additional-insurance',
  templateUrl: './additional-insurance.component.html',
  styleUrls: ['./additional-insurance.component.css'],
})
export class AdditionalInsuranceComponent implements OnInit {

  barState: string;
  price : number = 500;
  additionalInsuranceForm: FormGroup;
  selectedInsurances: SelectedInsurancesModel;
  constructor(private utilRepoService: UtilRepoService,
              private formBuilder: FormBuilder,
              private router: Router,
              private insuranceService: InsuranceService) {
    this.additionalInsuranceForm = this.formBuilder.group({
      accidental: [],
      traffic: [],
      surgical: [],
    });

  }

  ngOnInit(): void {
    this.additionalInsuranceForm.setValue(this.insuranceService.getSelectedInsurances());
    this.barState = Page.SECOND;
    this.counter();
  }

  counter() {
    $({countNum: $('.counter-count').html()}).animate({countNum: this.price+1}, {
      duration: 4000,
      easing: 'linear',
      step: function () {
        $('.counter-count').html(Math.floor(this.countNum)+" HUF" );
      },
    });
  }

  onNext() {
    this.selectedInsurances = {...this.additionalInsuranceForm.value}
    this.insuranceService.setSelectedInsurances(this.selectedInsurances);
    this.router.navigate(['/riders', ]);
  }

}
