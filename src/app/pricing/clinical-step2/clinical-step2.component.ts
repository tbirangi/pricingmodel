import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clinical-step2',
  templateUrl: './clinical-step2.component.html',
  styleUrls: ['./clinical-step2.component.css']
})
export class ClinicalStep2Component implements OnInit {
  selectedSegment: string = 'Pharma'; // Default value for demo
  selectedDataType: string = 'EMR / Labs'; // Default value for demo
  selectedTherapeutic: string = ''; // Therapeutic class selection
  selectedTreatment: string = ''; // Treatment environment selection
  selectedButton: string = 'Clinical'; // Default to Clinical since we're in clinical step

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Get query parameters to set the selected options
    this.route.queryParams.subscribe(params => {
      if (params['segment']) {
        this.selectedSegment = params['segment'];
      }
      if (params['dataType']) {
        this.selectedDataType = params['dataType'];
      }
    });
  }

  onButtonClick(buttonName: string) {
    this.selectedButton = buttonName;
    if (buttonName === 'Home') {
      this.router.navigate(['/']);
    }
  }

  selectTherapeutic(therapeutic: string) {
    this.selectedTherapeutic = therapeutic;
  }

  selectTreatment(treatment: string) {
    this.selectedTreatment = treatment;
  }

  goBack() {
    // Navigate back to step 1 (main pricing model component) with Clinical section selected
    this.router.navigate(['/'], { queryParams: { section: 'Clinical' } });
  }

  isNextButtonEnabled(): boolean {
    // Enable Next button only when both Therapeutic Class and Treatment Environment are selected
    return this.selectedTherapeutic !== '' && this.selectedTreatment !== '';
  }
}
