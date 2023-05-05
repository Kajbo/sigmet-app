import { Component, Input, SimpleChanges } from '@angular/core';
import { OmpetResult } from 'src/app/models';

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.css']
})
export class OutputTableComponent {
    @Input() tableData?:OmpetResult[] = [];
    
    ngOnChanges(changes: SimpleChanges) {
        // changes.prop contains the old and the new value...
    }
}
