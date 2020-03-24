import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICoursesPagination } from '../../shared/interfaces/course-pagination.interface';

@Injectable({providedIn: 'root'})
export class SearchService {


  constructor(protected httpClient: HttpClient) {}

  public searchCourseByTitle(query: string): any {
  }
}