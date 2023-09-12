import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { ContactsComponent } from './component/pages/contacts/contacts.component';
import { MessageComponent } from './component/pages/message/message.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"message",component:MessageComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }