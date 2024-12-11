
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-beverage-form',
  templateUrl: './beverage-form.component.html', 
})


export class BeverageFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tea: true,
      coffee: false,
      milk: false
    });
  }

// The get syntax binds an object property to a function that will be called when that property is looked up.
   get formBeverages() {
    const formData = this.form.value;
    const selectedBeverages = ['tea', 'coffee', 'milk'].filter(bev => formData[bev]);
    const formDataObject =  {
      name: formData.name,
      email: formData.email,
      beverages: selectedBeverages
    };
    console.log(formDataObject);
    return formDataObject;
  }
}