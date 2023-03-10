import { Test, TestingModule } from '@nestjs/testing';

import { VerifySignatureService } from 'src/utils/signature/services/verify-signature.service';
import { VerifySignaturePort } from 'src/utils/signature/providers/ports/verify-signature.port';
import { VerifySignatureServiceDouble } from 'test/__doubles__/utils/signature/services/verify-signature.service.double';
import { IVerifySignature } from 'src/utils/signature/interfaces/verify-signature.interface';
import { VerifySignatureViewModel } from 'src/utils/signature/controllers/view-models/verify-signature.view-model';
import { VerifySignatureFailedError } from 'src/utils/signature/errors/verify-signature-failed.error';
import { VerifySignatureProviderDouble } from 'test/__doubles__/utils/signature/providers/verify-signature.provider.double';

describe('VerifySignatureService', () => {
  let service: VerifySignatureService;
  let provider: VerifySignaturePort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VerifySignatureService,
        {
          provide: VerifySignaturePort,
          useClass: VerifySignatureProviderDouble,
        },
      ],
    }).compile();

    service = module.get<VerifySignatureService>(VerifySignatureService);
    provider = module.get<VerifySignaturePort>(VerifySignaturePort);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return true if a valid signature is provided', async () => {
    const verifySignatureRequest: IVerifySignature = {
      signature: 'valid',
      signedMessage: 'signedMessage',
      address: 'address',
    };
    const isValid = await service.verifySignature(verifySignatureRequest);
    expect(isValid.isValid).toBeTruthy();
  });

  it('should return false if an invalid signature is provided', async () => {
    const verifySignatureRequest: IVerifySignature = {
      signature: 'invalid',
      signedMessage: 'signedMessage',
      address: 'address',
    };
    const isInvalid = await service.verifySignature(verifySignatureRequest);
    expect(isInvalid.isValid).toBeFalsy();
  });

  it('should throw an error if the provider throws an error', async () => {
    const verifySignatureRequest: IVerifySignature = {
      signature: 'invalid',
      signedMessage: 'invalid',
      address: 'address',
    };
    jest.spyOn(provider, 'verifySignature').mockImplementation(() => {
      throw new Error();
    });
    await expect(
      service.verifySignature(verifySignatureRequest),
    ).rejects.toThrowError(VerifySignatureFailedError);
  });
});
