import { convertUSDToPLN } from "../convertUSDToPLN";

describe('ConvertUSDToPLN', () => {
  it('should return proper value when good input', () => {
    expect(convertUSDToPLN(1)).toBe('PLN 3.50');
    expect(convertUSDToPLN(2)).toBe('PLN 7.00');
    expect(convertUSDToPLN(3)).toBe('PLN 10.50');
    expect(convertUSDToPLN(4)).toBe('PLN 14.00');
  });
  it('should return NaN when input is text', () => {
    expect(convertUSDToPLN('6')).toBeNaN();
    expect(convertUSDToPLN('fasgfd')).toBeNaN();
    expect(convertUSDToPLN('-6fsddsf')).toBeNaN();
  });
  it('should return NaN when input is empty',() => {
    expect(convertUSDToPLN()).toBeNaN();
  });
  it('should return erorr when input is {}, []',() => {
    expect(convertUSDToPLN([125, 142, 21])).toBe('Error');
    expect(convertUSDToPLN(["125", "142", "21"])).toBe('Error');
    expect(convertUSDToPLN({number: 242, string: "sfasgas"})).toBe('Error');
    expect(convertUSDToPLN([])).toBe('Error');
    expect(convertUSDToPLN({})).toBe('Error');
    expect(convertUSDToPLN(null)).toBe('Error');
    expect(convertUSDToPLN(function() {})).toBe('Error');
  });
  it('should return $0.00 when input < 0', () => {
    expect(convertUSDToPLN(-12)).toBe('PLN 0.00');
    expect(convertUSDToPLN(-52)).toBe('PLN 0.00');
    expect(convertUSDToPLN(-752)).toBe('PLN 0.00');
  })
});