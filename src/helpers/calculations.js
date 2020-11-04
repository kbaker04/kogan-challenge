/**
 * calculate cubic weight
 * receives 3 params
 * @param {*} length
 * @param {*} height
 * @param {*} width
 * returns calculated cubic weight
 **/

export const calcCubicWeight = (length, height, width) => {
  const convFactor = 250;
  //divide by 100 to convert cm to m
  let cubicM =
    (parseFloat(length) / 100) *
    (parseFloat(height) / 100) *
    (parseFloat(width) / 100);

  let cubicW = cubicM * convFactor;

  return cubicW.toFixed(2);
};
