import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EventListComponent } from './event-list/event-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
// copy that link import
import { ClipboardModule } from 'ngx-clipboard';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavbarComponent,
    FooterComponent,
    EventListComponent,
    WelcomePageComponent,
    EventDetailComponent,
    MessagesComponent
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
