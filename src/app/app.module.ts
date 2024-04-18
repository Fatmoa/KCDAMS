import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './layouts/card/card.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ZoneComponent } from './pages/zone/zone.component';
import { RegionComponent } from './pages/region/region.component';
import { DistrictComponent } from './pages/district/district.component';
import { ShehiaComponent } from './pages/shehia/shehia.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { NurseComponent } from './pages/nurse/nurse.component';
import { LabComponent } from './pages/lab/lab.component';
import { SocialWorkerComponent } from './pages/social-worker/social-worker.component';
import { PsychologistComponent } from './pages/psychologist/psychologist.component';
import { RoleComponent } from './pages/role/role.component';
import { UserMgtComponent } from './pages/user-mgt/user-mgt.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReceptionsComponent } from './pages/receptions/receptions.component';
import { EditreceptionsComponent } from './pages/editreceptions/editreceptions.component';
import { AddreceptionComponent } from './pages/addreception/addreception.component';
import { AddObservationComponent } from './pages/add-observation/add-observation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    CardComponent,
    ZoneComponent,
    RegionComponent,
    DistrictComponent,
    ShehiaComponent,
    NurseComponent,
    LabComponent,
    SocialWorkerComponent,
    PsychologistComponent,
    RoleComponent,
    UserMgtComponent,
    DoctorComponent,
    ReceptionsComponent,
    EditreceptionsComponent,
    AddreceptionComponent,
    AddObservationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
