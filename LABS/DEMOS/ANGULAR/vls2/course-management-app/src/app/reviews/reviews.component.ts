import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  // reviews: any[] = [];
  reviews: Review[] = [];
  selectedReview: any | null = null;
  error: string | null = null;
  reviewForm: FormGroup;

  constructor(
    private reviewService: ReviewService,
    private fb: FormBuilder
  ) {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchReviews();
  }

  fetchReviews() {
    this.reviewService.getReviews().subscribe(
      (data: Review[]) => {
        this.reviews = data;
        this.error = null;
      },      error => {
        console.error('Error fetching reviews', error);
        this.error = 'Failed to load reviews. Please try again later.';
      }
    );
  }

  onSelect(review: any) {
    this.selectedReview = review;
  }

  createReview() {
    if (this.reviewForm.valid) {
      const newReview = {
        ...this.reviewForm.value,
        id: Date.now().toString()
      };
      this.reviewService.createReview(newReview).subscribe(
        () => {
          this.fetchReviews();
          this.reviewForm.reset();
          this.selectedReview = null;
        },
        error => {
          console.error('Error creating review', error);
          this.error = 'Failed to create review. Please try again.';
        }
      );
    } else {
      this.error = 'Please fill in all required fields.';
    }
  }

  updateReview() {
    if (!this.selectedReview || !this.reviewForm.valid) {
      this.error = 'Please select a review to update and ensure all fields are filled.';
      return;
    }
    
    const updatedReview = {
      ...this.selectedReview,
      ...this.reviewForm.value
    };

    this.reviewService.updateReview(this.selectedReview.id, updatedReview).subscribe(
      () => {
        this.fetchReviews();
        this.reviewForm.reset();
        this.selectedReview = null;
      },
      error => {
        console.error('Error updating review', error);
        this.error = 'Failed to update review. Please try again.';
      }
    );
  }

  deleteReview() {
    if (!this.selectedReview) {
      this.error = 'Please select a review to delete.';
      return;
    }

    this.reviewService.deleteReview(this.selectedReview.id).subscribe(
      () => {
        this.fetchReviews();
        this.reviewForm.reset();
        this.selectedReview = null;
      },
      error => {
        console.error('Error deleting review', error);
        this.error = 'Failed to delete review. Please try again.';
      }
    );
  }

  onFormSubmit() {
    if (!this.selectedReview) {
      this.createReview();
    } else {
      this.updateReview();
    }
  }
}
