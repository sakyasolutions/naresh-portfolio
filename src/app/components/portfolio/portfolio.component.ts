import { Component, OnInit } from '@angular/core';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  faHandPointRight = faHandPointRight;
  constructor() { }

  ngOnInit(): void {
  }

}
