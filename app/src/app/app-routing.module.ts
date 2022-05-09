import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { HomeComponent } from './home/home.component';
import { SovahavenComponent } from './sovahaven/sovahaven.component';
import { SovaiceboxComponent } from './sovaicebox/sovaicebox.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: "sova",
    component: XyzComponent
  },

  {
    path: "sova/haven",
    component: SovahavenComponent
  },
  
  {
    path: "sova/icebox",
    component: SovaiceboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
