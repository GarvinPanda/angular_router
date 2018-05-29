import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  constructor(
    private ass: ActivatedRoute
  ) { }
  private goodsId : any
  ngOnInit() {
    console.log(this.ass.snapshot.params["goodsId"])
  }

}
