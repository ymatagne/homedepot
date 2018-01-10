import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NglModule } from 'ng-lightning/ng-lightning';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { ConvertFieldComponent } from './converter/convert-field/convert-field.component';
import { HttpClientModule } from '@angular/common/http';
import { FixerService } from './services/fixer.service';


@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    ConvertFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NglModule.forRoot()
  ],
  providers: [FixerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
