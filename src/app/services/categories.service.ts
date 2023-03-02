import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore: Firestore, private toastr: ToastrService) { }


  loadData(){
    const collectionInstance = collection(this.firestore, 'Category');
    collectionData(collectionInstance, {idField :'id'})
    return  collectionData(collectionInstance, {idField :'id'});
  }

}
