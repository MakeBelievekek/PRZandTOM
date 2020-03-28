import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Options} from 'ng5-slider';
import {Page} from '../../enum/page';
import {MainInsuranceModel} from '../../model/main-insurance-model';
import {ApiService} from '../../services/api-service';
import {UtilRepoService} from '../../services/util-repo.service';
import {DiscountService} from "../../services/discount-service";
import {DiscountModel} from "../../model/discount-model";
import {BackendService} from "../../services/backend.service";
import {log} from "util";

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.css'],
})


export class MainInsuranceComponent implements OnInit {

  insuranceForm: FormGroup;
  numberOfInsuredValues: any[];
  typeOfFrequency: any[];
  policyDiscounts: any[];
  paymentMethods: any [];
  model: NgbDateStruct;
  value: number = 10;
  options: Options = {
    floor: 3,
    ceil: 35,
    showSelectionBar: true,

  };

  constructor(private formBuilder: FormBuilder,
              private utilRepoService: UtilRepoService,
              private apiService: ApiService,
              private router: Router,
              private discountService: DiscountService,
              private backendService: BackendService) {
    this.insuranceForm = this.formBuilder.group({
      amountOfIns: [],
      numberOfIns: [],
      insuranceDur: [],
      chargeFreq: [],
      policyDisc: [],
      paymentMethod: [],
      campaignDisc: [false],
      customerDisc: [false],
    });
    this.numberOfInsuredValues = this.utilRepoService.getNumberOfInsured();
    this.typeOfFrequency = this.utilRepoService.getTypeOfFrequency();
    this.policyDiscounts = this.utilRepoService.getPolicyDiscounts();
    this.paymentMethods = this.utilRepoService.getPaymentMethods();
  }

  ngOnInit(): void {
    this.utilRepoService.progress.next(Page.FIRST);
  }

  getValues(): MainInsuranceModel {
    const formValue: MainInsuranceModel = {
      amountOfIns: this.insuranceForm.controls['amountOfIns'].value,
      campaignDisc: this.insuranceForm.controls['campaignDisc'].value,
      chargeFreq: this.insuranceForm.controls['chargeFreq'].value,
      customerDisc: this.insuranceForm.controls['customerDisc'].value,
      insuranceDur: this.insuranceForm.controls['insuranceDur'].value,
      numberOfIns: this.insuranceForm.controls['numberOfIns'].value,
      paymentMethod: this.insuranceForm.controls['paymentMethod'].value,
      policyDisc: this.insuranceForm.controls['policyDisc'].value,
    };
    this.utilRepoService.findValues(formValue);

    return formValue;
  }

  sendValues() {
    // this.apiService.calculate(this.getValues()).subscribe(() => {
    //   console.log(this.getValues())
    // });
    this.backendService.firstStep().subscribe(value1 => console.log('ez már a csecsen beckend: ', value1))
  }

  selectHandler() {
    const discounts: DiscountModel = {
      campaignDisc: this.insuranceForm.controls['campaignDisc'].value,
      chargeFrequency: this.insuranceForm.controls['chargeFreq'].value,
      customerDisc: this.insuranceForm.controls['customerDisc'].value,
      numberOfInsured: this.insuranceForm.controls['numberOfIns'].value,
      paymentMethod: this.insuranceForm.controls['paymentMethod'].value,
      policyMethod: this.insuranceForm.controls['policyDisc'].value,
    };
    this.utilRepoService.findValues(discounts);
    for (const prop in discounts) {
      if (discounts[prop] === null) {
        discounts[prop] = 0;
      }

    }

    this.sendDiscount(discounts);
  }

  sendDiscount(data) {
    this.discountService.discount.next(data)

  }
}
