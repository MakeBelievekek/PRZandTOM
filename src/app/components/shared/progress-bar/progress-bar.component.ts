import {Component, OnInit} from '@angular/core';
import {Page} from '../../../enum/page';
import {UtilRepoService} from '../../../services/util-repo.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {

  pageShowing: string = 'main';

  constructor(private utilRepoService: UtilRepoService) {
  }

  ngOnInit(): void {
    this.utilRepoService.progress.subscribe(
      pageToShow => {
        this.pageShowing = pageToShow;
      }
    );
  }
}
