import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {CServiceService} from './cservice.service'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { JoblistComponent } from './joblist/joblist.component';
import { BottomComponent } from './bottom/bottom.component';
import { ROUTES,Router, Routes, RouterModule} from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';
import { HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination'
import { CommonModule } from "@angular/common";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CentralComponent } from './central/central.component';
import { RailwayComponent } from './railway/railway.component';
import { DefenceComponent } from './defence/defence.component';
import { AdminComponent } from './admin/admin.component';
import { PsuComponent } from './psu/psu.component';
import { StateComponent } from './state/state.component';

const approutes : Routes = [
  {path:"",component:SearchComponent},
  {path:"joblist", component:JoblistComponent},
  {path:"admin", component:AdminComponent},
  {path:"psu", component:PsuComponent},
  {path:"state", component:StateComponent},

  {path:"central", component:CentralComponent},
  {path:"railway", component:RailwayComponent},
  {path:"difence", component:DefenceComponent},

  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"addjob",component:JobDetailsComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    JoblistComponent,
    BottomComponent,
    JobDetailsComponent,
    AboutComponent,
    ContactComponent,
    CentralComponent,
    RailwayComponent,
    DefenceComponent,
    AdminComponent,
    PsuComponent,
    StateComponent
  
  ],
  imports: [
    HttpClientModule,CommonModule,
    BrowserModule,FormsModule,NgxPaginationModule,
    RouterModule.forRoot(approutes)
 
  ],
  providers: [CServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
