import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";
import {CalculatedFeeModel} from "../model/calculatedFee.model";
import {MakeFeeCalcModel} from "../model/MakeFeeCalc.model";
import {MainInsuranceModel} from "../model/main-insurance-model";
import {main} from "@angular/compiler-cli/src/main";
import {DateModel} from "../model/date.model";

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FeeCalculationService {

  feeCalculationModel: MakeFeeCalcModel;

  constructor(private http: HttpClient) {
  }

  calculateFee(data: MainInsuranceModel, date: DateModel): Observable<CalculatedFeeModel> {
    this.convertMainInsuranceModelToMakeInsuranceModel(data)
    this.addDateToMakeInsuranceModel(date);
    return this.http.post<CalculatedFeeModel>(BASE_URL, this.feeCalculationModel);
  }

  convertMainInsuranceModelToMakeInsuranceModel(mainInsurance: MainInsuranceModel) {
    this.feeCalculationModel = {
      amountOfInsurance: '' + mainInsurance.amountOfIns,
      numberOfInsured: '' + mainInsurance.numberOfIns,
      lengthOfInsurance: '' + mainInsurance.insuranceDur,
      chargeFrequency: '' + mainInsurance.chargeFreq,
      policyDiscount: '' + mainInsurance.policyDisc,
      paymentMethodDiscount: '' + mainInsurance.paymentMethod,
      campaignDiscount: '' + mainInsurance.campaignDisc,
      customerDiscount: '' + mainInsurance.customerDisc,
      year: '',
      month: '',
      day: '',
    }
  }

  addDateToMakeInsuranceModel(data: DateModel) {
    this.feeCalculationModel.year = '' + data.year;
    this.feeCalculationModel.month = '' + data.month;
    this.feeCalculationModel.day = '' + data.day;
  }
}


