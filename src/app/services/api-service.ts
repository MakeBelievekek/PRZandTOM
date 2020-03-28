import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainInsuranceModel } from '../model/main-insurance-model';


const BASE_URL='https://formulative.io/api/calculate';
@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) {}


    calculate(data: MainInsuranceModel) {
        return this.http.post(BASE_URL,data);
    }

}