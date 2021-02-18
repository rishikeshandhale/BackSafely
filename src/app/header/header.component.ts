import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public collapseCounter: Boolean = false;

  public changeLogo: Boolean = false;

  private _window: Window;

  constructor(private _element: ElementRef) {

   }

   @HostListener('window:scroll')
   scrollNav() {
    if (window.pageYOffset > 10) {
        this._element.nativeElement.querySelector('nav').classList.add('scrolled');
        this.changeLogo = true;
    } else {
        this._element.nativeElement.querySelector('nav').classList.remove('scrolled');
        this.changeLogo = false;
    }
  }

  toggleMenu() {
    this.collapseCounter = !this.collapseCounter;
    if (this.collapseCounter) {
      const elem = document.getElementById('navbarCollapsed');
      elem.style.display = 'block';
    } else {
      const elem = document.getElementById('navbarCollapsed');
      elem.style.display = 'none';
    }
  }
}
