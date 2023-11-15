import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { EvaluationRoutingModule } from './evaluation-routing.module';

import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';


@NgModule({
  declarations: [
    EvaluationListComponent,
    EvaluationFormComponent
  ],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    SharedModule
  ]
})
export class EvaluationModule { }
