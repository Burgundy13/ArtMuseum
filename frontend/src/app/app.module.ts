import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { ExibitionFormComponent } from './exibitions/exibition-form/exibition-form.component';
import { ExibitionDetailsComponent } from './exibitions/exibition-details/exibition-details.component';
import { ExibitionEditComponent } from './exibitions/exibition-edit/exibition-edit.component';
import { ExibitionItemComponent } from './exibitions/exibition-item/exibition-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArtworkDetailsComponent } from './artwork/artwork-details/artwork-details.component';
import { ArtworkItemComponent } from './artwork/artwork-item/artwork-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    ExibitionsComponent,
    ExibitionFormComponent,
    ExibitionDetailsComponent,
    ExibitionEditComponent,
    ExibitionItemComponent,
    ArtworkDetailsComponent,
    ArtworkItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
