import {Component, Input, OnInit} from '@angular/core';
import {DiscountModel} from "../../../../../model/discount-model";
import {DiscountTableModel} from "../../../../../model/discount-table-model";
import {DiscountService} from "../../../../../services/discount-service";
import {InsuranceService} from "../../../../../services/insurance.service";


@Component({
  selector: 'app-discount-table',
  templateUrl: './discount-table.component.html',
  styleUrls: ['./discount-table.component.css'],
})
export class DiscountTableComponent implements OnInit {
  @Input() allDiscounts: DiscountTableModel[] = [];

  constructor(private discountService: DiscountService,
              private insuranceService: InsuranceService) {

  }

  ngOnInit(): void {
    // this.discountService.discount.subscribe((data) => {
    //
    //   this.discounts = this.discountService.findValues(data);
    //   let allDiscountPercent = 0;
    //   for (const prop in this.discounts) {
    //     if (this.discounts[prop] !== 0)
    //       allDiscountPercent += (+this.discounts[prop]);
    //   }
    //   this.discountService.allDiscount.next(allDiscountPercent)
    //   this.allDiscounts = [
    //     {name: 'Family discount', value: this.discounts.numberOfInsured},
    //     {name: 'Charge frequency discount', value: this.discounts.chargeFrequency},
    //     {name: 'Payment method discount', value: this.discounts.paymentMethod},
    //     {name: 'Policy discount', value: this.discounts.policyMethod},
    //     {name: 'Campaign discount', value: this.discounts.campaignDisc},
    //     {name: 'Customer discount', value: this.discounts.customerDisc},
    //   ];
    // })
  }


}
