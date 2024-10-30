import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-apphome',
  standalone: true,
  imports: [RouterModule,RouterOutlet,RouterLink,RouterLinkActive,AppComponent],
  templateUrl: './apphome.component.html',
  styleUrl: './apphome.component.css'
})
export class ApphomeComponent {

}
