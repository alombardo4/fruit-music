import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
