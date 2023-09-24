import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layaout/header/header.component';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './components/layaout/side-nav/side-nav.component';
import { HomeDashboardComponent } from './components/dashboard/home-dashboard/home-dashboard.component';
import { AdministrationSystComponent } from './components/dashboard/administration-syst/administration-syst.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { WebcamModule } from 'ngx-webcam';
import { ChartModule, LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService  } from '@syncfusion/ej2-angular-charts';

//we need to import this before using form in angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackOneComponent } from './components/snack-bar/snack-one/snack-one.component';
import { FooterComponent } from './components/layaout/footer/footer.component';
import { AdministrationPeopleComponent } from './components/dashboard/administration-people/administration-people.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    HomeDashboardComponent,
    AdministrationSystComponent,
    LoginComponent,
    SnackOneComponent,
    FooterComponent,
    AdministrationPeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule,
    ChartModule
  ],
  providers: [LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
