import { Component, OnInit } from '@angular/core';
import {Page} from "../../../enum/page";

@Component({
  selector: 'app-riders-parameter',
  templateUrl: './riders-parameter.component.html',
  styleUrls: ['./riders-parameter.component.css']
})
export class RidersParameterComponent implements OnInit {
  barState: string;
  constructor() { }

  ngOnInit(): void {
    this.barState = Page.THIRD;
  }

}
