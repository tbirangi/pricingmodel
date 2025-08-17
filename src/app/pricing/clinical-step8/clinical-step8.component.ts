import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clinical-step8',
  templateUrl: './clinical-step8.component.html',
  styleUrls: ['./clinical-step8.component.css']
})
export class ClinicalStep8Component implements OnInit {
  selectedButton: string = 'Clinical';
  
  // Price data
  retrospectivePrice: number = 4445443.44;
  prospectivePrice: number = 34543.40;
  
  // Summary data
  customerSegment: string = 'Pharma';
  dataType: string = 'EMR / Labs';
  therapeuticClass: string = 'Oncology';
  treatmentEnvironment: string = 'Academic';
  retrospectiveTimeframe: string = '8/15/2024 - 8/14/2025';
  retrospectiveMonths: number = 12;
  prospectiveTimeframe: string = '8/15/2025 - 8/14/2026';
  prospectiveMonths: number = 12;
  depthStructured: string = 'Structured';
  volume: number = 1000;
  discount: number = 0;
  selectedDiscount: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['segment']) {
        this.customerSegment = params['segment'];
      }
      if (params['dataType']) {
        this.dataType = params['dataType'];
      }
      if (params['therapeutic']) {
        this.therapeuticClass = params['therapeutic'];
      }
      if (params['treatment']) {
        this.treatmentEnvironment = params['treatment'];
      }
    });
  }

  get combinedPrice(): number {
    return this.retrospectivePrice + this.prospectivePrice;
  }

  get discountAmount(): number {
    return this.combinedPrice * (this.selectedDiscount / 100);
  }

  get finalTotal(): number {
    return this.combinedPrice - this.discountAmount;
  }

  onButtonClick(buttonName: string) {
    this.selectedButton = buttonName;
    // Add navigation logic if needed
  }

  selectDiscount(discount: number) {
    this.selectedDiscount = discount;
    this.discount = discount;
  }

  goBack() {
    this.router.navigate(['/clinical-step2'], { 
      queryParams: { 
        segment: this.customerSegment,
        dataType: this.dataType,
        therapeutic: this.therapeuticClass,
        treatment: this.treatmentEnvironment
      } 
    });
  }
}
