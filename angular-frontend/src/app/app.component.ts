
import { Component, OnInit } from '@angular/core';
import { GreetingService } from './services/greeting.service';

@Component({
  selector: 'app-root',
  template: '<h1>{{ greeting }}</h1>',
})
export class AppComponent implements OnInit {
  greeting = '';

  constructor(private greetingService: GreetingService) { }

  ngOnInit() {
    this.greetingService.getGreeting().subscribe(data => {
      this.greeting = data;
    });
  }
}

