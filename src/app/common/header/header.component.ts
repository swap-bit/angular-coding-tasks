import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TestConnectionComponent } from "../test-connection/test-connection.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [TestConnectionComponent]
})
export class HeaderComponent  {

  showBackBtn = false;
  private router = inject(Router);
  @ViewChild('mobileMenu') mobileMenuRef!: ElementRef<HTMLDivElement>;

  constructor() {
    this.router.events.subscribe(() => {
      this.updateButtonVisibility();
    });
  }

  onBackBtn() {
    this.router.navigateByUrl('/')
  }
  menuToggle() {
    const displayType = this.mobileMenuRef.nativeElement.style.display;
    if(displayType === 'none' || displayType === '') {
      this.mobileMenuRef.nativeElement.style.display = 'block';
    } else {
      this.mobileMenuRef.nativeElement.style.display = 'none'
    }
  }

  updateButtonVisibility() {
    const currentUrl = this.router.url;
    this.showBackBtn = currentUrl !== '/' ;
  }

}
