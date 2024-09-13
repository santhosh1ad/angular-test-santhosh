import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { identity } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isHome: boolean = false;

  isService: boolean = false;

  isContact: boolean = false;

  onClickContact() {
    this.isContact = true;
    this.isService = false;
    this.isHome = false;
  }

  onClickHome() {
    this.isContact = false;
    this.isService = false;
    this.isHome = true;
  }

  onClickService() {
    this.isContact = false;
    this.isService = true;
    this.isHome = false;
  }
}
