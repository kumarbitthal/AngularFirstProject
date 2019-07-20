import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayTopicsComponent } from './display-topics/display-topics.component';

const routes: Routes = [
  { path:'topics', component: DisplayTopicsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
