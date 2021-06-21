import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IChat } from 'src/app/models/ichat';
import { IMessage } from 'src/app/models/imessage';
import { IService } from 'src/app/models/IService';
import { MessageService } from 'src/Services/message.service';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {
  serviceId!: number
  userId!: string
  service!: IService

  newMsg: IMessage = {
    chatID: 0,
    content: "",
    senderId: "",
    date: new Date()


  }
  constructor(private MsgService: MessageService, private activatedroute: ActivatedRoute
    , private serService: ServiceService , private router: Router
  ) {

    this.activatedroute.params.subscribe(data => {
      this.serviceId = data.id;
      this.userId = data.userID;
      this.serService.getService(this.serviceId).subscribe(
        data => {
          this.service = data;
          console.log(data)
        },
        err => console.log(err)
      )
    })
  }

  ngOnInit(): void {


  }

  startchat() {
    let newChat: IChat = {
      id: 0,
      userID: "aa",
      freelancerID: this.service.userID,
      messages: [this.newMsg],
      serviceID: this.serviceId,
      date: new Date()
    }
    console.log(newChat)
    this.MsgService.addChat(newChat).subscribe(
      d => {

        this.router.navigate(["/message/"+d])
        
      },
      err => console.log(err)
    )
  }
}
