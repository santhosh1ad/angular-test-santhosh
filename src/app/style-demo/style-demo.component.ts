import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './style-demo.component.html',
  styleUrl: './style-demo.component.css',
})
export class StyleDemoComponent {
  selectedColor = 'black';
}
