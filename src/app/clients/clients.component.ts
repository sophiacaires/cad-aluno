import { Component } from '@angular/core';
import { Student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  students: Student[] = [];

  formGroupStudents : FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formGroupStudents = formBuilder.group({
      id: [''],
      name: [''],
      course: ['']
    });
  }

  Save(){
    this.students.push(this.formGroupStudents.value)
  }
}
