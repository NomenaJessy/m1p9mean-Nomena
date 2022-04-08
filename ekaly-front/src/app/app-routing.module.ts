import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { LoginComponent } from './components/login/login.component';
import { PlatComponent } from './components/plat/plat.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  },
  {
    path: 'plat',
    component: PlatComponent
  },
  {
    path: 'commande',
    component: CommandeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
