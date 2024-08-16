import { Component, OnInit } from '@angular/core';
import { faArrowCircleRight, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
 faFile = faFile;
 faArrowCircleRight = faArrowCircleRight;
  constructor() { }

  ngOnInit(): void {
  }

}
