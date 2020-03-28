import {Component, OnInit} from '@angular/core';
import {DiscountService} from "../../services/discount-service";


@Component({
  selector: 'app-percent-circle',
  templateUrl: './percent-circle.component.html',
  styleUrls: ['./percent-circle.component.css']
})
export class PercentCircleComponent implements OnInit {

  progress: number = 0;

  constructor(private discountService: DiscountService) {
  }

  ngOnInit(): void {
    this.discountService.allDiscount.subscribe((data) => {
      this.progress = data * 100;

    })
  }

}
