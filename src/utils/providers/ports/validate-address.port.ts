export abstract class ValidateAddressPort {
  /**
   * Check if address is valid
   * @param {string} address The account address
   * @returns {boolean} The address validity
   */
  abstract isValidAddress(address: string): Promise<boolean>;
}
