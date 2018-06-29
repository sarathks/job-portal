import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import {AjaxService} from './ajax.service';

import { AppComponent } from './app.component';
import { PortalPageComponent } from './portal-page/portal-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddNewComponent } from './add-new/add-new.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
  {
    path:'',
    component:PortalPageComponent
  },
  {
    path:'add-new',
    component:AddNewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PortalPageComponent,
    HeaderComponent,
    FooterComponent,
    AddNewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
