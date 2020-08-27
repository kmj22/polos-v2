import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {NAV_ITEMS} from "./_data/nav-items.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  showScrollToTop = false;
  topOfPageObserver: IntersectionObserver;
  NAV_ITEMS = NAV_ITEMS;

  ngOnInit() {

    this.topOfPageObserver = new IntersectionObserver((msg: IntersectionObserverEntry[]) => {
      this.showScrollToTop = !msg[0].isIntersecting;
    }, {
      threshold: [0, 1.0]
    });

    this.topOfPageObserver.observe(document.getElementById('scroll-to-top-detector'))
  }

  ngOnDestroy() {
    this.topOfPageObserver.disconnect();
  }


  scrollToTop() {
    document.getElementsByTagName('body')[0].scroll(0, 0);
  }
}
