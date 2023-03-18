import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HomeComponent } from './home/home.component';
import { RemoveFormComponent } from './remove-form/remove-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addform',component:AddFormComponent},
  {path:'editform',component:EditFormComponent},
  {path:'removeform',component:RemoveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
