import { Test, TestingModule } from '@nestjs/testing';

import { VerifySignatureController } from 'src/utils/signature/controllers/verify-signature.controller';
import { IVerifySignature } from 'src/utils/signature/interfaces/verify-signature.interface';
import { VerifySignatureUsecase } from 'src/utils/signature/services/usecases/verify-signature.usecase';
import { VerifySignatureServiceDouble } from 'test/__doubles__/utils/signature/services/verify-signature.service.double';
import { VerifySignatureViewModel } from 'src/utils/signature/controllers/view-models/verify-signature.view-model';

describe('VerifySignatureController', () => {
  let controller: VerifySignatureController;
  let service: VerifySignatureServiceDouble;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerifySignatureController],
      providers: [
        {
          provide: VerifySignatureUsecase,
          useClass: VerifySignatureServiceDouble,
        },
      ],
    }).compile();

    controller = module.get<VerifySignatureController>(
      VerifySignatureController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return true if a valid signature is provided', async () => {
    const verifySignatureRequest: IVerifySignature = {
      signature: 'valid',
      signedMessage: 'signedMessage',
      address: 'address',
    };
    expect(await controller.verifySignature(verifySignatureRequest)).toEqual({
      signedMessage: verifySignatureRequest.signedMessage,
      isValid: true,
    });
  });

  it('should return false if an invalid signature is provided', async () => {
    const verifySignatureRequest: IVerifySignature = {
      signature: 'invalid',
      signedMessage: 'signedMessage',
      address: 'address',
    };
    expect(await controller.verifySignature(verifySignatureRequest)).toEqual({
      signedMessage: verifySignatureRequest.signedMessage,
      isValid: false,
    });
  });
});
