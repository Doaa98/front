import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChat } from 'src/app/models/ichat';
import { IMessage } from 'src/app/models/imessage';
import { MessageService } from 'src/Services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  chatId!: number
  Chat!: IChat

  newMsg: IMessage = {
    id: 0,
    content: "",
    senderId: "qq",
    chatID: this.chatId,
    date: new Date()

  }
  constructor(private MsgService: MessageService
    , private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe(data => {
      this.chatId = data.ChatId;
      this.newMsg.chatID = this.chatId;
    })

  }

  ngOnInit(): void {
    this.MsgService.getChat(this.chatId).subscribe(
      data => {
        this.Chat = data
        console.log(data)
      }
    )
  }


  sendMsg() {
    if (this.newMsg.content.trim() != "") {
      this.MsgService.sendMessage(this.newMsg).subscribe(
        d => {
          this.Chat.messages.push(JSON.parse(JSON.stringify(this.newMsg)))
          this.newMsg.content = ""
        }
      )

    }
  }

}
