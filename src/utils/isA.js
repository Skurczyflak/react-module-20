export function isA(variable, isNot) {
  if(typeof isNot === "string"){
    return typeof variable === `${isNot}`;
  }
}