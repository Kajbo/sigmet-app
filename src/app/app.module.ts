import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormInputComponent, FormMainComponent, OutputTableComponent, TextColoringComponent } from './components/';
import { FormsModule } from '@angular/forms';
import { OpmetService } from './services/';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormMainComponent,
    OutputTableComponent,
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
