import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor() { }
  products = [
    {
      name: 'Phone XL',
      description: 'A large phone with one of the best screens',
      price: 700
    },
    {
      name: 'Phone Mini',
      description: 'A great of with one of the best cameras',
      price: 800
    },
    {
      name: 'Phone Standard'
    }
  ]
  ngOnInit(): void {
  }
  share(){
    window.alert('The product has been shared');
  }
}
