import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';
import { CommonModule } from '@angular/common';
import { TwoWayComponent } from './two-way/two-way.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, StyleDemoComponent, CommonModule, TwoWayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nav: boolean = false;
  style: boolean = false;
  twoWay = false;
  firstPage: boolean = true;
  navBar() {
    this.firstPage = false;
    this.nav = true;
    this.style = false;
    this.twoWay = false;
  }

  ngStyle() {
    this.firstPage = false;
    this.nav = false;
    this.style = true;
    this.twoWay = false;
  }

  twoWayBinding() {
    this.firstPage = false;
    this.nav = false;
    this.style = false;
    this.twoWay = true;
  }
}
