import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/Services/message.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {

  constructor(private MsgService:MessageService  , private activatedroute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

}
