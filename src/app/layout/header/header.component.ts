import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/Services/cart.service';
import { SubjectService } from 'src/Services/subject.service';

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

  clickEventsubscription: Subscription = new Subscription;

  constructor(private subjectService: SubjectService, private cartService: CartService) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);

    this.clickEventsubscription = this.subjectService.getClickEvent().subscribe(() => {
      this.calcItemsNum();
    })
    this.calcItemsNum()
  }
  calcItemsNum() {
    this.cartService.getCartByUserId("qq")
      .subscribe(d => this.itemsNumber = d.length)
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
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
}
