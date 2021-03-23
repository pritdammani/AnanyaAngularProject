import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Ireviews } from '../model/ireviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private url: string = "../assets/reviews.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";



  constructor(private httpClient: HttpClient) { }
  getReviews(): Observable<Ireviews[]> {
    return this.httpClient.get<Ireviews[]>(this.url)
  }
}
