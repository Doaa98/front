import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/Services/authentication.service';
import { SignalRService } from 'src/Services/signal-r.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(public signalRService: SignalRService, private router: Router
    , private authService: AuthenticationService) {
      if (!authService.isLoggedIn()) {
        router.navigateByUrl("/login")
      }
     }

  ngOnInit(): void {
  }

}
