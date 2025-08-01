import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtractor',
  standalone: true,
  imports: [],
  templateUrl: './subtractor.html',
  styleUrl: './subtractor.css'
})
export class Subtractor {
   @Input() sum!: number;
   result: number = 0;

   public getSub(): number{
      console.log("sum that recieved in substractor from parent", this.sum);
      this.result = this.sum - 10;
      return this.result;    
   }
}
