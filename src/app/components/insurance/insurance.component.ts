import {Component, OnInit} from '@angular/core';
import {UtilRepoService} from "../../services/util-repo.service";
import {ActivatedRoute} from "@angular/router";
import {Page} from "../../enum/page";

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  showingPage: string;

  constructor(private utilRepoService: UtilRepoService,
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.showingPage = Page.FIRST;

    this.route.paramMap.subscribe(
      pageChanged => {
        let pageToShow = pageChanged.get('page');
        if (pageToShow) {
          this.showingPage = pageToShow;
        }
      }
    );

  }

  ngOnDestroy() {
    console.log('most halok meg')
  }

}
