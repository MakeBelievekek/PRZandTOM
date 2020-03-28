import {Component, OnInit} from '@angular/core';
import {DiscountService} from "../../services/discount-service";
import {DiscountModel} from "../../model/discount-model";

@Component({
  selector: 'app-discount-progress',
  templateUrl: './discount-progress.component.html',
  styleUrls: ['./discount-progress.component.css']
})
export class DiscountProgressComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

  }

}
