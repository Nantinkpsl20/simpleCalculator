import { Component, EventEmitter, Input, Output}from '@angular/core';

@Component({
  selector: 'app-adder',
  standalone: true,
  imports: [],
  templateUrl: './adder.html',
  styleUrl: './adder.css'
})
export class Adder {
  @Input() xValue!: number;
  @Input() yValue!: number;
  sum: number = 0;
  @Output() emitSum = new EventEmitter<number>();

  public sendSum(){
    this.sum = this.xValue + this.yValue;
    this.emitSum.emit(this.sum); //send the result/sum to parent
  }
  
 public getSum(): number {
    this.sum = this.xValue + this.yValue;
    return this.sum;
 }



}
