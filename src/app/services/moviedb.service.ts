import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  apiKey : string = "c46a2dd15015ce4720d7557d3c908c7c"

  constructor(public http: HttpClient) { }
}
