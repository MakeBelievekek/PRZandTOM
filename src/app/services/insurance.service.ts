import {Injectable} from '@angular/core';
import {SelectedInsurancesModel} from "../components/insurance/additional-insurance/selectedInsurances.model";
import {DiscountModel} from "../model/discount-model";
import {Subject} from "rxjs";
import {MainInsuranceModel} from "../model/main-insurance-model";

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  selectedInsurances: SelectedInsurancesModel;
  private _discounts: DiscountModel;
  private _discountChanges = new Subject<DiscountModel>();
  private _insuranceData: MainInsuranceModel;

  constructor() {
    this.selectedInsurances = {
      accidental: false,
      traffic: false,
      surgical: false,
    }
    this._discounts = {
      numberOfInsured: 0,
      chargeFrequency: 0,
      policyMethod: 0,
      paymentMethod: 0,
      campaignDisc: 0,
      customerDisc: 0,
    }


  }

  setSelectedInsurances(userSelectedInsurances: SelectedInsurancesModel) {
    this.selectedInsurances = userSelectedInsurances;
  }

  getSelectedInsurances() {
    return this.selectedInsurances;
  }

  setDiscounts(discounts: DiscountModel) {
    this._discounts = discounts;
  }


  getDiscounts(): DiscountModel {
    return this._discounts;
  }

  setDiscountChanges(discounts: DiscountModel) {
    this._discountChanges.next(discounts);
  }

  getDiscountsChanges() {
    return this._discountChanges;
  }

  getInsuranceData(): MainInsuranceModel {
    return this._insuranceData;
  }

  setInsuranceData(insurance: MainInsuranceModel) {
    this._insuranceData = insurance;
  }
}
