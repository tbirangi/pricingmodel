import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-model',
  templateUrl: './pricing-model.component.html',
  styleUrls: ['./pricing-model.component.css']
})
export class PricingModelComponent {
  title = 'Pricing Tool';
  selectedButton: string = 'Home';
  selectedYear: string = '2024';
  selectedMonthRange: string = 'jan-may';
  selectedSegment: string = '';
  selectedDataType: string = '';

  onButtonClick(buttonName: string) {
    this.selectedButton = buttonName;
  }

  selectSegment(segment: string) {
    this.selectedSegment = segment;
  }

         selectDataType(dataType: string) {
         this.selectedDataType = dataType;
       }

       isNextButtonEnabled(): boolean {
         return this.selectedSegment !== '' && this.selectedDataType !== '';
       }

       currentStep: number = 1;

       goToNextStep() {
         if (this.isNextButtonEnabled()) {
           this.currentStep = 2;
         }
       }

       goToPreviousStep() {
         this.currentStep = 1;
       }
}
