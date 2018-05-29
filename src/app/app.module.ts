import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AaaComponent } from './components/aaa/aaa.component';
import { BbbComponent } from './components/bbb/bbb.component';
import { CccComponent } from './components/ccc/ccc.component';
import { HomeComponent } from './pages/home/home.component';
import { GoodsComponent } from './pages/goods/goods.component';
import { DetailComponent } from './pages/detail/detail.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Gurd1Component } from './gurds/gurd1/gurd1.component';

@NgModule({
  declarations: [
    AppComponent,
    AaaComponent,
    BbbComponent,
    CccComponent,
    HomeComponent,
    GoodsComponent,
    DetailComponent,
    Test1Component,
    Test2Component,
    Gurd1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
