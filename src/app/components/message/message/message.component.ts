import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IChat } from 'src/app/models/ichat';
import { IMessage } from 'src/app/models/imessage';
import { IUser } from 'src/app/models/IUser';
import { AuthenticationService } from 'src/Services/authentication.service';
import { MessageService } from 'src/Services/message.service';
import { RegisterService } from 'src/Services/register.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  chatId!: number
  Chat!: IChat
  customer:IUser
  freelancer:IUser

  newMsg: IMessage = {
    id: 0,
    content: "",
    senderId: this.authenticationService.getUserId(),
    chatID: this.chatId,
    date: new Date()

  }
  constructor(private MsgService: MessageService
    , private activatedroute: ActivatedRoute
    , private authenticationService: AuthenticationService
    , private _registerService: RegisterService
    , private router: Router
    ) {
      if (!authenticationService.isLoggedIn()) {
        router.navigateByUrl("/login")
      }
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
        this._registerService.getUserById(this.Chat.userID).subscribe(
          user => this.customer = user
        )
        this._registerService.getUserById(this.Chat.freelancerID).subscribe(
          user => this.freelancer =user
        )

        console.log(data)
      }
    )
  }


  sendMsg() {
    if (this.newMsg.content.trim() != "") {
      this.MsgService.sendMessage(this.newMsg).subscribe(
        d => {
          this.Chat.messages.push(JSON.parse(JSON.stringify(this.newMsg)))
          this.Chat.date = new Date()
          this.newMsg.content = ""
        }
      )

    }
  }

}
