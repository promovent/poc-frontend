import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  content = 'Hai copiato correttamente il link';

  constructor(
    private clipboardApi: ClipboardService
  ) { }

  ngOnInit(): void {
  }

  copyText() {
    this.clipboardApi.copyFromContent(this.content);
  }
}
