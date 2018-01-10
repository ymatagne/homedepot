import { Component, OnInit, Input } from '@angular/core';
import { FixerService } from '../../services/fixer.service';
import { environment } from '../../../environments/environment';
import { Converter } from '../../models/converter';

@Component({
  selector: 'app-convert-field',
  templateUrl: './convert-field.component.html'
})
export class ConvertFieldComponent {

  @Input() public label: String;
  public bases: Array<String>;
  public converter: Converter = new Converter();
  constructor(public fixerService: FixerService) {
    this.bases = environment.bases;
  }

  calculateNewValues(inversed: Boolean = false) {
    if (inversed) {
      const rate = Number.parseFloat(this.fixerService.getRates(this.converter.toBase.toString())[this.converter.fromBase.toString()]);
      if (rate) {
        this.converter.amount = Number(this.converter.convertedAmount) * rate;
      } else {
        this.converter.amount = this.converter.convertedAmount;
      }
    } else {
      const rate = Number.parseFloat(this.fixerService.getRates(this.converter.fromBase.toString())[this.converter.toBase.toString()]);
      if (rate) {
        this.converter.convertedAmount = Number(this.converter.amount) * rate;
      } else {
        this.converter.convertedAmount = this.converter.amount;
      }
    }
  }

}
