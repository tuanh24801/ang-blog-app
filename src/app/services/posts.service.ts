import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where,limit ,orderBy, getDocs, doc,updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { increment } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  viewCurrent: any;

  constructor(private firestore: Firestore ) { }
  loadPostFeatured(){
    const collectionInstance = collection(this.firestore, 'Post');
    collectionData(collectionInstance, {idField :'id'});
    // let q = query(collectionInstance);
    let q = query(collectionInstance, where('isFeatured', '==', true), limit(4))
    return collectionData(q) as unknown as Observable<[]>;

    // return  collectionData(collectionInstance, {idField :'id'});
  }

  loadPostLatest(){
    const collectionInstance = collection(this.firestore, 'Post');
    collectionData(collectionInstance, {idField :'id'});
    let q = query(collectionInstance);
    // let q = query(collectionInstance, where('isFeatured', '==', true))
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



  async countView(id: string) {
    const playersRef = collection(this.firestore, 'Post');
    let q = query(playersRef, where('id', '==', id));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((document) => {
      const docRef = doc(this.firestore, 'Post', document.id);
      updateDoc(docRef,
        {views: increment(1)}
        ).then(() => {
          console.log("view updated ");

      });
    });
  }

  // getViewCurrent(postId:any){
  //   const playersRef = collection(this.firestore, 'Post');
  //   let q = query(playersRef, where('id', '==', postId));
  //   let a = collectionData(q) as unknown as Observable<[]>;
  //   a.subscribe(val => {
  //     let viewCurrent = Number({...val}[0]["views"]);
  //     viewCurrent +=1;
  //     this.countView(postId,viewCurrent);
  //   })
  // }

}
