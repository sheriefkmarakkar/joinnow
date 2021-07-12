import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
//import * as $ from "jquery";
import * as bootstrap from 'bootstrap';
import { CServiceService } from '../cservice.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jname;
  ldate;
  pdate
  cat;
  fileContent;
  qual
  id;
  c;
  othername;
  t=false;
  df=false;
  dif;
  jlink;
  nid;
  central=false;
  cen;
  public=false;
  psu;
  ss=false;
  state;
  constructor(private s:CServiceService) {
    this.nid = function () {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    };
   }

  ngOnInit(): void {
  }
jobModel(){

 // var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            //myModal.show();

}
d;
userProfile(event: any) {        
  if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
  this.fileContent = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
     // this.user.path=URL.createObjectURL(event.target.files[0]);
      
  }}
  otherCheck(){
    //alert("nksj")
    if(this.cat=="OTHER"){
this.t=true;
    }
    else if(this.cat=="DIFENCE"){
      this.df=true;
    }
    else if(this.cat=="CENTRAL"){
      this.central=true;
    }
    else if(this.cat=="PSU"){
      this.public=true;
    }
    else if(this.cat=="STATE"){
      this.ss=true;
      this.df=true;
    }
  }
 
saveJob(){
  if(this.cat=="OTHER"){
    this.c=this.othername;
        }
        else if(this.cat=="DIFENCE"){
          
          this.c=this.dif;
         // alert(this.dif)
        }
        else if(this.cat=="CENTRAL"){
          
          this.c=this.cen;
         // alert(this.dif)
        }
        else if(this.cat=="PSU"){
          
          this.c=this.psu;
         // alert(this.dif)
        }
        else if(this.cat=="STATE"){
          
          this.c=this.dif;
         // alert(this.dif)
         
        }
        else{
          this.c=this.cat;
          

        }
        
 
this.s.postCentralGJob(this.pdate,this.jname,this.qual,this.cat,this.ldate,this.fileContent,this.c,this.jlink,this.state).subscribe(data=>{
 this.d=data;
 console.log(this.d)
 alert(this.d.msg);
});

}
}
