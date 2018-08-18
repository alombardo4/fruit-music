import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './containers/library/library.component';
import { AlbumsComponent } from './containers/albums/albums.component';
import { Route, RouterModule } from '@angular/router';
import { MatTabsModule, MatPaginatorModule } from '@angular/material';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

const routes: Route[] = [
  {
    path: 'library',
    component: LibraryComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatPaginatorModule,
    SharedComponentsModule
  ],
  declarations: [LibraryComponent, AlbumsComponent]
})
export class LibraryModule { }
