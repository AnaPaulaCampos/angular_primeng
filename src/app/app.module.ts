import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './book-data/book-data.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, LivrosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
