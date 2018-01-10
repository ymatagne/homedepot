import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html'
})
export class ConverterComponent implements OnInit {

  public disclamerUri: String;
  constructor() {
    this.disclamerUri = environment.disclamerUri;
  }

  ngOnInit() {
  }

}
