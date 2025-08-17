import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clinical-step2',
  templateUrl: './clinical-step2.component.html',
  styleUrls: ['./clinical-step2.component.css']
})
export class ClinicalStep2Component {
  @Input() selectedSegment: string = '';
  @Input() selectedDataType: string = '';
  @Output() goBackEvent = new EventEmitter<void>();

  goBack() {
    this.goBackEvent.emit();
  }

  isNextButtonEnabled(): boolean {
    // Add your Step 2 validation logic here
    return true; // For now, always enabled
  }
}
