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

   public getSub(): number{
      return this.sum -5;
       
   }
}
