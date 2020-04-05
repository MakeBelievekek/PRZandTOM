import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {DiscountModel} from "../model/discount-model";
import {DiscountTableModel} from "../model/discount-table-model";
import {UtilRepoService} from "./util-repo.service";

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

  constructor(private utilRepoService: UtilRepoService) {

  }

  findValues(data: DiscountModel): DiscountModel {
    let discounts: DiscountModel = data;

    for (let disc of this.utilRepoService.getNumberOfInsured()) {
      if (disc.value === +data.numberOfInsured) {
        discounts.numberOfInsured = disc.discount;
      }
    }
    for (let disc of this.utilRepoService.getTypeOfFrequency()) {
      if (disc.value === +data.chargeFrequency) {
        discounts.chargeFrequency = disc.discount;
      }
    }
    for (let disc of this.utilRepoService.getPaymentMethods()) {
      if (disc.value === +data.paymentMethod) {
        discounts.paymentMethod = disc.discount;
      }
    }
    for (let disc of this.utilRepoService.getCampaignDiscount()) {
      if (disc.value === 1 + data.campaignDisc) {
        discounts.campaignDisc = disc.discount;
      }
    }
    for (let disc of this.utilRepoService.getCustomerDiscount()) {
      if (disc.value === 1 + data.customerDisc) {
        discounts.customerDisc = disc.discount;

      }
    }
    for (let disc of this.utilRepoService.getPolicyDiscounts()) {
      if (disc.value === +discounts.policyMethod) {
        discounts.policyMethod = disc.discount;
      }
    }
    return discounts;
  }

  addValuesToTable(discounts: DiscountModel): DiscountTableModel[] {
    const discountTableModel = [];

    if (discounts.numberOfInsured && discounts.numberOfInsured != 0) {
      discountTableModel.push({name: 'Family discount', value: discounts.numberOfInsured})
    }

    if (discounts.chargeFrequency && discounts.chargeFrequency != 0) {
      discountTableModel.push({name: 'Charge frequency discount', value: discounts.chargeFrequency})
    }

    if (discounts.paymentMethod && discounts.paymentMethod != 0) {
      discountTableModel.push({name: 'Payment method discount', value: discounts.paymentMethod})
    }

    if (discounts.policyMethod && discounts.policyMethod != 0) {
      discountTableModel.push({name: 'Policy discount', value: discounts.policyMethod})
    }

    if (discounts.campaignDisc && discounts.campaignDisc != 0) {
      discountTableModel.push({name: 'Campaign discount', value: discounts.campaignDisc})
    }

    if (discounts.customerDisc && discounts.customerDisc != 0) {
      discountTableModel.push({name: 'Customer discount', value: discounts.customerDisc})
    }

    return discountTableModel;
  }

  getValueForCircle(data: DiscountModel): number {
    let sum: number = 0;
    for (let prop in data) {
      sum += data[prop];
    }
    return 35 >= sum ? sum : 35;
  }

}


