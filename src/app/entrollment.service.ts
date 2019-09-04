import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import { catchError } from "rxjs/operators";
import { throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntrollmentService {
  _url='http://localhost:3000/enroll';
  constructor(private _http:HttpClient) { }
  
  enroll(user: User)// call post methode here
  {
    return this._http.post<any>(this._url,user)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
return throwError(error);
  }
}
