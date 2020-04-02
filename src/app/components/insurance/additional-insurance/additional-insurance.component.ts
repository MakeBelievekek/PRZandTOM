import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Page} from '../../../enum/page';
import {UtilRepoService} from '../../../services/util-repo.service';

import * as $ from 'jquery';


@Component({
  selector: 'app-additional-insurance',
  templateUrl: './additional-insurance.component.html',
  styleUrls: ['./additional-insurance.component.css'],
})
export class AdditionalInsuranceComponent implements OnInit {

  price: number = 500;
  additionalInsuranceForm: FormGroup;

  constructor(private utilRepoService: UtilRepoService, private formBuilder: FormBuilder) {
    this.additionalInsuranceForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.utilRepoService.progress.next(Page.SECOND);
    this.counter();
  }

  counter() {
    $({countNum: $('.counter-count').html()}).animate({countNum: this.price+1}, {
      duration: 4000,
      easing: 'linear',
      step: function () {
        $('.counter-count').html(Math.floor(this.countNum)+" HUF" );
      },
    });
  }

}
