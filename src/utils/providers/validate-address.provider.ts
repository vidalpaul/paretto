import { Injectable, Logger } from '@nestjs/common';

import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex } from '@polkadot/util';

import { ValidateAddressPort } from './ports/validate-address.port';

@Injectable()
export class ValidateAddressProvider implements ValidateAddressPort {
  private readonly logger: Logger = new Logger(ValidateAddressProvider.name);

  async isValidAddress(address: string): Promise<boolean> {
    this.logger.log(`[isValidAddress] Validating address: ${address}`);
    try {
      encodeAddress(
        isHex(address) ? hexToU8a(address) : decodeAddress(address),
      );
      return true;
    } catch (err) {
      return false;
    }
  }
}
