import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GuitarComponent } from './guitar/guitar.component';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { GuitarService } from './services/guitar.service'

@NgModule({
  declarations: [
    AppComponent,
    GuitarComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [GuitarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
