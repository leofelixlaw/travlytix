import { Component, OnInit } from '@angular/core';
import Wow from 'wow.js';


@Component({
  selector: 'tix-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const wow = new Wow();
    wow.init();
  }
}
