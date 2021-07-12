import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CServiceService {

  constructor(private hc:HttpClient) { }

  public deleteJob(id){
    return this.hc.post("http://localhost:8080/deleteJ",{id:id})
  }
  public getAllJobs(){
    return this.hc.post("http://localhost:8080/getAll",{cat:'PSU'});
  }
  public getSJobs(s){
   // alert(s);
    return this.hc.post("http://localhost:8080/getStateJobs",{state:s});
  }
  public postCentralGJob(pdate,jname,qual,cat,ldate,fileContent,c,link,state)
  {
    return this.hc.post("http://localhost:8080/postCGJob",{pdate:pdate,jname:jname,qual:qual,cat:cat,ldate:ldate,fileContent:fileContent,other:c,link:link,state:state})
  }
  public getCentralGJobs(){
    return this.hc.get("http://localhost:8080/getCGJobs");
  }
  public getCentralGAllJobs(){
    return this.hc.get("http://localhost:8080/getAllJobs");
  }
  public SSCJobs(j){
    return this.hc.post("http://localhost:8080/getSSCJobs",{jc:j});
  }
  public otherJobs(){
    return this.hc.get("http://localhost:8080/getOtherJobs");
  }
  public getJobs(){
    return this.hc.get("http://localhost:8080/getJobs");
  }
  public getCat(c){
    //alert(c);
    return this.hc.post("http://localhost:8080/getCat",{c:c});
  }
  public emailSend(name,email){
    return this.hc.post("http://localhost:8080/sendmail",{name:name,email:email})
  }
  sendWithAttachment(userData) {

    this.hc.post("http://localhost:8080/sendmail", userData
    )
      .subscribe(
        data => {
          console.log("Sent Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }
}
