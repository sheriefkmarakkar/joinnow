import { Component, OnInit } from '@angular/core';
import {CServiceService} from '../cservice.service'

@Component({
  selector: 'app-railway',
  templateUrl: './railway.component.html',
  styleUrls: ['./railway.component.css']
})
export class RailwayComponent implements OnInit {
  cgj
  constructor(private s:CServiceService) {
    this.s.SSCJobs('RAILWAY').subscribe(data=>{
      this.cgj=data;
    })
   }
   ClickDownloadPdf(base64String,name){
      
    const linkSource = base64String;
      const downloadLink = document.createElement("a");
      const fileName = name+'.pdf';

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
  }

  ngOnInit(): void {
  }

}
