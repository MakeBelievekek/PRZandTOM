import {Component, OnInit} from '@angular/core';
import {DiscountModel} from "../../../../model/discount-model";
import {InsuranceService} from "../../../../services/insurance.service";
import {DiscountTableModel} from "../../../../model/discount-table-model";
import {DiscountService} from "../../../../services/discount-service";

@Component({
  selector: 'app-discount-progress',
  templateUrl: './discount-progress.component.html',
  styleUrls: ['./discount-progress.component.css']
})
export class DiscountProgressComponent implements OnInit {

  discounts: DiscountModel;
  allDiscounts: DiscountTableModel[] = [];
  progress: number;

  constructor(private insuranceService: InsuranceService, private discountService: DiscountService) {
  }

  ngOnInit(): void {
    this.discounts = this.insuranceService.getDiscounts();

    this.allDiscounts = this.discountService.addValuesToTable(this.discountService.findValues(this.insuranceService.getDiscounts()));
    this.insuranceService.getDiscountsChanges().subscribe(
      (value) => {
        this.discounts = value;
        this.allDiscounts = this.discountService.addValuesToTable(this.discountService.findValues(this.discounts));
        this.progress = this.discountService.getValueForCircle(this.discountService.findValues(this.discounts))
        console.log(this.progress)
      }
    );

  }

}
