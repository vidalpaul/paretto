import { Injectable } from '@nestjs/common';
import { ValidateAddressViewModel } from '../controllers/view-models/validate-address.view-model';
import { ValidateAddressFailed } from '../errors/validate-address-failed.error';
import { IValidateAddress } from '../interfaces/validate-address.interface';
import { ValidateAddressPort } from '../providers/ports/validate-address.port';
import { ValidateAddressUsecase } from './usecases/validate-address.usecase';

@Injectable()
export class ValidateAddressService implements ValidateAddressUsecase {
  constructor(private readonly addressValidator: ValidateAddressPort) {}

  async isValidAddress(
    validateAddressRequest: IValidateAddress,
  ): Promise<ValidateAddressViewModel> {
    try {
      const isValid = await this.addressValidator.isValidAddress(
        validateAddressRequest.address,
      );
      return {
        address: validateAddressRequest.address,
        isValid,
      };
    } catch (error) {
      throw new ValidateAddressFailed(error.message);
    }
  }
}
