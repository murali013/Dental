import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    autoplay: true,
    loop: true,
    delay: 1000,
    speed: 300
  };

  equipments = [
    {
      "name" : "Autoclaves",
      "price" : "Rs. 1,800.00",
      "img" : "./assets/images/equipments/Autoclaves.jpg"
    },
    {
      "name" : "Compressor",
      "price" : "Rs. 3,500.00",
      "img" : "./assets/images/equipments/Compressor.jpg"
    },
    {
      "name" : "Fumigation",
      "price" : "Rs. 2,000.00",
      "img" : "./assets/images/equipments/Fumigation.jpg"
    },
    {
      "name" : "Medical furniture",
      "price" : "Rs. 2,500.00",
      "img" : "./assets/images/equipments/medical-furniture.jpg"
    },
    {
      "name" : "Suction",
      "price" : "Rs. 4,000.00",
      "img" : "./assets/images/equipments/Suction.jpg"
    },
    {
      "name" : "Surgical Chairs",
      "price" : "Rs. 7,500.00",
      "img" : "./assets/images/equipments/Surgical-Chairs.jpg"
    },
    {
      "name" : "Surgical Lights",
      "price" : "Rs. 7,500.00",
      "img" : "./assets/images/equipments/surgical-lights.jpg"
    },
     {
      "name" : "X-Ray",
      "price" : "Rs. 7,500.00",
      "img" : "./assets/images/equipments/xray.jpg"
    } 
  ];
}
