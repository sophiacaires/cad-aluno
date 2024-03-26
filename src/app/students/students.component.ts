import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  formGroupStudents: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: StudentService) {
    this.formGroupStudents = formBuilder.group({
      id: [''],
      name: [''],
      course: ['']
    });
  }
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(){
    this.service.getStudents().subscribe({
      next: data => this.students = data
    })
  }

  save() {
    this.service.save(this.formGroupStudents.value).subscribe({
      next: data => this.students.push(data)
    })
  }
}
