import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'search-by-type',
  templateUrl: './search-types.component.html'
})
export class SearchTypesComponent implements OnInit {

  typeLabel = '';
  searchBox: AbstractControl;

  @Input() type: 'courses' | 'teachers' | 'institutions' | 'subjects' | 'sylabus' | 'lessons';
  @Output() result: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchQuerry: EventEmitter<any> = new EventEmitter<any>();

  @Input('setInput') set value(value: string) {
    if (this.searchBox && value) {
      if (value != this.searchBox.value)
        this.searchBox.patchValue(value);
    }
  }

  constructor() {
    this.searchBox = new FormControl('');
  }

  ngOnInit() {
    this.setupSearchBox();
    this.typeLabel = this.type.charAt(0).toUpperCase() + this.type.substring(1);
  }

  private setupSearchBox(): void {
    this.searchBox.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((query: string) => {
          if (query != null) {
            this.searchQuerry.emit(query);
            return of([]);
          }
        })
      )
      .subscribe();
  }
}
