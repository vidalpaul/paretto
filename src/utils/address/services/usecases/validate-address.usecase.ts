import { ValidateAddressViewModel } from 'src/utils/address/controllers/view-models/validate-address.view-model';
import { IValidateAddress } from 'src/utils/address/interfaces/validate-address.interface';

export abstract class ValidateAddressUsecase {
  /**
   * Check if an address is a valid Polkadot address
   * @param {string} address The account address
   * @returns {Promise<ValidateAddressViewModel>} The result of the validation
   */
  abstract isValidAddress(
    validateAddressRequest: IValidateAddress,
  ): Promise<ValidateAddressViewModel>;
}
