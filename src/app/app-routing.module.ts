import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeMainComponent } from './home-main/home-main.component';


const routes: Routes = [
   {path: 'about', component: AboutComponent},
   {path: '', component: HomeMainComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
