import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'tix-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  blogDataListing: any = [];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    // this.blogService.getList().subscribe(result => {
    //   this.blogDataListing = result;
    // });
  }

}
