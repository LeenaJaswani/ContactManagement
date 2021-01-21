import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,Subject} from 'rxjs';
import { tap } from 'rxjs/operators';

import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-avataaars-sprites';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl = "/contacts/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
public _refreshNeeded$=new Subject<void>();
get refreshNeeded$(){
  return this._refreshNeeded$;
}
  getAllContacts(): Observable<any> {
    return this.http.get(this.baseurl ,
    {headers: this.httpHeaders});
  }
  getOneContact(id): Observable<any> {
    return this.http.get(this.baseurl + id + '/',
    {headers: this.httpHeaders});
  }
  updateContact(contact): Observable<any> {
    const body = {Name: contact.Name , EmailAddress: contact.EmailAddress, ContactNumber: contact.ContactNumber,HomeAddress: contact.HomeAddress,Birthday:contact.Birthday,Nickname:contact.Nickname };
    return this.http.put(this.baseurl + contact.id + '/', body,
    {headers: this.httpHeaders});
  }
  addContact(contact): Observable<any> {
    const body = {Name: contact.Name , EmailAddress: contact.EmailAddress, ContactNumber: contact.ContactNumber,HomeAddress: contact.HomeAddress,Birthday:contact.Birthday ,Nickname:contact.Nickname};
    return this.http.post(this.baseurl , body,
    {headers: this.httpHeaders})
    .pipe(

        tap(()=>{
    this._refreshNeeded$.next();
    }

    )
    );
  }
  deleteContact(id): Observable<any> {
    return this.http.delete(this.baseurl + id + '/',
    {headers: this.httpHeaders});
  }

}