import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './component/hello-world/hello-world.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HighLightDirective } from './component/Directives/high-light.directive';
import { HomeComponent } from './component/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TopbarComponent,
    ProductListComponent,
    HighLightDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
