import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  template: `
    <nz-result nzStatus="500" nzTitle="500" nzSubTitle="Sorry, there is an error on server.">
      <div nz-result-extra>
        <button nz-button nzType="primary">Back Home</button>
      </div>
    </nz-result>
  `
})
export class ServerErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
