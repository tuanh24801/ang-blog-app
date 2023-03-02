import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where,limit,orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestore: Firestore) { }
  loadPostFeatured(){
    const collectionInstance = collection(this.firestore, 'Post');
    collectionData(collectionInstance, {idField :'id'});
    let q = query(collectionInstance);
    q = query(collectionInstance, where('isFeatured', '==', true), limit(4))
    return collectionData(q) as unknown as Observable<[]>;

    // return  collectionData(collectionInstance, {idField :'id'});
  }

  loadPostLatest(){
    const collectionInstance = collection(this.firestore, 'Post');
    collectionData(collectionInstance, {idField :'id'});
    let q = query(collectionInstance);
    q = query(collectionInstance, where('isFeatured', '==', true))
    return collectionData(q) as unknown as Observable<[]>;

    // return  collectionData(collectionInstance, {idField :'id'});
  }

  loadDataWithCondition(id:any){
    const collectionInstance = collection(this.firestore, 'Post');
    let q = query(collectionInstance, limit(2));
    q = query(collectionInstance, where('id', '==', id));
    return collectionData(q) as unknown as Observable<[]>;
  }

  loadCategoryPost(categoryId:any){
    const collectionInstance = collection(this.firestore, 'Post');
    collectionData(collectionInstance, {idField :'id'});
    let q = query(collectionInstance);
    q = query(collectionInstance, where('category.category', '==', categoryId['id']))
    return collectionData(q) as unknown as Observable<[]>;
  }

  loadSinglePost(id:any){
    const collectionInstance = collection(this.firestore, 'Post');
    let q = query(collectionInstance, limit(2));
    q = query(collectionInstance, where('id', '==', id));
    return collectionData(q) as unknown as Observable<[]>;
  }


  loadSimilar(categoryId:any){
    const collectionInstance = collection(this.firestore, 'Post');
    collectionData(collectionInstance, {idField :'id'});
    let q = query(collectionInstance);
    q = query(collectionInstance, where('category.category', '==', categoryId),limit(2))
    return collectionData(q) as unknown as Observable<[]>;
  }


}
