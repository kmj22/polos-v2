import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showScrollToTop = false;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    this.showScrollToTop = ((window.scrollY) >= 500);
  }
}
