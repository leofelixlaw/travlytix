import { Component, OnInit, ViewChild } from "@angular/core";
import { BlogService } from "../blog.service";
import Typed from "typed.js/src/typed.js";

declare var require: any;
const defaultData: any = require("./shared/default-content.json");

@Component({
  selector: "tix-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  blogDataListing: any = [];
  authName = ["one", "two", "three", "four"];
  myInterval = 2500;
  viewMode = "tab0";
  tabList = defaultData.channel;

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    // this.blogService.getList().subscribe(result => {
    //   this.blogDataListing = result;
    // });

    const options = {
      strings: defaultData.headertitle,
      typeSpeed: 50,
      backSpeed: 20,
      showCursor: true,
      cursorChar: "|",
      loop: true
    };

    const typed = new Typed(".typed-element", options);

    this.myStyle = {
      position: "absolute",
      width: "100%",
      height: "100%",
      "z-index": 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams =  defaultData.myparticles;
  }
}
