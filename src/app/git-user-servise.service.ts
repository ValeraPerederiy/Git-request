import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from './user.interface';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GitUserServiseService {
  protected url:string = "https://api.github.com/users/"
  
  constructor(private http: HttpClient) { }

  public getUser(userName:string):Observable<UserInterface>{
    return this.http.get<UserInterface>(`${this.url+userName}`);
  }
}
