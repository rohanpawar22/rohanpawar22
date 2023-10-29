import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(){}

  ngOnInit() {
    const typed = new Typed(".auto-input", {
      strings: ["Coder", "YouTuber", "MotoVlogger", "Traveller from India."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });
  }

  openPDF() {
    window.open("assets/RohanPawar.pdf", '_blank');
  }

}
