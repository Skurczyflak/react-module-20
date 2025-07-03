import { isA } from "./isA";

export const convertUSDToPLN = (USD) => {
  if(isA(USD, "string")){
    return NaN;
  }else if(isA(USD, "number") && USD > 0){
    const USDtoPLN = USD * 3.5;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PLN'
    });

    return formatter.format(USDtoPLN).replace(/\u00a0/g, ' ');

  }else if(USD < 0){
    return "PLN 0.00";
  }else {
    if(!USD && !isA(USD, "object")){
      return NaN;
    }else {
      return "Error";
    }
  }
}