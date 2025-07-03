import { isA } from "./isA";
export const convertPLNToUSD = (PLN) => {
  if(isA(PLN, "string")){
    return NaN;
  }else if(isA(PLN, "number") && PLN > 0){

    const PLNtoUSD = PLN / 3.5;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');

  }else if(PLN < 0){
    return "$0.00";
  
  }else {
    if(!PLN && !isA(PLN, "object")){
      return NaN;
    }else{
      return "Error";
    }
    
  }
}