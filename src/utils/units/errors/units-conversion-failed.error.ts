export class UnitsConversionFromNaNFailed extends Error {
  constructor() {
    super(`Failure to convert units. Reason: NaN`);
    this.name = 'UnitsConversionFromNaNFailed';
  }
}

export class UnitsConversionFromNegativeFailed extends Error {
  constructor() {
    super(
      `Failure to validate address. Reason: tried to convert negative number`,
    );
    this.name = 'UnitsConversionFromNegativeFailed';
  }
}
