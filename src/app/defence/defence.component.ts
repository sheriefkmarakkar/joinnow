import { Component, OnInit } from '@angular/core';
import {CServiceService} from '../cservice.service'

@Component({
  selector: 'app-defence',
  templateUrl: './defence.component.html',
  styleUrls: ['./defence.component.css']
})
export class DefenceComponent implements OnInit {

  cgj
  constructor(private s:CServiceService) {
    this.s.SSCJobs('DIFENCE').subscribe(data=>{
      this.cgj=data;
      console.log(this.cgj)
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
