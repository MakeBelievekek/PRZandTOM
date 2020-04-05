import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Options} from 'ng5-slider';
import {Page} from '../../../enum/page';
import {MainInsuranceModel} from '../../../model/main-insurance-model';
import {ApiService} from '../../../services/api-service';
import {UtilRepoService} from '../../../services/util-repo.service';
import {DiscountService} from "../../../services/discount-service";
import {DiscountModel} from "../../../model/discount-model";
import {FeeCalculationService} from "../../../services/fee-calculation.service";
import {DateModel} from "../../../model/date.model";
import {InsuranceService} from "../../../services/insurance.service";

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.css'],
})


export class MainInsuranceComponent implements OnInit {

  discounts: DiscountModel;
  barState: string;
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
  date: DateModel;
  insuranceData: MainInsuranceModel;

  constructor(private formBuilder: FormBuilder,
              private utilRepoService: UtilRepoService,
              private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute,
              private insuranceService: InsuranceService,
              private feeCalculationService: FeeCalculationService) {
    this.insuranceForm = this.formBuilder.group({
      amountOfIns: [],
      numberOfIns: [],
      insuranceDur: [],
      chargeFreq: [],
      policyDisc: [0],
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
    this.barState = Page.FIRST;
    let insurance = this.insuranceService.getInsuranceData();
    if (insurance) {
      this.insuranceForm.setValue({...insurance});
    }
  }

  sendValues() {
    this.insuranceService.setInsuranceData({...this.insuranceForm.value});
    this.insuranceData = this.insuranceService.getInsuranceData();
    this.insuranceData.customerDisc = 1 + this.insuranceForm.controls.customerDisc.value;
    this.insuranceData.campaignDisc = 1 + this.insuranceForm.controls.campaignDisc.value;
    this.date = {...this.model};
    // this.feeCalculationService.calculateFee(this.insuranceData, this.date).subscribe(
    //   value1 => {
    //     console.log(value1);
    //   }
    // );
    this.router.navigate([Page.SECOND])
    console.log('hello world')
  }


  selectHandler() {
    this.insuranceData = {...this.insuranceForm.value};
    this.insuranceService.setInsuranceData(this.insuranceData);

    const discounts: DiscountModel = {
      campaignDisc: this.insuranceForm.controls['campaignDisc'].value,
      chargeFrequency: this.insuranceForm.controls['chargeFreq'].value,
      customerDisc: this.insuranceForm.controls['customerDisc'].value,
      numberOfInsured: this.insuranceForm.controls['numberOfIns'].value,
      paymentMethod: this.insuranceForm.controls['paymentMethod'].value,
      policyMethod: this.insuranceForm.controls['policyDisc'].value,
    };
    this.discounts = discounts;
    this.insuranceService.setDiscounts(this.discounts);
    this.insuranceService.setDiscountChanges(this.discounts);
  }


}
