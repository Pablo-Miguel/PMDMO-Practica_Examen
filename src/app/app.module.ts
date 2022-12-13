import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { ClickUpperDirective } from './directive/click-upper.directive';
import { TuberiaPruebaPipe } from './pipe/tuberia-prueba.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    ClickUpperDirective,
    TuberiaPruebaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
