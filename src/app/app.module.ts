import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleDirective } from './style.directive';
import { ComponentDirective } from './component.directive';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { ViewHolderComponent } from './view-holder/view-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    ComponentDirective,
    MycomponentComponent,
    ViewHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ViewHolderComponent,MycomponentComponent]
})
export class AppModule { }
