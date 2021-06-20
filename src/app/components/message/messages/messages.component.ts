import { Component, OnInit } from '@angular/core';
import { IChat } from 'src/app/Shared/ichat';
import { MessageService } from 'src/Services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  userId = "qq"
  inboxMsgs:IChat[] =[]
  outboxMsgs:IChat[] =[]

  constructor(private MsgService:MessageService) { }

  ngOnInit(): void {
    this.MsgService.getInboxMessages(this.userId).subscribe(
      data => this.inboxMsgs = data
    )
    this.MsgService.getOutboxMessages(this.userId).subscribe(
      data => this.outboxMsgs = data
    )
  }

}
