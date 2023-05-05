import { Component } from '@angular/core';
import { OpmetService } from 'src/app/services/';
import { OmpetResult, OpmetApiResponse } from '../../models'
import { getOpmetApiPostRequestQuery } from 'src/app/helpers';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent {
    isMetar = true
    isSigmet = true
    isTaf = true
    airports = 'LZIB LKPR EGLL'
    countries = ''
    tableData:OmpetResult[] = [
        {
          "placeId": "icao:EGLL",
          "queryType": "METAR",
          "receptionTime": "2016-06-15T10:54:21.218Z",
          "refs": [
            "briefing01"
          ],
          "reportTime": "2016-06-15T10:50:00Z",
          "reportType": "MSG_METAR",
          "revision": "COR",
          "stationId": "EGLL",
          "text": "EGLL 151050Z AUTO 18008KT 130V250 9999 FEW033/// //////CB 19/11 Q0996 TEMPO SHRA=",
          "textHTML": "EGLL 151050Z AUTO 18008KT 130V250 <font color=\"blue\">9999</font> FEW033/// //////CB 19/11 Q0996 TEMPO SHRA=",
          "reportTimeSlovak": new Date("2016-06-15T10:50:00Z").toLocaleString('sk')
        },
        {
          "placeId": "icao:LKPR",
          "queryType": "METAR",
          "receptionTime": "2016-06-15T11:03:10.171Z",
          "refs": [
            "briefing01"
          ],
          "reportTime": "2016-06-15T11:00:00Z",
          "reportType": "MSG_METAR",
          "stationId": "LKPR",
          "text": "LKPR 151100Z 23007KT 9999 BKN017 16/12 Q1002 NOSIG=",
          "textHTML": "LKPR 151100Z 23007KT 9999 <font color=\"white\">BKN017</font> 16/12 Q1002 NOSIG=",
          "reportTimeSlovak": new Date("2016-06-15T11:00:00Z").toLocaleString('sk')
        }
      ]
    
    isError = false
    errorMessage = ''
    
    constructor(private opmetService:OpmetService ){}
    submitData(isSubmit:boolean){
        this.isError = false
        
        if (!this.isFormValid()) {
            this.isError = true
            this.errorMessage = 'not enough data provided to call service'
            return
        }
        
        const response = this.opmetService.postRequest(getOpmetApiPostRequestQuery(
            this.tableData.length,
            this.isMetar,
            this.isSigmet,
            this.isTaf,
            this.airports,
            this.countries
        )).subscribe((response:OpmetApiResponse) => {
            if (!!response.error) {
                console.warn('is error', response.error)
                this.isError = true
                this.errorMessage = response.error.message
                return
            }
            
            if (!response.result.length) {
                this.isError = true
                this.errorMessage = 'no data returned for selection'
                return
            }
            
            const editedResponse = {...response}
            
            for (let i = 0; i < editedResponse.result.length; i++) {
                editedResponse.result[i].reportTimeSlovak = new Date(editedResponse.result[i].reportTime).toLocaleString('sk')
            }
            
            this.tableData = [...editedResponse.result]
            
        })
    }
    
    isFormValid() {
        return (this.isMetar || this.isSigmet || this.isTaf) && (this.airports || this.countries)
    }
}

