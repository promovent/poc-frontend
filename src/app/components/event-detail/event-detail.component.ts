import { Component, Input, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { MessageService } from '../../services/message-service/message.service';
import { EventService } from '../../services/event-service/event.service';
import { Eventi } from '../../interfaces/eventi';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  content = 'Questo è il link che hai copiato';
  
  @Input() event? : Eventi

  constructor(
    private clipboardApi: ClipboardService,
    private messageService: MessageService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.eventService.getEvent(id).subscribe(event => this.event = event)
  }

  copyText() {
    this.clipboardApi.copyFromContent(this.content);
    this.messageService.add('Link copiato con successo')
  }
}
