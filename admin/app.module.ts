import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { CraeteCompanyComponent } from './components/craete-company/craete-company.component';
import { HttpModule} from '@angular/http';
import { AdminRequestsService} from './services/admin-requests.service';
import { RouterModule} from '@angular/router';
import { RemoveCompanyComponent } from './components/remove-company/remove-company.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { RemoveupdatecustomerComponent } from './components/removeupdatecustomer/removeupdatecustomer.component';
import { GetallcustomersComponent } from './components/getallcustomers/getallcustomers.component';





@NgModule({
  declarations: [
    AppComponent,
    GetAllCompaniesComponent,
    CraeteCompanyComponent,
    RemoveCompanyComponent,
    AddcustomerComponent,
    RemoveupdatecustomerComponent,
    GetallcustomersComponent,
  ],
  imports: [
    
    BrowserModule, 
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(
      [
      {
        path: 'getallcompanies' , 
        component : GetAllCompaniesComponent
      } , 
      {
        path: 'createcompany' , 
        component : CraeteCompanyComponent

      },
      {
        path: 'removecopmany',
        component: RemoveCompanyComponent
      },
      {
        path : 'addcustomer' , 
        component : AddcustomerComponent 
      }, 
      {
        path : 'removeupadecustomer' , 
        component : RemoveupdatecustomerComponent
      },
      {
        path : 'getallcustomers' , 
        component: GetallcustomersComponent
      }

      ])
  ],
  providers: [ AdminRequestsService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
