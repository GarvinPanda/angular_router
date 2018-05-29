import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public abc: Router) { }

  // 两个放法
  gogoods(){
    this.abc.navigate(["/goods/aaa"])
  }
  godetail(){
    this.abc.navigate(["/detail/bbb"])
  }

  ngOnInit() {
  }

}
