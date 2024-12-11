import { Component, OnInit } from '@angular/core';
import { LearnerService } from '../services/learner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Learner } from '../models/learner.model';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.css']
})
export class LearnersComponent implements OnInit {
  // learners: any[] = [];
  learners: Learner[] = [];
  selectedLearner: any | null = null;
  error: string | null = null;
  learnerForm: FormGroup;

  constructor(
    private learnerService: LearnerService,
    private fb: FormBuilder
  ) {
    this.learnerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.fetchLearners();
  }

  fetchLearners() {
    this.learnerService.getLearners().subscribe(
      (data: Learner[]) => {
        this.learners = data;
        this.error = null;
      },      error => {
        console.error('Error fetching learners', error);
        this.error = 'Failed to load learners. Please try again later.';
      }
    );
  }

  onSelect(learner: any) {
    this.selectedLearner = learner;
  }

  createLearner() {
    if (this.learnerForm.valid) {
      const newLearner = {
        ...this.learnerForm.value,
        id: Date.now().toString()
      };
      this.learnerService.createLearner(newLearner).subscribe(
        () => {
          this.fetchLearners();
          this.learnerForm.reset();
          this.selectedLearner = null;
        },
        error => {
          console.error('Error creating learner', error);
          this.error = 'Failed to create learner. Please try again.';
        }
      );
    } else {
      this.error = 'Please fill in all required fields.';
    }
  }

  updateLearner() {
    if (!this.selectedLearner || !this.learnerForm.valid) {
      this.error = 'Please select a learner to update and ensure all fields are filled.';
      return;
    }
    
    const updatedLearner = {
      ...this.selectedLearner,
      ...this.learnerForm.value
    };

    this.learnerService.updateLearner(this.selectedLearner.id, updatedLearner).subscribe(
      () => {
        this.fetchLearners();
        this.learnerForm.reset();
        this.selectedLearner = null;
      },
      error => {
        console.error('Error updating learner', error);
        this.error = 'Failed to update learner. Please try again.';
      }
    );
  }

  deleteLearner() {
    if (!this.selectedLearner) {
      this.error = 'Please select a learner to delete.';
      return;
    }

    this.learnerService.deleteLearner(this.selectedLearner.id).subscribe(
      () => {
        this.fetchLearners();
        this.learnerForm.reset();
        this.selectedLearner = null;
      },
      error => {
        console.error('Error deleting learner', error);
        this.error = 'Failed to delete learner. Please try again.';
      }
    );
  }

  onFormSubmit() {
    if (!this.selectedLearner) {
      this.createLearner();
    } else {
      this.updateLearner();
    }
  }
}
