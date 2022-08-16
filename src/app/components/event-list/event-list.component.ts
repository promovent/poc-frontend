import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service/event.service';
import { Eventi } from '../../interfaces/eventi';
import { EVENTS } from '../../mock-entities/mock-events';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Eventi[] = []

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.getEvent();
  }


  getEvent(): void {
    this.events = this.eventService.getEvents();
  }

}
