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
    if (buttonName === 'Home') {
      this.router.navigate(['/']);
    }
  }

  selectDiscount(discount: number) {
    this.selectedDiscount = discount;
    this.discount = discount;
  }

  copyToClipboard() {
    const summaryText = `
Clinical Pricing Results

Customer Segment: ${this.customerSegment}
Data Type: ${this.dataType}
Therapeutic Class: ${this.therapeuticClass}
Treatment Environment: ${this.treatmentEnvironment}
Retrospective Timeframe: ${this.retrospectiveTimeframe}
Retrospective (Months): ${this.retrospectiveMonths}
Prospective Timeframe: ${this.prospectiveTimeframe}
Prospective (Months): ${this.prospectiveMonths}
Depth: ${this.depthStructured}
Volume: ${this.volume.toLocaleString()}
Discount: ${this.selectedDiscount}%

Pricing:
- Retrospective: $${this.retrospectivePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
- Prospective: $${this.prospectivePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
- Combined: $${this.combinedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
- Final Total: $${this.finalTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    `.trim();

    navigator.clipboard.writeText(summaryText).then(() => {
      // You could add a toast notification here if needed
      console.log('Pricing results copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy to clipboard:', err);
    });
  }

  exportToExcel() {
    const data = [
      ['Clinical Pricing Results'],
      [''],
      ['Configuration'],
      ['Customer Segment', this.customerSegment],
      ['Data Type', this.dataType],
      ['Therapeutic Class', this.therapeuticClass],
      ['Treatment Environment', this.treatmentEnvironment],
      ['Retrospective Timeframe', this.retrospectiveTimeframe],
      ['Retrospective (Months)', this.retrospectiveMonths],
      ['Prospective Timeframe', this.prospectiveTimeframe],
      ['Prospective (Months)', this.prospectiveMonths],
      ['Depth', this.depthStructured],
      ['Volume', this.volume.toLocaleString()],
      ['Discount', `${this.selectedDiscount}%`],
      [''],
      ['Pricing'],
      ['Retrospective', `$${this.retrospectivePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`],
      ['Prospective', `$${this.prospectivePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`],
      ['Combined', `$${this.combinedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`],
      ['Final Total', `$${this.finalTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`]
    ];

    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(row => {
      csvContent += row.join(',') + '\r\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "clinical_pricing_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Pricing results exported to Excel');
  }

  exportToPdf() {
    // For a real implementation, you would use a library like jsPDF
    // This is a placeholder that creates a simple text file with PDF-like formatting
    const pdfContent = `
Clinical Pricing Results
Generated on: ${new Date().toLocaleDateString()}

CONFIGURATION
Customer Segment: ${this.customerSegment}
Data Type: ${this.dataType}
Therapeutic Class: ${this.therapeuticClass}
Treatment Environment: ${this.treatmentEnvironment}
Retrospective Timeframe: ${this.retrospectiveTimeframe}
Retrospective (Months): ${this.retrospectiveMonths}
Prospective Timeframe: ${this.prospectiveTimeframe}
Prospective (Months): ${this.prospectiveMonths}
Depth: ${this.depthStructured}
Volume: ${this.volume.toLocaleString()}
Discount: ${this.selectedDiscount}%

PRICING SUMMARY
Retrospective: $${this.retrospectivePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
Prospective: $${this.prospectivePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
Combined: $${this.combinedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
Final Total: $${this.finalTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

---
This document contains confidential and proprietary information.
Unauthorized copying, distribution, or use is strictly prohibited.
    `.trim();

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "clinical_pricing_results.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    console.log('Pricing results exported to PDF (text format)');
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
