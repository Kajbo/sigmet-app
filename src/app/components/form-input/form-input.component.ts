import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
    @Input() isMetar!: boolean;
    @Output() isMetarChange = new EventEmitter<boolean>();
    
    @Input() isSigmet!: boolean;
    @Output() isSigmetChange = new EventEmitter<boolean>();
    
    @Input() isTaf!: boolean;
    @Output() isTafChange = new EventEmitter<boolean>();
    
    @Input() airports!: string;
    @Output() airportsChange = new EventEmitter<string>();
    
    @Input() countries!: string;
    @Output() countriesChange = new EventEmitter<string>();
    
    @Output() buttonClicked = new EventEmitter<boolean>();
    clickButton() {
        this.isMetarChange.emit(this.isMetar)
        this.isSigmetChange.emit(this.isSigmet)
        this.isTafChange.emit(this.isTaf)
        this.airportsChange.emit(this.airports)
        this.countriesChange.emit(this.countries)
        this.buttonClicked.emit(true)
    }
}
