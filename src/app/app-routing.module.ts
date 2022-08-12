import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from "./event-list/event-list.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";

const routes: Routes = [
  {path: 'event-list', component: EventListComponent},
  {path: '', component: WelcomePageComponent},
  {path: 'event-detail', component: EventDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
