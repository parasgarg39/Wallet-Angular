import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AfterloginComponent } from './components/afterlogin/afterlogin.component';
import { DisplayAllComponent } from './components/display-all/display-all.component';
import {HttpClientModule} from '@angular/common/http';
import { AddfundsComponent } from './components/addfunds/addfunds.component';
import { WithdrawfundsComponent } from './components/withdrawfunds/withdrawfunds.component';
import { TransferfundsComponent } from './components/transferfunds/transferfunds.component';
import { FaqComponent } from './components/faq/faq.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ContactusComponent } from './components/contactus/contactus.component';
// import { ConfirmationDialogueComponent } from './components/confirmation-dialogue/confirmation-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AfterloginComponent,
    DisplayAllComponent,
    AddfundsComponent,
    WithdrawfundsComponent,
    TransferfundsComponent,
    FaqComponent,
    LogoutComponent,
    ContactusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
