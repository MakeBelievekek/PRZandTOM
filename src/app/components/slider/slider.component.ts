import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Options } from 'ng5-slider';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {

    sliderForm: FormGroup;

    value: number = 10;
    options: Options = {
        floor: 3,
        ceil: 35,
        showSelectionBar: true,

    };

    constructor(private formBuilder:FormBuilder) {

    }

    ngOnInit(): void {
    }

}
