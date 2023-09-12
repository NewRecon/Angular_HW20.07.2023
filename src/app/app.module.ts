import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/pages/about/about.component';
import { HomeComponent } from './component/pages/home/home.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { ContactsComponent } from './component/pages/contacts/contacts.component';
import { MessageComponent } from './component/pages/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    ContactsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
