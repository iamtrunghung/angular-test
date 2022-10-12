import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  loginName = 'admin';
  counter = 0; // counter ở common = 1 -> counter++ = 2
  counterBinhPhuong = 0; // counter bình ở common = 1 // 1 = 2*2
  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhphuong(this.counter);
    this.common.counter++;
  }

}
