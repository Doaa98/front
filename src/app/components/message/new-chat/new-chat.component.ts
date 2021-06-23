import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IChat } from 'src/app/models/ichat';
import { IMessage } from 'src/app/models/imessage';
import { IService } from 'src/app/models/IService';
import { AuthenticationService } from 'src/Services/authentication.service';
import { MessageService } from 'src/Services/message.service';
import { RegisterService } from 'src/Services/register.service';
import { ServiceService } from 'src/Services/service.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {
  serviceId!: number
  userId = this.authenticationService.currentUserValue.id
  service!: IService

  newMsg: IMessage = {
    chatID: 0,
    content: "",
    senderId: this.userId,
    date: new Date()


  }
  constructor(private MsgService: MessageService, private activatedroute: ActivatedRoute
    , private serService: ServiceService , private router: Router
    , private authenticationService: AuthenticationService
    , private _registerService: RegisterService

  ) {

    this.activatedroute.params.subscribe(data => {
      this.serviceId = data.id;
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

this.authenticationService.currentUser.subscribe(d=>console.log(d))

 this._registerService.getCurrentUser().subscribe(d=>console.log(d))
  }

  startchat() {
    let newChat: IChat = {
      id: 0,
      userID: this.userId,
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
