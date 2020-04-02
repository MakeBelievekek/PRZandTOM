import {Component, Input, OnInit} from '@angular/core';
import {Page} from '../../../enum/page';
import {UtilRepoService} from '../../../services/util-repo.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {

  @Input() pageShowing: string;

  constructor(private utilRepoService: UtilRepoService) {
    this.pageShowing = Page.FIRST;
  }

  ngOnInit(): void {
    console.log(this.pageShowing)
    // this.utilRepoService.progress.subscribe(
    //   pageToShow => {
    //     this.pageShowing = pageToShow;
    //     console.log('ezt kellene most látni: ', this.pageShowing)
    //       }
    //     );
  }
}
