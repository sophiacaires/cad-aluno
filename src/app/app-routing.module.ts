import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'courses', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
