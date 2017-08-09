import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { UserService} from './user.service';

const appRoutes: Routes =[
{
path:'',
component: LoginformComponent
},
{
path:'dashboard',
canActivate: [AuthguardGuard],
component: DashboardComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
