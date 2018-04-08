import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductionPageComponent } from './production-page/production-page.component';
import { ProductionService } from "./services/production-service.service";
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about-me', component: AboutMePageComponent},
  {path: 'production', component: ProductionPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutMePageComponent,
    HomePageComponent,
    ProductionPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
