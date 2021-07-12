import { Component, OnInit } from '@angular/core';
import { CServiceService } from '../cservice.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  cgj;
  constructor(private s:CServiceService,private router:Router) {
    this.s.getCentralGAllJobs().subscribe(data=>{
      this.cgj=data;
    })
   }

  ngOnInit(): void {
    
  }
  d;
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
  delete(id){
    this.s.deleteJob(id).subscribe(data=>{
      this.d=data;
     // alert(this.d.msg)
      this.reloadComponent();
      console.log(data)
      
     
    })
    
   
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

}}
