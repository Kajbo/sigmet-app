import { Component, Input, SimpleChanges } from '@angular/core';
import { OmpetResult } from '../../models';

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.css']
})
export class OutputTableComponent {
    @Input() inputData?:OmpetResult[] = [];
    tableData:Record<string, OmpetResult[]> = {}
    
    ngOnChanges(changes: SimpleChanges) {
        this.tableData = {}
        changes['inputData'].currentValue.forEach((element:OmpetResult) => {
            if (!this.tableData[element.stationId]) {
                this.tableData[element.stationId] = []
            }
            this.tableData[element.stationId].push(element)
        });
        
    }
}
