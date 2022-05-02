import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'epagination',
  templateUrl: './epagination.component.html',
  styleUrls: ['./epagination.component.scss']
})
export class EpaginationComponent implements OnInit, OnDestroy {

  @Input() numDots: number = 0;
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 1;
  @Output() pageChange: Subject<number> = new Subject<number>();
  subscription!: Subscription;
  dots: number[] = [];

  constructor() {
  }


  ngOnInit(): void {
    this.buildDots(1);
    this.subscription = this.pageChange.subscribe(data => {
      this.buildDots(data);
    });
  }

  buildDots(currentPage: number) {
    if (this.totalPages <= 7) {
      this.dots = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
    else {
      let begin = 1;
      if (currentPage > 4)
        begin = currentPage - 3;
      if (currentPage >= (this.totalPages - 3))
        begin = this.totalPages - 6;
      this.dots = Array.from({ length: 7 }, (_, i) => i + begin);
    }
  }

  selectPage(dot: number) {
    this.currentPage = dot;
    this.pageChange.next(dot);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
