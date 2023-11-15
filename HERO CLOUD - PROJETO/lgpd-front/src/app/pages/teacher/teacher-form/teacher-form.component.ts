import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  teacher: any = {};
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [{
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: {
            label: 'Nome',
            placeholder: 'Nome do professor',
            required: true
          }
        },{
          key: 'course_id',
          type: 'input',
          props: {
            label: 'Nome do curso',
            placeholder: 'Nome do curso',
            required: true
          }
        }
      ]
    }]


}
