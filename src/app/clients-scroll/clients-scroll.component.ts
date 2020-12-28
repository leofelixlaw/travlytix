import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tix-clients-scroll",
  templateUrl: "./clients-scroll.component.html"
})
export class ClientsScrollComponent implements OnInit {
  constructor() {}
  slides = [
    {img: "../assets/img/clients/malindo-air.png"},
    {img: "../assets/img/clients/thailion-air.png"},
    {img: "../assets/img/clients/thai-smile.png"},
    {img: "../assets/img/clients/flyone.png"},
    {img: "../assets/img/clients/malindoholidays.png"},
    {img: "../assets/img/clients/thailion-holidays.png"},
    {img: "../assets/img/clients/ethid-air.png"},
    {img: "../assets/img/clients/hongkong-air.png"},
    {img: "../assets/img/clients/hk-express.png"}    
  ];
  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  ngOnInit() {}
}
