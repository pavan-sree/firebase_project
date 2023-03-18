import { Injectable } from '@angular/core';
import { collectionData, Firestore, getDoc } from '@angular/fire/firestore';
import { addDoc, collection,doc ,deleteDoc,updateDoc} from '@firebase/firestore';
import { Observable } from 'rxjs';
import { student } from './home/interface/student';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private fs:Firestore) { }
  addDetail(student: student){
    student.id=doc(collection(this.fs,'id')).id;
    return addDoc(collection(this.fs,'Students'),student)
  }
  editDetail(student: student){

  }
  getDetails():Observable<student[]>{
    let studentRef=collection(this.fs,'Students');
    return collectionData(studentRef,{'idField':'doc_id'}) as Observable<student[]>;
  }
  async getStudentById(id:any):Promise <any>{
    let docRef=doc(this.fs,'Students',id);
    try{
      const docSnap=await getDoc(docRef);
      if(docSnap.exists()){
      return docSnap.data()
      }
      else{
        console.log("No data");
      }
    }
    catch(error){
      console.log(error)
    }

  }
  updateStudent(id:any,student:any){
    let docRef=doc(this.fs,'Students',id);
    return updateDoc(docRef,student)
  }
  remDetail(id:any){
    let docRef=doc(this.fs,'Students',id);
    return deleteDoc(docRef)
  }
}
