import { Injectable } from '@angular/core';
import { Eventi } from "./eventi";
import { EVENTS } from "./mock-events";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents(): Eventi[] {
    return EVENTS;
  }

  getEvent(id: number): Observable<Eventi> { 
    const event = EVENTS.find(h => h.id === id)!;
    return of(event)
  }

  constructor() { }
}
