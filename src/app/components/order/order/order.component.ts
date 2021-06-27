import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IChat } from 'src/app/models/ichat';
import { IMessage } from 'src/app/models/imessage';
import { IncommingReqest } from 'src/app/models/incomming-reqest';
import { IService } from 'src/app/models/IService';
import { IUser } from 'src/app/models/IUser';
import { AuthenticationService } from 'src/Services/authentication.service';
import { MessageService } from 'src/Services/message.service';
import { OrderService } from 'src/Services/order.service';
import { RateService } from 'src/Services/rate.service';
import { RegisterService } from 'src/Services/register.service';
import { ServiceService } from 'src/Services/service.service';
import { SubjectService } from 'src/Services/subject.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderId: number
  Order: IncommingReqest
  service: IService
  seller: IUser
  buyer: IUser
  userId = this.authService.getUserId()
  newMsg: IMessage = {
    chatID: 0,
    content: "",
    senderId: this.userId,
    date: new Date()


  }
  chat: IChat

  constructor(private serService: ServiceService, private router: Router
    , private activatedroute: ActivatedRoute
    , private rateService: RateService
    , private MsgService: MessageService
    , private authService: AuthenticationService
    , private orderService: OrderService
    , private _registerService: RegisterService) {


    this.activatedroute.params.subscribe(data => {
      this.orderId = data.id;
    });
  }

  ngOnInit(): void {

    this.orderService.getIncommingReqest(this.orderId)
      .subscribe(d => {
        console.log(d)
        this.Order = d
        this.serService.getService(this.Order.serviceID || 0)
          .subscribe(ser => {
            console.log(ser)
            this.service = ser
          })
        if (this.Order.chatID != null) {
          this.MsgService.getChat(this.Order.chatID).subscribe(
            d => this.chat = d
          )

        }
        this._registerService.getUserById(this.Order.sellerID).subscribe(
          user => this.seller = user
        )
        this._registerService.getUserById(this.Order.buyerID).subscribe(
          user => this.buyer = user
        )
      })
  }



  sendAcceptRequest() {
    this.Order.status = 2;
    this.orderService.updateIncommingReqest(this.orderId, this.Order).subscribe()
  }
  cancelOrder() {
    this.Order.status = 4;
    this.orderService.updateIncommingReqest(this.orderId, this.Order).subscribe()
  }
  AcceptOrder() {
    this.Order.status = 3;
    this.orderService.updateIncommingReqest(this.orderId, this.Order).subscribe()
    this.service.noOfBuyerServices = 1 +  (this.service.noOfBuyerServices || 0 )
    this.serService.updateService( (this.service.id || 0),this.service)
  }


  startchat() {
    let Msg = JSON.parse(JSON.stringify(this.newMsg))

    if (this.chat == null) {

      let newChat: IChat = {
        id: 0,
        userID: this.userId,
        freelancerID: this.service.userID,
        messages: [Msg],
        serviceID: this.service.id ,
        date: new Date()
      }
      
      this.MsgService.addChat(newChat).subscribe(
        d => {
          this.chat = newChat;
          this.Order.chatID = d;
          this.Order.status = 1;
          this.orderService.updateIncommingReqest(this.orderId, this.Order).subscribe()
          this.newMsg.content = ""

        },
        err => console.log(err)
      )
    }
    else {
      Msg.chatID = this.Order.chatID
      this.MsgService.sendMessage(Msg).subscribe(
        d => {
          this.chat.messages.push(Msg)
          this.newMsg.content = ""
        }
        , err => console.log(err)


      )


    }

  }
}
