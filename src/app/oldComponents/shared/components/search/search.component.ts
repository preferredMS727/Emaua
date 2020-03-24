import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import {
  fromEvent,
  Subject
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  skip,
  startWith,
  takeUntil,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('searchInput', { static: true }) private searchInput: ElementRef<HTMLInputElement>;
  isCollapsed: boolean = true;

  // searchNodeItems$: Observable<fromModels.Area[]>;
  // private _destroy: Subject<boolean> = new Subject();
  // private _destroy$: Observable<boolean> = this._destroy.asObservable();

  private get searchInputElement(): HTMLInputElement {
    if (this.searchInput) {
      const searchInputElement = this.searchInput.nativeElement;
      if (searchInputElement) {
        return searchInputElement;
      }
    }
  }

  constructor(
    // private store: Store<fromStates.AppState>,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute) {

    // this.searchNodeItems$ = store.select(fromSelectors.getAreaViewsData);
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.attachSearchHandler();
  }

  ngOnDestroy(): void {
    // this._destroy.next(true);
  }

  goToCoursesByArea(areaId: string) {
  }

  onSearch(searchQuery: string) {
  }

  mouseleave($event) {
  }

  private attachSearchHandler() {


  }
}
