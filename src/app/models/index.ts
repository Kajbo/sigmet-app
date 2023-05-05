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