import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CServiceService} from '../cservice.service'



@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
state
cgj;
  constructor(private router: Router,private s:CServiceService) {

    this.state = this.router.getCurrentNavigation().extras.state.sname;
    this.s.getSJobs(this.state).subscribe(data=>{
      this.cgj=data
    })
   }

  ngOnInit(): void {
  }

}
