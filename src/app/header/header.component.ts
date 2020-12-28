import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tix-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  show: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate() {
    this.show = !this.show;
    this.router.navigate([this.router.url]);
  }
}
