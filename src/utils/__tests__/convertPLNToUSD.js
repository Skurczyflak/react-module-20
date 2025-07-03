import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('fasgfd')).toBeNaN();
    expect(convertPLNToUSD('-6fsddsf')).toBeNaN();
  });
  it('should return NaN when input is empty',() => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return erorr when input is {}, []',() => {
    expect(convertPLNToUSD([125, 142, 21])).toBe('Error');
    expect(convertPLNToUSD(["125", "142", "21"])).toBe('Error');
    expect(convertPLNToUSD({number: 242, string: "sfasgas"})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  });
  it('should return $0.00 when input < 0', () => {
    expect(convertPLNToUSD(-12)).toBe('$0.00');
    expect(convertPLNToUSD(-52)).toBe('$0.00');
    expect(convertPLNToUSD(-752)).toBe('$0.00');
  })
});