import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { RouterModule, Route } from '@angular/router';
import { ServicesModule } from './services/services.module';
import { LoginModule } from './login/login.module';
import { LibraryModule } from './library/library.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';

const routes: Route[] = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ServicesModule,
    SharedComponentsModule,
    RouterModule.forRoot(routes),
    HomeModule,
    LoginModule,
    LibraryModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
