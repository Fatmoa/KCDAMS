import { ReceptionsComponent } from './pages/receptions/receptions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ZoneComponent } from './pages/zone/zone.component';
import { NurseComponent } from './pages/nurse/nurse.component';
import { LabComponent } from './pages/lab/lab.component';
import { SocialWorkerComponent } from './pages/social-worker/social-worker.component';
import { PsychologistComponent } from './pages/psychologist/psychologist.component';
import { RegionComponent } from './pages/region/region.component';
import { DistrictComponent } from './pages/district/district.component';
import { ShehiaComponent } from './pages/shehia/shehia.component';
import { RoleComponent } from './pages/role/role.component';
import { UserMgtComponent } from './pages/user-mgt/user-mgt.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { AddreceptionComponent } from './pages/addreception/addreception.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        component:DashboardComponent,
      },
      {
        path:'receptions',
        component:ReceptionsComponent
      },

      {
        path:'nurse',
        component:NurseComponent
      },
      {
        path:'lab',
        component:LabComponent
      },
      {
        path:'social_worker',
        component:SocialWorkerComponent
      },
      {
        path:'psychologist',
        component:PsychologistComponent
      },
      {
        path:'doctor',
        component:DoctorComponent
      },
      {
        path:'zone',
        component:ZoneComponent
      },
      {
        path:'region',
        component:RegionComponent
      },
      {
        path:'district',
        component:DistrictComponent
      },
      {
        path:'shehia',
        component:ShehiaComponent
      },
      {
        path:'role',
        component:RoleComponent
      },
      {
        path:'user_mgt',
        component:UserMgtComponent
      },
      {
        path:'add-reception',
        component:AddreceptionComponent
      },





    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
