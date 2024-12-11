import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from '../models/author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  // authors: any[] = [];
  selectedAuthor: any | null = null;
  error: string | null = null;
  authorForm: FormGroup;

  constructor(
    private authorService: AuthorService,
    private fb: FormBuilder
  ) {
    this.authorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.fetchAuthors();
  }

  fetchAuthors() {
    this.authorService.getAuthors().subscribe(
      (data: Author[]) => {
        this.authors = data;
        this.error = null;
      },
      error => {
        console.error('Error fetching authors', error);
        this.error = 'Failed to load authors. Please try again later.';
      }
    );
  }

  onSelect(author: any) {
    this.selectedAuthor = author;
  }

  createAuthor() {
    if (this.authorForm.valid) {
      const newAuthor = {
        ...this.authorForm.value,
        id: Date.now().toString()
      };
      this.authorService.createAuthor(newAuthor).subscribe(
        () => {
          this.fetchAuthors();
          this.authorForm.reset();
          this.selectedAuthor = null;
        },
        error => {
          console.error('Error creating author', error);
          this.error = 'Failed to create author. Please try again.';
        }
      );
    } else {
      this.error = 'Please fill in all required fields.';
    }
  }

  updateAuthor() {
    if (!this.selectedAuthor || !this.authorForm.valid) {
      this.error = 'Please select an author to update and ensure all fields are filled.';
      return;
    }
    
    const updatedAuthor = {
      ...this.selectedAuthor,
      ...this.authorForm.value
    };

    this.authorService.updateAuthor(this.selectedAuthor.id, updatedAuthor).subscribe(
      () => {
        this.fetchAuthors();
        this.authorForm.reset();
        this.selectedAuthor = null;
      },
      error => {
        console.error('Error updating author', error);
        this.error = 'Failed to update author. Please try again.';
      }
    );
  }

  deleteAuthor() {
    if (!this.selectedAuthor) {
      this.error = 'Please select an author to delete.';
      return;
    }

    this.authorService.deleteAuthor(this.selectedAuthor.id).subscribe(
      () => {
        this.fetchAuthors();
        this.authorForm.reset();
        this.selectedAuthor = null;
      },
      error => {
        console.error('Error deleting author', error);
        this.error = 'Failed to delete author. Please try again.';
      }
    );
  }

  onFormSubmit() {
    if (!this.selectedAuthor) {
      this.createAuthor();
    } else {
      this.updateAuthor();
    }
  }
}
