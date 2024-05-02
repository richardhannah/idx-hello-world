import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit  {

  time: Observable<string>;
  currentTime: string  = "time";

  constructor() {
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => {
        observer.next(new Date().toUTCString());
      }, 1000);
    })
  }
  ngOnInit(): void {
    this.time.subscribe((data) => {
      this.currentTime = data;
    })
  }
  
}
