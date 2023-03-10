import { Injectable, Logger } from '@nestjs/common';

import {
  cryptoWaitReady,
  decodeAddress,
  signatureVerify,
} from '@polkadot/util-crypto';
import { u8aToHex } from '@polkadot/util';

import { VerifySignaturePort } from './ports/verify-signature.port';
import { IVerifySignature } from '../interfaces/verify-signature.interface';

@Injectable()
export class VerifySignatureProvider extends VerifySignaturePort {
  private readonly logger = new Logger(VerifySignatureProvider.name);

  async verifySignature(
    verifySignatureRequest: IVerifySignature,
  ): Promise<boolean> {
    this.logger.log('Verifying signature');

    await cryptoWaitReady();

    const { address, signedMessage, signature } = verifySignatureRequest;

    const decodedAddress = decodeAddress(address);
    const decodedSignature =
      typeof signature === 'string' ? signature : u8aToHex(signature);

    const { isValid } = signatureVerify(
      signedMessage,
      decodedSignature,
      decodedAddress,
    );

    return isValid;
  }
}
