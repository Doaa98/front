import { Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/Services/signal-r.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(public signalRService: SignalRService) { }

  ngOnInit(): void {
  }

}
