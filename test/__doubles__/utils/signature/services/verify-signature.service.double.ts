import { VerifySignatureViewModel } from 'src/utils/signature/controllers/view-models/verify-signature.view-model';
import { IVerifySignature } from 'src/utils/signature/interfaces/verify-signature.interface';
import { VerifySignatureUsecase } from 'src/utils/signature/services/usecases/verify-signature.usecase';

export class VerifySignatureServiceDouble implements VerifySignatureUsecase {
  async verifySignature(
    verifySignatureRequest: IVerifySignature,
  ): Promise<VerifySignatureViewModel> {
    if (verifySignatureRequest.signature === 'invalid') {
      return {
        signedMessage: verifySignatureRequest.signedMessage,
        isValid: false,
      };
    }
    return {
      signedMessage: verifySignatureRequest.signedMessage,
      isValid: true,
    };
  }
}
