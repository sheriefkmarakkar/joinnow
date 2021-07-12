import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CServiceService } from '../cservice.service';
import {  Output, EventEmitter, AfterViewChecked } from '@angular/core';



@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})

export class JoblistComponent implements OnInit, OnDestroy {
job; 
p=1;
place;
jobname;
selectedJob;
count;
name1;
email1;
dataSubscription: Subscription;
dataCategory;
catData;

  constructor(private s:CServiceService) {
    //this.job=[{id:"1",jobname:"Programmer",comp:"dfdo",category:"it",email:"svxhcvx ",disc:"cjhsbchjsbcjschbsjcbsc",skill:"ghdgcdshcgdsjcdbjd",exp:"0",edu:"degree"},{id:"2",jobname:"Devoloper",comp:"dfdo",category:"it",email:"svxhcvx ",disc:"cjhsbchjsbcjschbsjcbsc",skill:"ghdgcdshcgdsjcdbjd",exp:"0",edu:"diploma"}];
    this.s.getJobs().subscribe(data=>{
      this.job=data;
      console.log(this.job)
      this.ngOnInit();
    })
  }
search(){}
user = {
  name1:'',
email1:'',
  message: '',
  fileContent :'',
  semail:''
};

 userProfile(event: any) {        
      if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
      this.user.fileContent = event.target.result;
          }
          reader.readAsDataURL(event.target.files[0]);
         // this.user.path=URL.createObjectURL(event.target.files[0]);
          
      }}

 applyNow() {   
  this.user.semail=this.selectedJob.email;
      this.s.sendWithAttachment(this.user);
 }
  ngOnInit(): void {
    
    this.showDetails(1)
    this.dataSubscription =  this.s.getJobs().subscribe(data=>{

    
      this.job=data;
    
    const u = [];

this.job.forEach(c => {
   if(u.indexOf(c.cat) === -1) {
       u.push(c.cat);
   }
});
this.count=u;
//alert(u);
    })
   
    
   }

    
    //document.getElementById('cd').style.display='none';
  
 selectJob(c){
   //alert(c);
  this.dataCategory=this.s.getCat(c).subscribe(data=>{
    this.job=data;
   // alert(this.catData.cat);
  })
 }
   
  
  ngOnDestroy() {
   // this.dataSubscription.unsubscribe()
  }
 
  showDetails(jid){
    //alert(jid)
    var id=jid.to
  //  document.getElementById('cd').style.display="";
    this.selectedJob = this.job.find(opt => opt.id == jid);
   // alert(this.selectedJob.comp)

  }
  model1(jid) {
    this.showDetails(jid)
   // var x = new Date(); 
     // var myHeading = "<p>I Am Added Dynamically </p>";
     // $("#modal-body").html(myHeading + x);     
      $('#exampleModal').modal('show');
     }

  applyModal(){
    $('#exampleModal2').modal('show');
    $('#exampleModal').modal('hide');
  }

  applyNow1(){
    this.s.emailSend(this.name1,this.email1).subscribe();
  } 
  
  @Output() finishedLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

ngAfterViewChecked() {
   // you could also do this after a service call of some sort
   this.finishedLoading.emit(true);
}
 

}
