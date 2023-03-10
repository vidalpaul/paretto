import { IVerifySignature } from 'src/utils/signature/interfaces/verify-signature.interface';
import { VerifySignaturePort } from 'src/utils/signature/providers/ports/verify-signature.port';

export class VerifySignatureProviderDouble implements VerifySignaturePort {
  verifySignature(verifySignatureRequest: IVerifySignature): Promise<boolean> {
    if (verifySignatureRequest.signature === 'invalid') {
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  }
}
