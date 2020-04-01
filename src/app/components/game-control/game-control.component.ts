import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startEvent = new EventEmitter();
  @Output() stopEvent = new EventEmitter();

  increment = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.interval = setInterval(() => {
      this.startEvent.emit(this.increment);
      this.increment++;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

}
