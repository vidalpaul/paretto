import {
  UnitsConversionFromNaNFailed,
  UnitsConversionFromNegativeFailed,
} from '../../errors/units-conversion-failed.error';

export abstract class UnitsUtilsPort {
  /**
   * Converts from DOT to plancks
   * @param {number} dot The amount of DOT to convert
   * @param {10 | 12} precision The precision of the conversion
   * @returns {number} The amount of plancks
   * @memberof UnitsUtilsPort
   * @throws {UnitsConversionFromNaNFailed} If the amount of plancks is not a valid number
   * @throws {UnitsConversionFromNegativeFailed} If the amount of plancks is negative
   */
  abstract toPlanck(dot: number, precision: 10 | 12): number;

  /**
   * Converts from plancks to DOT
   * @param {number} planck The amount of plancks to convert
   * @param {10 | 12} precision The precision of the conversion
   * @returns {number} The amount of DOT
   * @memberof UnitsUtilsPort
   * @throws {UnitsConversionFromNaNFailed} If the amount of plancks is not a valid number
   * @throws {UnitsConversionFromNegativeFailed} If the amount of plancks is negative
   */
  abstract fromPlanck(planck: number, precision: 10 | 12): number;
}
