import { Firestore, collectionData, collection, query,addDoc,where } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Sub } from '../models/sub';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private firestore: Firestore, private toast:ToastrService) { }

  addSubs(subData:Sub){
    const collectionInstance = collection(this.firestore, 'Subscribers');
    addDoc(collectionInstance, subData)
    .then( (refData) => {

    })
    .catch( (err) => {
      console.log(err);
    })
  }

  checkExists(email:string){
    const collectionInstance = collection(this.firestore, 'Subscribers');
    let q = query(collectionInstance);

    if (email) {
      q = query(collectionInstance, where('email', '==', email));
    }
    return collectionData(q) as unknown as Observable<any>;
  }



}
