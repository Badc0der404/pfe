import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ProfileComponent } from './profile/profile.component';
import { OffersComponent } from './offers/offers.component';
import { QuizzComponent } from './quizz/quizz.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { AddOfferComponent } from './admin/add-offer/add-offer/add-offer.component';
import { UserManagComponent } from './admin/user-manag/user-manag/user-manag.component';
import { InterviewComponent } from './admin/interviews/interviews.component';
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo:"/home", pathMatch:"full"},
    {path: 'forgetpass', component: ForgetpassComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'offers', component: OffersComponent},
    {path: 'quizz', component: QuizzComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'add-offer', component: AddOfferComponent},
    {path: 'user-manag', component: UserManagComponent},
    {path: 'interviews', component: InterviewComponent},
];
