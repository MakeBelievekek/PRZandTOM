import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MainInsuranceModel} from "../model/main-insurance-model";
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";

const  BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  firstStep():Observable<string> {
    return this.http.get<string>(BASE_URL);
  }

}
