import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("navbar")
  navbar!: ElementRef;

  isAcctive = false;
  isAside = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); 

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
    if(this.prevScrollpos<70)
    {
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
