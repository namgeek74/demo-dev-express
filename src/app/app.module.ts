import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule } from 'devextreme-angular';
import { DemoTableComponent } from './pages/demo-table/demo-table.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTableComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
