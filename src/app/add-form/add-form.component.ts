import { Component } from '@angular/core';
import{FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  studentForm!:FormGroup;
  constructor(private fb:FormBuilder, private hero:HeroService, private router:Router){
    this.studentForm=this.fb.group({
      Rollno:['',Validators.required],
      Name:['',Validators.required],
      Attendance:['',Validators.required],
      Performance:['',Validators.required]
    })
  }
  addDetail(){
    const student= this.studentForm.value;
    console.log(student);
    this.hero.addDetail(student).then((res)=>{
      if(res){
        alert("added");
        this.studentForm.reset();
        this.router.navigate([''])
      }
      else{
        alert("not added");
      }
    })
  }

  }
