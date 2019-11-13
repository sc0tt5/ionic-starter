import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'new-item',
    loadChildren: () => import('./pages/new-item/new-item.module').then(m => m.NewItemPageModule)
  },
  {
    path: 'update-item/:id',
    loadChildren: () =>
      import('./pages/update-item/update-item.module').then(m => m.UpdateItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
