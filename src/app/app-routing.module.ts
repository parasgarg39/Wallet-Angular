import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfundsComponent } from './components/addfunds/addfunds.component';
import { AfterloginComponent } from './components/afterlogin/afterlogin.component';
import { DisplayAllComponent } from './components/display-all/display-all.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TransferfundsComponent } from './components/transferfunds/transferfunds.component';
import { WithdrawfundsComponent } from './components/withdrawfunds/withdrawfunds.component';
import { ContactusComponent } from './components/contactus/contactus.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path : 'addfunds', component: AddfundsComponent},
  { path : 'withdrawfunds', component: WithdrawfundsComponent},
  {path:'transferfunds',component:TransferfundsComponent},
  { path: 'faq', component: FaqComponent },
  {path:'contactus',component:ContactusComponent},
  // { path: 'registration', component: RegistrationComponent },
  // { path: 'details/:name', component: DeatailsComponent },
  { path: 'wallets', component: DisplayAllComponent },
  // { path: 'update/:id', component: UpdateComponent },
  { path: 'afterlogin', component: AfterloginComponent },
  // { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
