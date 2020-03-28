import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Page} from '../enum/page';

@Injectable({
    providedIn: 'root',
})
export class UtilRepoService {

    progress = new Subject<Page>();


  numOfInsureds: any [];
  typeOfFrequency: any [];
  policyDiscounts: any [];
  paymentMethods: any [];
  customerDiscount: any[];
  campaignDiscount: any[];
  discounts: any [];

  constructor() {
    this.numOfInsureds = [
      {name: '1 person', value: 1},
      {name: '2 person', value: 2},
      {name: '3 person', value: 3},
      {name: '4 person', value: 4},
      {name: '5 person', value: 5},
    ];

    this.typeOfFrequency = [
      {name: 'Year', value: 1},
      {name: 'Half', value: 2},
      {name: 'Quarter', value: 3},
      {name: 'Month', value: 4},
    ];
    this.discounts = [
      {name: 'Family discount', value: 0}, {name: 'Charge frequency discount', value: 0},
      {name: 'Payment method discount', value: 0}, {name: 'Policy discount', value: 0},
      {name: 'Campaign discount', value: 0}, {name: 'Customer discount', value: 0},
    ];
    this.policyDiscounts = [
      {name: '1%', value: 0.01},
      {name: '2%', value: 0.02},
      {name: '3%', value: 0.03},
      {name: '4%', value: 0.04},
      {name: '5%', value: 0.05},
      {name: '6%', value: 0.06},
      {name: '7%', value: 0.07},
      {name: '8%', value: 0.08},
      {name: '9%', value: 0.09},
      {name: '10%', value: 0.1},
    ];

    this.paymentMethods = [
      {name: 'cash', value: 1},
      {name: 'bank', value: 1},
      {name: 'direct bank', value: 1},
      {name: 'direct same bank', value: 2},
    ];

    this.campaignDiscount = [
      {name: 'true', value: 1},
      {name: 'false', value: 2},
    ];

    this.customerDiscount = [
      {name: 'true', value: 1},
      {name: 'false', value: 2},
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

  findValues(formValue) {
    for (let disc of this.campaignDiscount) {
      if (disc.name === formValue.campaignDisc.toString()) {
        formValue.campaignDisc = disc.value;

      }
    }

    for (let customer of this.customerDiscount) {
      if (customer.name === formValue.customerDisc.toString()) {
        formValue.customerDisc = customer.value;
      }
    }

  }
}
