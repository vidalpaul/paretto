import { IVerifySignature } from '../../interfaces/verify-signature.interface';

export abstract class VerifySignaturePort {
  /**
   * Verifies if a signed message was signed by an address
   * @param verifySignatureRequest
   * @returns {Promise<VerifySignatureViewModel>}
   * @memberof VerifySignatureUsecase
   */
  abstract verifySignature(
    verifySignatureRequest: IVerifySignature,
  ): Promise<boolean>;
}
