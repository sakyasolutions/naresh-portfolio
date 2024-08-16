import { Component } from '@angular/core';
import { faBriefcase, faFile, faLaptop, faPaperPlane, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  faUser = faUser;
  faLaptop = faLaptop;
  faBriefcase = faBriefcase;
  faFile = faFile;
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;
}
