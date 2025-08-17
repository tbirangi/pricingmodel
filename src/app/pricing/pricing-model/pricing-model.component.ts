import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pricing-model',
  templateUrl: './pricing-model.component.html',
  styleUrls: ['./pricing-model.component.css']
})
export class PricingModelComponent implements OnInit {
  title = 'Pricing Tool';
  selectedButton: string = 'Home';
  selectedYear: string = '2024';
  selectedMonthRange: string = 'jan-may';
  selectedSegment: string = '';
  selectedDataType: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Check for query parameters to set the selected section
    this.route.queryParams.subscribe(params => {
      if (params['section']) {
        this.selectedButton = params['section'];
      }
    });
  }

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
      this.router.navigate(['/clinical-step2'], { 
        queryParams: { 
          segment: this.selectedSegment,
          dataType: this.selectedDataType
        }
      });
    }
  }

       goToPreviousStep() {
         this.currentStep = 1;
       }
}
