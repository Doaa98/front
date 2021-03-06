import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from 'src/app/models/notification';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private connectionUrl = environment.url_Api + "/notification";
  private userId = this.authService.getUserId()

  public Notifications: Notification[] = []
  public newNotificationsCount = 0;

  private hubConnection: signalR.HubConnection | undefined

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.connectionUrl)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferDataListener = () => {
    this.hubConnection?.on('transferdata', (data) => {
      if (data.userID == this.userId) {
        this.Notifications.unshift(data);
        this.newNotificationsCount++;
        let audio = new Audio();
        audio.src = "../../../assets/audio/pristine-609.mp3";
        audio.load();
        audio.play();
      }
    });
    // public addTransferDataListener = () => {
    //   this.hubConnection?.on('transferMsg', (data) => {
    //     if (data.userID == this.userId) {
    //       this.Notifications.unshift(<>{});
    //       this.newNotificationsCount++;
    //       let audio = new Audio();
    //       audio.src = "../../../assets/audio/pristine-609.mp3";
    //       audio.load();
    //       audio.play();
    //     }
    //   });
  }


  constructor(private http: HttpClient
    , private authService: AuthenticationService) { }

  getNotifyByUserId() {

    this.http.get<Notification[]>(`${environment.url_Api}/api/Notifications/user/${this.userId}`)
      .subscribe(data => this.Notifications = data);

  };

}
