import {
  UnitsConversionFromNaNFailed,
  UnitsConversionFromNegativeFailed,
} from './units-conversion-failed.error';

describe('UnitsConversionFromNaNFailed', () => {
  let unitsConversionFromNaNFailed: UnitsConversionFromNaNFailed;

  beforeEach(async () => {
    unitsConversionFromNaNFailed = new UnitsConversionFromNaNFailed();
  });

  it('should be defined', () => {
    expect(unitsConversionFromNaNFailed).toBeDefined();
  });

  it('should have a property name', () => {
    expect(unitsConversionFromNaNFailed.name).toBeDefined();
  });

  it('should have a property message', () => {
    expect(unitsConversionFromNaNFailed.message).toBeDefined();
  });

  it('should have a property stack', () => {
    expect(unitsConversionFromNaNFailed.stack).toBeDefined();
  });

  it('should have a message with the correct text', () => {
    expect(unitsConversionFromNaNFailed.message).toBe(
      'Failure to convert units. Reason: Cannot convert from NaN',
    );
  });
});

describe('UnitsConversionFromNegativeFailed', () => {
  let unitsConversionFromNegativeFailed: UnitsConversionFromNegativeFailed;

  beforeEach(async () => {
    unitsConversionFromNegativeFailed = new UnitsConversionFromNegativeFailed();
  });

  it('should be defined', () => {
    expect(unitsConversionFromNegativeFailed).toBeDefined();
  });

  it('should have a property name', () => {
    expect(unitsConversionFromNegativeFailed.name).toBeDefined();
  });

  it('should have a property message', () => {
    expect(unitsConversionFromNegativeFailed.message).toBeDefined();
  });

  it('should have a property stack', () => {
    expect(unitsConversionFromNegativeFailed.stack).toBeDefined();
  });

  it('should have a message with the correct text', () => {
    expect(unitsConversionFromNegativeFailed.message).toBe(
      'Failure to convert units. Reason: Cannot convert from negative number',
    );
  });
});
