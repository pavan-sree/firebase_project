import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  studentForm!:FormGroup;

  constructor(private fb:FormBuilder,private hero:HeroService, private router:Router){
    this.studentForm=this.fb.group({
      Rollno:['',Validators.required],
      Name:['',Validators.required],
      Attendance:['',Validators.required],
      Performance:['',Validators.required]
    })
  }

  ngOnInit() {
    this.getDataById();
  }
  getDataById(){
    let id =localStorage.getItem('doc_id');
    this.hero.getStudentById(id).then((data:any)=>{
      this.studentForm=this.fb.group({
        Rollno:data.Rollno,
        Name:data.Name,
        Attendance:data.Attendance,
        Performance:data.Performance
      })
    })
  }
  updateStudent(){
    const student=this.studentForm.value;
    console.log(student);
    let id =localStorage.getItem('doc_id');
    this.hero.updateStudent(id,student).then()
    alert("data added successfully");
  }
}
