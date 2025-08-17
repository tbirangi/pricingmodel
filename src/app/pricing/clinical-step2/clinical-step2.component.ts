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

  goBack() {
    // Navigate back to step 1 (main pricing model component) with Clinical section selected
    this.router.navigate(['/'], { queryParams: { section: 'Clinical' } });
  }

  isNextButtonEnabled(): boolean {
    // Add your Step 2 validation logic here
    return true; // For now, always enabled
  }
}
