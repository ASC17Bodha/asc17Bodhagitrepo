import { Component, OnInit } from '@angular/core';
import { Learner } from '../../models/learner.model';
import { LearnerService } from '../../services/learners.service';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
})
export class LearnersComponent implements OnInit {
  learners: Learner[] = [];
  learner: Learner = { id: '', name: '', email: '', phone: '', enrolledCourses: [] };
  editing: boolean = false;
  enrolledCoursesInput: string = '';

  constructor(private learnerService: LearnerService) {}

  ngOnInit(): void {
    this.getLearners();
  }

  getLearners(): void {
    this.learnerService.getAllLearners().subscribe((data) => (this.learners = data));
  }

  addLearner(): void {
    const enrolledCoursesArray = this.enrolledCoursesInput
      .split(',')
      .map((id) => id.trim());

    if (this.editing) {
      this.learner.enrolledCourses = enrolledCoursesArray;
      this.learnerService.updateLearner(this.learner.id, this.learner).subscribe(() => {
        this.getLearners();
        this.resetForm();
      });
    } else {
      this.learner.enrolledCourses = enrolledCoursesArray;
      this.learnerService.createLearner(this.learner).subscribe(() => {
        this.getLearners();
        this.resetForm();
      });
    }
  }

  editLearner(learner: Learner): void {
    this.learner = { ...learner };
    this.enrolledCoursesInput = learner.enrolledCourses.join(', ');
    this.editing = true;
  }

  deleteLearner(id: string): void {
    this.learnerService.deleteLearner(id).subscribe(() => this.getLearners());
  }

  resetForm(): void {
    this.learner = { id: '', name: '', email: '', phone: '', enrolledCourses: [] };
    this.enrolledCoursesInput = '';
    this.editing = false;
  }
}
