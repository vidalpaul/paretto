import { Injectable, Logger } from '@nestjs/common';

import { VerifySignatureUsecase } from './usecases/verify-signature.usecase';
import { VerifySignatureFailedError } from '../errors/verify-signature-failed.error';
import { VerifySignatureViewModel } from '../controllers/view-models/verify-signature.view-model';
import { IVerifySignature } from '../interfaces/verify-signature.interface';
import { VerifySignaturePort } from '../providers/ports/verify-signature.port';

@Injectable()
export class VerifySignatureService implements VerifySignatureUsecase {
  private logger: Logger = new Logger('VerifySignatureService');

  constructor(private readonly _provider: VerifySignaturePort) {}

  async verifySignature(
    verifySignatureRequest: IVerifySignature,
  ): Promise<VerifySignatureViewModel> {
    try {
      this.logger.log('Verifying signature');

      const isValid = await this._provider.verifySignature(
        verifySignatureRequest,
      );

      return {
        signedMessage: verifySignatureRequest.signedMessage,
        isValid,
      } as VerifySignatureViewModel;
    } catch (error) {
      throw new VerifySignatureFailedError(error.message);
    }
  }
}
