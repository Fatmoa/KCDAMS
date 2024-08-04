import { ReceptionsComponent } from './pages/receptions/receptions.component';
import { NgModule, Component } from '@angular/core';
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
import { AddObservationComponent } from './pages/add-observation/add-observation.component';
import { PatientsInfoComponent } from './pages/patients-info/patients-info.component';
import { NgoComponent } from './pages/ngo/ngo.component';
import { DrugsComponent } from './pages/drugs/drugs.component';
import { EditReceptionComponent } from './pages/edit-reception/edit-reception.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { LoginComponent } from './layouts/login/login.component';
import { NursingComponent } from './pages/nursing/nursing.component';
import { PsychologyComponent } from './pages/psychology/psychology.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path:'home',component:MainLayoutComponent,
    children:[
      {path:'', component:DashboardComponent,},
      {path:'receptions',component:ReceptionsComponent},
      { path:'nurse',component:NurseComponent},
      {path:'lab',component:LabComponent},
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
      {
        path:'add-observation',
        component:AddObservationComponent
      },
      {
        path:'patients-info',
        component:PatientsInfoComponent
      },
      {
        path:'ngo',
        component:NgoComponent
      },
      {
        path:'drugs',
        component:DrugsComponent
      },
      {
        path:'edit-reception',
        component:EditReceptionComponent
      },
      {
        path:'registrar',
        component:RegistrarComponent
      },
      {
        path:'nursing',
        component:NursingComponent
      },
      {
        path:'psychology',
        component:PsychologyComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
