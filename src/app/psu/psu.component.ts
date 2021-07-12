import { Component, OnInit } from '@angular/core';
import {CServiceService} from '../cservice.service'
@Component({
  selector: 'app-psu',
  templateUrl: './psu.component.html',
  styleUrls: ['./psu.component.css']
})
export class PsuComponent implements OnInit {
cgj;
p;
constructor(private s:CServiceService) {
  this.s.getAllJobs().subscribe(data=>{
    this.cgj=data;
    const u = [];

    this.cgj.forEach(c => {
       if(u.indexOf(c.other) === -1) {
           u.push(c.other);
       }
    });
    this.p=u;
    //alert(u);
       
  })
 }

  ngOnInit(): void {
  }
  ssc(c){
   
    this.s.SSCJobs(c).subscribe(data=>{
      this.cgj=data;
    })
  }
}
