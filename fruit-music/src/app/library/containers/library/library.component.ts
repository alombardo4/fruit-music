import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  template: `
    <mat-tab-group>
      <mat-tab label="Albums">
        <app-albums></app-albums>
      </mat-tab>
    </mat-tab-group>
  `,
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
