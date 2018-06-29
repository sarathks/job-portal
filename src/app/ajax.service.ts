import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http:HttpClient) {}
  getDetails=()=>{
  	return this.http.get(environment.url+"/candidate_data.json");
  }

  sendData=(dataToBePost)=>{
  	const body = dataToBePost;
  	return this.http.post(environment.url+"/candidate_data.json",body);
  }
}

