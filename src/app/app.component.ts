import { Component } from '@angular/core';
import { User } from './user';
import {EntrollmentService} from './Entrollment.Service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _entrollmentService: EntrollmentService){}

 topicHasError=true;
 submitted=false;
 public errorMsg;
  
  topics=['Angular','React','Vue'];

 userModel=new User('sandeep','pradeep@carok.in',9689191390,'default','Morning',true);

 validateTopic(value){
   if(value=='default'){
    this.topicHasError=true;
   }else{
    this.topicHasError=false;
   }
 }

 onSubmit(){
  this.submitted=true;
   this._entrollmentService.enroll(this.userModel)
   .subscribe(data=>console.log('success!',data),
              error=>this.errorMsg=error.statusText)
   }

}
