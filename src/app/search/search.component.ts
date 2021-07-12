import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
place;
jobname;
ldate;
comp;
category;
email;
job;

  constructor(private r:Router) {
    
   }

  ngOnInit(): void {
  }

  search()
  {
  
   this.r.navigateByUrl('/joblist');
  }
  central(){
    this.r.navigateByUrl('/central')
  }
  railway(){
    this.r.navigateByUrl('/railway')
  }
  difence(){
    this.r.navigateByUrl('/difence')
  }
  psu(){
    this.r.navigateByUrl('/psu')
  }
 

  state(st){
    
    this.r.navigate(['state'], {
      state: { sname: st }
    });
    }
}
