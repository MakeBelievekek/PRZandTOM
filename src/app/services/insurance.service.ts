import { Injectable } from '@angular/core';
import {SelectedInsurancesModel} from "../components/insurance/additional-insurance/selectedInsurances.model";

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  selectedInsurances: SelectedInsurancesModel;

  constructor() {
    this.selectedInsurances = {
      accidental: false,
      traffic: false,
      surgical: false,
    }

  }

  setSelectedInsurances(userSelectedInsurances: SelectedInsurancesModel) {
    this.selectedInsurances = userSelectedInsurances;
  }

  getSelectedInsurances() {
    return this.selectedInsurances;
  }
}
