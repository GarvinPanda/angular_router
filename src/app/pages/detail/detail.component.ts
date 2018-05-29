import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    public ass: ActivatedRoute
  ) { }

  private goodsId : any

  ngOnInit() {
    // 获取商品的ID
    // console.log(this.ass.snapshot.queryParams["goodsId"])
    // this.goodsId = this.ass.snapshot.queryParams["goodsId"];
    console.log("参数快照监听变化："+ this.goodsId);

   this.ass.params.subscribe((params:Params)=>{
     console.log("参数订阅监听到的变化为："+params["goodsId"]);
     this.goodsId = params["goodsId"];
   })

  }

}
