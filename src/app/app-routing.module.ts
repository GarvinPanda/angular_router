import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AaaComponent } from './components/aaa/aaa.component';
import { BbbComponent } from './components/bbb/bbb.component';
import { CccComponent } from './components/ccc/ccc.component';
import { HomeComponent } from './pages/home/home.component';
import { GoodsComponent } from './pages/goods/goods.component';
import { DetailComponent } from './pages/detail/detail.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Gurd1 } from './gurds/gurd1';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent,
    children: [
      // {path:"",redirectTo:"aaa",pathMatch:"full"},
      {path: "aaa",component: AaaComponent},
      {path: "bbb",component: BbbComponent},
      {path: "ccc",component: CccComponent}
    ]
  },
  {
    path: 'goods/:goodsId',
    component: GoodsComponent,
    canActivate : [Gurd1],
    children: []
  },
  {
    path: 'detail/:goodsId',
    component: DetailComponent,
    children: []
  },
  {
    path: "test1",
    component: Test1Component,
    outlet: "test"
  },
  {
    path: "test2",
    component: Test2Component,
    outlet: "test"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Gurd1]
})
export class AppRoutingModule { }
