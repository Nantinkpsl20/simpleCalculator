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
  @Output() emitSum = new EventEmitter<number>();

  public getSum(): number {
    const result = this.xValue + this.yValue;
    this.emitSum.emit(result);
    return result;
  }

}
