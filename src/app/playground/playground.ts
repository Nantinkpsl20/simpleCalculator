import { Component, ViewChild } from '@angular/core';
import { Adder } from '../adder/adder';
import { Subtractor } from '../subtractor/subtractor';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [Adder, Subtractor],
  templateUrl: './playground.html',
  styleUrl: './playground.css',
})
export class Playground {
  x: number = 0;
  y: number = 0;
  submitted: boolean = false;
  sum: number = 0;
  
  public increase(value: 'x' | 'y') {
    this[value]++;
    this.submitted = false;
  }

  public decrease(value: 'x' | 'y') {
    if (this[value] > 0) {
      // Prevent negative values
      this[value]--;
      this.submitted = false;
    } else {
      //message box
    }
  }

  public submit(xValue: number, yValue: number) {
    console.log('Submitted values:', xValue, yValue);
    this.submitted = true;
    return this.submitted;
  }

  public recieveSum(sum: number) {
    this.sum = sum; //we store the sum
    console.log('sum recieved in parent: ', this.sum);
  }
}
