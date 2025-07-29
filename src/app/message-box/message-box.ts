import { Component, Input } from '@angular/core';
import { Card } from '../shared/card/card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-message-box',
  imports: [Card, NgClass],
  templateUrl: './message-box.html',
  styleUrl: './message-box.css'
})
export class MessageBox {
  @Input() title: 'Success' | 'Error' = 'Success';
  @Input() message = '';

}
