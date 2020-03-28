import { Component, OnInit } from '@angular/core';
import { Page } from '../../enum/page';
import { UtilRepoService } from '../../services/util-repo.service';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {

    constructor(private utilRepoService: UtilRepoService) {
    }

    isFirstPage: boolean;
    isSecondPage: boolean;
    isThirdPage: boolean;

    ngOnInit(): void {
        this.utilRepoService.progress.subscribe((data) => {
            if (data === Page.FIRST) {
                this.isFirstPage = true;
                this.isSecondPage = false;
                this.isThirdPage = false;
            }
            if (data === Page.SECOND) {
                console.log(Page.SECOND);
                this.isSecondPage = true;
                this.isFirstPage = false;
                this.isThirdPage = false;
            }
            if (data === Page.THIRD) {
                this.isFirstPage = false;
                this.isSecondPage = false;
                this.isThirdPage = true;
            }
        });
    }
}
