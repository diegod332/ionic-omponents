import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'gears-of-war',
    loadChildren: () => import('./gears-of-war/gears-of-war.module').then( m => m.GearsOfWarPageModule)
  },
  {
    path: 'god-of-war',
    loadChildren: () => import('./god-of-war/god-of-war.module').then( m => m.GodOfWarPageModule)
  },
  {
    path: 'halo',
    loadChildren: () => import('./halo/halo.module').then( m => m.HaloPageModule)
  },
  {
    path: 'dark-souls',
    loadChildren: () => import('./dark-souls/dark-souls.module').then( m => m.DarkSoulsPageModule)
  },
  {
    path: 'uncharted',
    loadChildren: () => import('./uncharted/uncharted.module').then( m => m.UnchartedPageModule)
  },
  {
    path: 'red-dead-redemption',
    loadChildren: () => import('./red-dead-redemption/red-dead-redemption.module').then( m => m.RedDeadRedemptionPageModule)
  },
  {
    path: 'super-mario-bros',
    loadChildren: () => import('./super-mario-bros/super-mario-bros.module').then( m => m.SuperMarioBrosPageModule)
  },
  {
    path: 'cod',
    loadChildren: () => import('./cod/cod.module').then( m => m.CodPageModule)
  },
  {
    path: 'kof',
    loadChildren: () => import('./kof/kof.module').then( m => m.KofPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
