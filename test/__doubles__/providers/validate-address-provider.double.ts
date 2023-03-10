import { ValidateAddressPort } from 'src/utils/providers/ports/validate-address.port';

export class ValidateAddressProviderDouble implements ValidateAddressPort {
  async isValidAddress(address: string): Promise<boolean> {
    if (address === 'fake_valid_address') {
      return true;
    } else {
      return false;
    }
  }
}
