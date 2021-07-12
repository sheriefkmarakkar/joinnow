import { Component, OnInit } from '@angular/core';
import { CServiceService } from '../cservice.service'

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
cgj;
  constructor(private s:CServiceService) {
    this.s.getCentralGJobs().subscribe(data=>{
      this.cgj=data;
    })
   }

  ngOnInit(): void {
  }
  ssc(c){
   
    this.s.SSCJobs(c).subscribe(data=>{
      this.cgj=data;
    })
  }
  other(){
   
      this.s.otherJobs().subscribe(data=>{
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
    
  }





