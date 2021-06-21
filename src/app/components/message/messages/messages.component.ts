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
  isDropdown = false

  showInbox = true
  showOut =false
  inboxMsgs:IChat[] =[]
  outboxMsgs:IChat[] =[]
  displayMsgs:IChat[] =[]

  constructor(private MsgService:MessageService) { }

  ngOnInit(): void {
    this.MsgService.getInboxMessages(this.userId).subscribe(
      data => {this.inboxMsgs = data
          this.toggleInbox()
          this.sortDes()
        }

    )
    this.MsgService.getOutboxMessages(this.userId).subscribe(
      data =>{ this.outboxMsgs = data
        this.toggleOutbox()}
    )


  }

  toggleInbox()
  {
     if (this.showInbox ) {
      this.displayMsgs .push.apply(this.displayMsgs,this.inboxMsgs)

    }else{
      this.displayMsgs = this.displayMsgs.filter(m=> !this.inboxMsgs.includes(m))
    }
  }
  toggleOutbox()
  {
     if (this.showOut ) {
      this.displayMsgs .push.apply(this.displayMsgs,this.outboxMsgs)

    }else{
      this.displayMsgs = this.displayMsgs.filter(m=> !this.outboxMsgs.includes(m))
    }
  }
  ToggleDropDown(){
    this.isDropdown = ! this.isDropdown
  }

  sortDes(){
    this.displayMsgs.sort((x,y)=>x.date > y.date ? -1 : 1)
    this.isDropdown=false
  }
  sortAsc(){
    this.displayMsgs.sort((x,y)=>x.date > y.date ? 1 : -1)
    this.isDropdown=false
  }

}
