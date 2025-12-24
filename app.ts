/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CapestoneProject');
} */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports : [ CommonModule, FormsModule],
  styleUrls: ['./app.css']
})
export class App {
  display: string = '0';       // current display
  expression: string = '';     // stores full calculation
  history: string[] = [];      // previous calculations

  // Handle button clicks
  press(value: string) {
    if (this.display === '0' && value !== '.') {
      this.display = value;
    } else {
      this.display += value;
    }
    this.expression = this.display;
  }

  // Clear everything
  clear() {
    this.display = '0';
    this.expression = '';
  }

  // Calculate result
  calculate() {
    try {
      const result = eval(this.expression);
      this.history.push(this.expression + ' = ' + result); // save to history
      this.display = result;
      this.expression = result.toString();
    } catch {
      this.display = 'Error';
      this.expression = '';
    }
  }
}