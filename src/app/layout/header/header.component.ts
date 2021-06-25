import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/Services/cart.service';
import { SignalRService } from 'src/Services/signal-r.service';
import { SubjectService } from 'src/Services/subject.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Notification } from 'src/app/models/notification';
import { AuthenticationService } from '../../../Services/authentication.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("navbar")
  navbar!: ElementRef;

  itemsNumber: number = 0;

  isAcctive = false;
  isAside = false;
  isNotifyShow = false;

  clickEventsubscription: Subscription = new Subscription;


  constructor(private subjectService: SubjectService, private cartService: CartService
    , public signalRService: SignalRService, private http: HttpClient,public _authenticationService: AuthenticationService) {
    signalRService.getNotifyByUserId()
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    window.addEventListener('click', this.hideAll, true);

    this.clickEventsubscription = this.subjectService.getClickEvent().subscribe(() => {
      this.calcItemsNum();
    })
    this.calcItemsNum()


    this.signalRService.startConnection();
    this.signalRService.addTransferDataListener();

  }
  hideAll = (e: Event): void => {

    if (this.isNotifyShow || this.isAside || this.isAcctive) {
      e.stopPropagation()
    }
    this.isAcctive = this.isAside = this.isNotifyShow = false;
  }

  isUserLoggedIn():boolean{
    return this._authenticationService.isLoggedIn();
  }


  calcItemsNum() {
    this.cartService.getCartByUserId()
      .subscribe(d => this.itemsNumber = d.length)
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
    window.removeEventListener('click', this.hideAll, true);
  }


  prevScrollpos = window.pageYOffset;
  scroll = (): void => {
    var currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.navbar.nativeElement.style.top = "0";
    } else {
      this.navbar.nativeElement.style.top = "-60px";
    }
    this.prevScrollpos = currentScrollPos;
    if (this.prevScrollpos < 70) {
      this.navbar.nativeElement.style.top = "0";
    }
  };


  dropdownMenuToggle() {
    this.isAcctive = !this.isAcctive;
  }
  AsideToggle() {
    this.isAside = !this.isAside;
  }
  notfiyToggle() {
    this.isNotifyShow = !this.isNotifyShow;
    this.signalRService.newNotificationsCount = 0;

  }
}
