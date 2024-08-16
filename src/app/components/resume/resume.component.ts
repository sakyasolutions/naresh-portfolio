import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { faArrowAltCircleDown, faDownload, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  title = 'html-to-pdf-angular-application';
  faDownload = faArrowAltCircleDown;

  constructor() {

  }

  ngOnInit(): void {
  }

  public convetToPDF() {
    var data = document.getElementById('contentToConvert')!;
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('nareshd-resume.pdf'); // Generated PDF
    });
  }

}
