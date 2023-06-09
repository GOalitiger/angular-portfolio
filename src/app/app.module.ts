import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicLayoutComponent } from './core/components/basic-layout/basic-layout.component';
import { TopNavComponent } from './core/components/top-nav/top-nav.component';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLayoutComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
