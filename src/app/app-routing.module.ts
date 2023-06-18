import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';

// const routes: Routes = [
//   { path: '', component: AppComponent },
//   { path: 'menu', component: MenuComponentComponent },
// ];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
