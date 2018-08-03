import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {AuthService} from './auth.service';
import {Routes,RouterModule, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NotAuthrizedComponent } from './not-authrized/not-authrized.component';

const route:Routes=[{
  path:"",
  component:LoginComponent,
},
{
  path:"user",
  component:UserComponent,
  canActivate:[AuthService]
},
{
  path:"notAuthrized",
  component:NotAuthrizedComponent
},
{
  path:"admin",
  component:AdminComponent,
  canActivate:[AuthService]
}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    NotAuthrizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
