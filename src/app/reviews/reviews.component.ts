import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../sharedResource/reviews.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

  searchedKeyword: string = '';
  SortbyParam = '';
  SortDirection = 'asc';
  reviewer = [];
  revErrorMsg: any = '';
  myData: any[];

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.reviewsService.getReviews().subscribe(
      success => this.reviewer = success,
       error => this.revErrorMsg = error,
      //data => this.myData = data
    )
    //this.reviewsService.currentData().subscribe(
    //  data => this.myData = data
    //)
  }
 

  removeData(id) {
    this.myData = this.myData.filter(myData => myData.reviewerId !== id);
  }
}


//  reviewer: any[] = [
//    { reviewerId: 1001, reviewerName: 'Ananya', reviewerAddress: 'Varanasi', reviewerDescription: 'Lakme' , reviewerImage: '../assets/emp1.jpg' },

//    { reviewerId: 1002, reviewerName: 'Anajali', reviewerAddress: 'Maharastra', reviewerDescription: 'HudaBeauty', reviewerImage: '../assets/emp2.jpg' },

//    { reviewerId: 1003, reviewerName: 'Anusha', reviewerAddress: 'Indore', reviewerDescription:'Biotique', reviewerImage: '../assets/emp3.jpg' },
//    { reviewerId: 1004, reviewerName: 'Dipali', reviewerAddress: 'Maharastra', reviewerDescription:'Ponds',reviewerImage: '../assets/emp4.jpg' },
//    { reviewerId: 1005, reviewerName: 'Neha', reviewerAddress: 'Maharastra', reviewerDescription: 'VLCC', reviewerImage: '../assets/emp5.jpg' },
//  ]


//}
