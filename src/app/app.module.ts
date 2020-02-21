import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxImageOverlayModule } from 'ngx-image-overlay';
import { Overlay } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImageOverlayModule
  ],
  exports: [],
  providers: [
    Overlay
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
