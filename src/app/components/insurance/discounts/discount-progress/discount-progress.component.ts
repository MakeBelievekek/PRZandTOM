import {Component, OnInit} from '@angular/core';
import {DiscountModel} from "../../../../model/discount-model";
import {InsuranceService} from "../../../../services/insurance.service";

@Component({
  selector: 'app-discount-progress',
  templateUrl: './discount-progress.component.html',
  styleUrls: ['./discount-progress.component.css']
})
export class DiscountProgressComponent implements OnInit {

  discounts: DiscountModel;

  constructor(private insuranceService: InsuranceService) {
  }

  ngOnInit(): void {
    this.discounts = this.insuranceService.getDiscounts();
    this.insuranceService.getDiscountsChanges().subscribe(
      (discounts) => this.discounts = discounts
    );
  }

}
