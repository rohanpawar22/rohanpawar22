import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ShareTitleService } from 'src/services/share-title.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  titleName: string = '';
  isCreatorRouteActive: boolean = false;
  sideNavWidth = '0';

  constructor(private router: Router,
    private shareTitle: ShareTitleService) {
  }

  ngOnInit() {
    this.shareTitle.getTitleName().subscribe((title: string) => {
      this.titleName = title; // Get the updated titleName when it changes
    });
    this.checkRoute()
  }

  checkRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCreatorRouteActive = event.url === '/creator';
      }
    });
  }

  openNav() {
    this.sideNavWidth = '100%';
  }

  closeNav() {
    this.sideNavWidth = '0';
  }

}
