import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherRoutingModule } from './teacher-routing.module';


@NgModule({
  declarations: [
    TeacherListComponent,
    TeacherFormComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule
  ]
})
export class TeacherModule { }
