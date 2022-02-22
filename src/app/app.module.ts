import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertPointsComponent } from './components/points/insert-points/insert-points.component';
import { PointsComponent } from './components/points/points.component';
import { ImportPointsComponent } from './components/points/import-points/import-points.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertPointsComponent,
    PointsComponent,
    ImportPointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
