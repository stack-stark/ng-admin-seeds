import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  template: `
    <app-result
      [title]="'Submission Failed'"
      [status]="'error'"
      [subTitle]="'Please check and modify the following information before resubmitting.'"
    >
      <div nz-result-content>
        <div class="desc">
          <h4 nz-title>The content you submitted has the following error:</h4>
          <p nz-paragraph>
            <i nz-icon nzType="close-circle"></i>
            Your account has been frozen <a>Thaw immediately &gt;</a>
          </p>
          <p nz-paragraph>
            <i nz-icon nzType="close-circle"></i>
            Your account is not yet eligible to apply <a>Apply immediately &gt;</a>
          </p>
        </div>
      </div>
    </app-result>
    `
})
export class ErrorFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
