import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-remove-form',
  templateUrl: './remove-form.component.html',
  styleUrls: ['./remove-form.component.css']
})
export class RemoveFormComponent {
  studentForm!:FormGroup;
  constructor(private fb:FormBuilder, private hero:HeroService, private router:Router){
    this.studentForm=this.fb.group({
      Rollno:['',Validators.required],
      Name:['',Validators.required],
      Attendance:['',Validators.required],
      Performance:['',Validators.required]
    })
  }
  remDetail(){
  }
}
