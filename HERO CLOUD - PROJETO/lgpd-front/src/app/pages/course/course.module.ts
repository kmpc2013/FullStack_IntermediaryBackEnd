import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';

import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
