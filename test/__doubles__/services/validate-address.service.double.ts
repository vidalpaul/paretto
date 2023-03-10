import { ValidateAddressViewModel } from 'src/utils/controllers/view-models/validate-address.view-model';
import { IValidateAddress } from 'src/utils/interfaces/validate-address.interface';
import { ValidateAddressUsecase } from 'src/utils/services/usecases/validate-address.usecase';

export class ValidateAddressServiceDouble implements ValidateAddressUsecase {
  async isValidAddress(
    addressValidationRequest: IValidateAddress,
  ): Promise<ValidateAddressViewModel> {
    if (addressValidationRequest.address === 'fake_valid_address') {
      return {
        address: addressValidationRequest.address,
        isValid: true,
      };
    } else {
      return {
        address: addressValidationRequest.address,
        isValid: false,
      };
    }
  }
}
