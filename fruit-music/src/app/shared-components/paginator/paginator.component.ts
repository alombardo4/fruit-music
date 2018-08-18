import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';

export interface PaginationEvent {
  pageIndex: number;
  pageSize: number;
}

@Component({
  selector: 'app-paginator',
  template: `
    <div class="paginator">
      <div class="buttons">
        <button mat-icon-button [disabled]="pageIndex === 0" (click)="handlePageChange(-1)"><mat-icon>arrow_left</mat-icon></button>
        <button mat-icon-button (click)="handlePageChange(1)"><mat-icon>arrow_right</mat-icon></button>
      </div>
      <div class="select">
        <mat-select [value]="pageSize" (change)="handleSizeChange($event)" placeholder="Items per page">
          <mat-option *ngFor="let size of pageSizeOptions" [value]="size">{{size}}</mat-option>
        </mat-select>
      </div>
    </div>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input()
  pageIndex;

  @Input()
  pageSize;

  @Input()
  pageSizeOptions;

  @Output()
  page = new EventEmitter<PaginationEvent>();
  
  constructor() { }

  ngOnInit() {
  }

  handlePageChange(movement: number) {
    let newPage = this.pageIndex + movement;
    if (newPage < 0) {
      newPage = 0;
    }
    this.page.emit({
      pageIndex: newPage,
      pageSize: this.pageSize
    });
  }

  handleSizeChange(event: MatSelectChange) {
    this.page.emit({
      pageIndex: this.pageIndex,
      pageSize: event.value
    });
  }

}
