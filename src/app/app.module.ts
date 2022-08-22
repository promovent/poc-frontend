import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
// copy that link import
import { ClipboardModule } from 'ngx-clipboard';
import { MessagesComponent } from './components/messages/messages.component';
import { PromoterListComponent } from './components/promoter-list/promoter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavbarComponent,
    FooterComponent,
    EventListComponent,
    WelcomePageComponent,
    EventDetailComponent,
    MessagesComponent,
    PromoterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
