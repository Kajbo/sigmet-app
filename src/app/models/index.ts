// export type OpmetPostData = {
//     isMetar:boolean
//     isSigmet:boolean
//     isTaf:boolean
//     airports:string
//     countries:string
// }

export type OpmetApiPostRequestQuery = {
    id: string
    method: string
    params: {
        id: string
        reportTypes: string[]
        stations?: string[]
        countries?: string[]
    }[]
}

export type OmpetResult = {
    placeId?: string,
    queryType: string,
    receptionTime?: string, 
    refs?: string[],
    reportTime: string,
    reportType: string,
    revision?: string,
    stationId: string,
    text: string,
    textHTML?:string,
    validFrom?: string,
    validEnd?: string,
    reportTimeSlovak?:string
}

export type OpmetApiResponse = {
    error: any | null,
    id: string,
    result: OmpetResult[]
}

// {
//     error: null,
//     id: 'query01',
//     result: [
//       {
//         placeId: 'icao:EGLL',
//         queryType: 'METAR',
//         receptionTime: '2016-06-15T10:54:21.218Z',
//         refs: ['briefing01'],
//         reportTime: '2016-06-15T10:50:00Z',
//         reportType: 'MSG_METAR',
//         revision: 'COR',
//         stationId: 'EGLL',
//         text: 'EGLL 151050Z AUTO 18008KT 130V250 9999 FEW033/// //////CB 19/11 Q0996 TEMPO SHRA=',
//         textHTML:
//           'EGLL 151050Z AUTO 18008KT 130V250 <font color="blue">9999</font> FEW033/// //////CB 19/11 Q0996 TEMPO SHRA=',
//       },
//       {
//         placeId: 'icao:LKPR',
//         queryType: 'METAR',
//         receptionTime: '2016-06-15T11:03:10.171Z',
//         refs: ['briefing01'],
//         reportTime: '2016-06-15T11:00:00Z',
//         reportType: 'MSG_METAR',
//         stationId: 'LKPR',
//         text: 'LKPR 151100Z 23007KT 9999 BKN017 16/12 Q1002 NOSIG=',
//         textHTML:
//           'LKPR 151100Z 23007KT 9999 <font color="white">BKN017</font> 16/12 Q1002 NOSIG=',
//       },
//     ],
//   }