import { OpmetApiPostRequestQuery } from "../models";

export function getOpmetApiPostRequestQuery(
  id: number,
  isMetar: boolean,
  isSigmet: boolean,
  isTaf: boolean,
  airports: string,
  countries: string
):OpmetApiPostRequestQuery {
  const strId = `${id < 10 ? '0' + id : id}`;
  const reportTypes = getReportTypes(isMetar, isSigmet, isTaf);
  
  return {
    id: `query${strId}`,
    method: `query`,
    params: [
      {
        id: `briefing${strId}`,
        reportTypes,
        ...( airports.length && {stations: airports.split(' ')}),
        ...( countries.length && {countries: countries.split(' ')}),
      },
    ],
  };
}

function getReportTypes(
  isMetar: boolean,
  isSigmet: boolean,
  isTaf: boolean
): string[] {
  const reportTypes = [];
  if (isMetar) {
    reportTypes.push('METAR');
  }
  if (isSigmet) {
    reportTypes.push('SIGMET');
  }
  if (isTaf) {
    reportTypes.push('TAF');
  }
  return reportTypes;
}
