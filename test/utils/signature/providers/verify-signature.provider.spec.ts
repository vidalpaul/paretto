import { Test, TestingModule } from '@nestjs/testing';
import { IVerifySignature } from 'src/utils/signature/interfaces/verify-signature.interface';

import { VerifySignatureProvider } from 'src/utils/signature/providers/verify-signature.provider';

describe('VerifySignatureProvider', () => {
  let provider: VerifySignatureProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifySignatureProvider],
    }).compile();

    provider = module.get<VerifySignatureProvider>(VerifySignatureProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it.skip('should return true if a valid signature is provided', async () => {
    const verifySignatureRequest: IVerifySignature = {
      signature: 'valid',
      signedMessage: 'signedMessage',
      address: 'address',
    };
    const isValid = await provider.verifySignature(verifySignatureRequest);
    expect(isValid).toBeTruthy();
  });

  it.skip('should return false if an invalid signature is provided', async () => {
    const verifySignatureRequest: IVerifySignature = {
      signature: 'invalid',
      signedMessage: 'signedMessage',
      address: 'address',
    };
    const isInvalid = await provider.verifySignature(verifySignatureRequest);
    expect(isInvalid).toBeFalsy();
  });
});
