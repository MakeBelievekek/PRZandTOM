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

  price : number = 500;
  additionalInsuranceForm: FormGroup;

    constructor(private utilRepoService: UtilRepoService, private formBuilder: FormBuilder) {
        this.additionalInsuranceForm = this.formBuilder.group({});
    }

  ngOnInit(): void {
    this.utilRepoService.progress.next(Page.SECOND);
    $('.counter-count').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }


}
