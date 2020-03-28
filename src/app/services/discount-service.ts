import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {DiscountModel} from "../model/discount-model";

@Injectable({
  providedIn: 'root',
})
export class DiscountService {

  discount = new Subject<DiscountModel>();
  allDiscount = new Subject<number>()
  numOfInsureds: any [];
  typeOfFrequency: any [];
  paymentMethods: any [];
  customerDiscount: any[];
  campaignDiscount: any[];

  constructor() {
    this.numOfInsureds = [
      {name: 1, value: 0},
      {name: 2, value: 0.15},
      {name: 3, value: 0.15},
      {name: 4, value: 0.15},
      {name: 4, value: 0.15},
    ];
    this.typeOfFrequency = [
      {name: 1, value: 0.12},
      {name: 2, value: 0.08},
      {name: 3, value: 0.04},
      {name: 4, value: 0},
    ];
    this.paymentMethods = [
      {name: 1, value: 0},
      {name: 2, value: 0.05}
    ];
    this.campaignDiscount = [
      {name: 1, value: 0.1},
      {name: 2, value: 0},
    ];
    this.customerDiscount = [
      {name: 1, value: 0.1},
      {name: 2, value: 0},
    ];
  }
  findValues(data: DiscountModel): DiscountModel {
    let discounts: DiscountModel = data;

    for (let disc of this.numOfInsureds) {
      if (disc.name == discounts.numberOfInsured) {
        discounts.numberOfInsured = disc.value;
      }
    }
    for (let disc of this.typeOfFrequency) {
      if (disc.name == discounts.chargeFrequency) {
        discounts.chargeFrequency = disc.value;
      }
    }
    for (let disc of this.paymentMethods) {
      if (disc.name == discounts.paymentMethod) {
        discounts.paymentMethod = disc.value;
      }
    }
    for (let disc of this.campaignDiscount) {
      if (disc.name == discounts.campaignDisc) {
        discounts.campaignDisc = disc.value;
      }
    }
    for (let disc of this.customerDiscount) {
      if (disc.name == discounts.customerDisc) {
        discounts.customerDisc = disc.value;
      }
    }
    return discounts
  }
}

