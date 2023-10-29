import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  isCreatorRouteActive: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.checkRoute()
  }


  checkRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCreatorRouteActive = event.url === '/creator';
      }
    });
  }
}
