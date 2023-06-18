import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant-frontend';


    reviews: any[] = [];
    newReview: string = '';

    constructor(private http: HttpClient) {}

    ngOnInit() {
      this.getReviews();
    }

    getReviews() {
      this.http.get<any[]>('http://localhost:8080/api/reviews').subscribe(reviews => {
        this.reviews = reviews;
      });
    }

    submitReview() {
      this.http.post<any>('http://localhost:8080/api/reviews', { review: this.newReview }).subscribe(response => {
        this.reviews.push(response);

        this.newReview = '';
      });
console.log("hell");
    }
}
