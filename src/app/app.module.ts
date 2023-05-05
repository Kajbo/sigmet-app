import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormMainComponent } from './components/form-main/form-main.component';
import { FormsModule } from '@angular/forms';
import { OpmetService } from './services/opmet.service';
import { HttpClientModule } from '@angular/common/http';
import { OutputTableComponent } from './components/output-table/output-table.component';
// import { TimeFormatConverterComponent } from './components/time-format-converter/time-format-converter.component';
import { TextColoringComponent } from './components/text-coloring/text-coloring.component';
// import { FormMainComponent, InputFormComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormMainComponent,
    OutputTableComponent,
    // TimeFormatConverterComponent,
    TextColoringComponent
],
imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OpmetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
