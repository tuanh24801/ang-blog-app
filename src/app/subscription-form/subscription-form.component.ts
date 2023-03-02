import { collectionData } from '@angular/fire/firestore';
import { Component,OnInit } from '@angular/core';
import { SubscribersService } from '../services/subscribers.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit{

  constructor(private sub: SubscribersService,private toast:ToastrService){}
  message:string = '';
  ngOnInit(){

  }
  onSubmit(formValue:any){
    this.toast.warning("Email is Already in use");
    this.sub.checkExists(formValue.email).subscribe( val => {
      if(val.length <= 0){
        this.sub.addSubs(formValue);
        this.message = "Thanks for coming";
      }else{
        // this.toast.warning("Email is Already in use");
      }
    })
  }

}
