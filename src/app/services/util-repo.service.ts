import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Page} from '../enum/page';

@Injectable({
  providedIn: 'root',
})
export class UtilRepoService {
  numOfInsureds: any [];
  typeOfFrequency: any [];
  policyDiscounts: any [];
  paymentMethods: any [];
  customerDiscount: any[];
  campaignDiscount: any[];
  discounts: any [];

  constructor() {
    this.numOfInsureds = [
      {name: '1 person', value: 1, discount: 0},
      {name: '2 person', value: 2, discount: 15},
      {name: '3 person', value: 3, discount: 15},
      {name: '4 person', value: 4, discount: 15},
      {name: '5 person', value: 5, discount: 15},
    ];

    this.typeOfFrequency = [
      {name: 'Year', value: 1, discount: 12},
      {name: 'Half', value: 2, discount: 8},
      {name: 'Quarter', value: 3, discount: 4},
      {name: 'Month', value: 4, discount: 0},
    ];
    this.discounts = [
      {name: 'Family discount', value: 0}, {name: 'Charge frequency discount', value: 0},
      {name: 'Payment method discount', value: 0}, {name: 'Policy discount', value: 0},
      {name: 'Campaign discount', value: 0}, {name: 'Customer discount', value: 0},
    ];
    this.policyDiscounts = [
      {name: '1%', value: 0.01, discount: 1},
      {name: '2%', value: 0.02, discount: 2},
      {name: '3%', value: 0.03, discount: 3},
      {name: '4%', value: 0.04, discount: 4},
      {name: '5%', value: 0.05, discount: 5},
      {name: '6%', value: 0.06, discount: 6},
      {name: '7%', value: 0.07, discount: 7},
      {name: '8%', value: 0.08, discount: 8},
      {name: '9%', value: 0.09, discount: 9},
      {name: '10%', value: 0.1, discount: 10},
    ];

    this.paymentMethods = [
      {name: 'cash', value: 1, discount: 0},
      {name: 'bank', value: 1, discount: 0},
      {name: 'direct bank', value: 1, discount: 0},
      {name: 'direct same bank', value: 2, discount: 5},
    ];

    this.campaignDiscount = [
      {name: 'false', value: 1, discount: 0},
      {name: 'true', value: 2,  discount: 10},
    ];

    this.customerDiscount = [
      {name: 'false', value: 1, discount: 0},
      {name: 'true', value: 2, discount: 10},
    ];
  }

  getDiscounts() {
    return this.discounts;
  }

  getNumberOfInsured() {
    return this.numOfInsureds;
  };

  getTypeOfFrequency() {
    return this.typeOfFrequency;
  }

  getPolicyDiscounts() {
    return this.policyDiscounts;
  }

  getPaymentMethods() {
    return this.paymentMethods;
  }

  getCustomerDiscount() {
    return this.customerDiscount;
  }

  getCampaignDiscount() {
    return this.campaignDiscount;
  }
}
