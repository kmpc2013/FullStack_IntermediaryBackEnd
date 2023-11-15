import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
delete(arg0: any) {
throw new Error('Method not implemented.');
}
  faPencil = faPencil;
  faTrash = faTrash;

  courseLabel: Array<{ value: String, label: String }> = [];
  teachers: any[] = [];

  constructor(
    private teacherService: TeacherService,
    private sharedService: SharedService
  ) { }

  async ngOnInit(): Promise<void> {
    this.courseLabel = await this.sharedService.convertCourseToOption();
  }

  getLabelCourse(value: String): String | undefined {
    let course = this.courseLabel.find((course) => course.value == value)
    return course?.label;
  }
}
