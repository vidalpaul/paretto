export class UnitsConversionFromNaNFailed extends Error {
  constructor() {
    super(`Failure to convert units. Reason: Cannot convert from NaN`);
    this.name = 'UnitsConversionFromNaNFailed';
  }
}

export class UnitsConversionFromNegativeFailed extends Error {
  constructor() {
    super(
      `Failure to convert units. Reason: Cannot convert from negative number`,
    );
    this.name = 'UnitsConversionFromNegativeFailed';
  }
}
