import { IVerifySignature } from './verify-signature.interface';

describe('IVerifySignature', () => {
  let iVerifySignature: IVerifySignature;

  beforeEach(async () => {
    iVerifySignature = {
      address: 'fake_address',
      signedMessage: 'fake_message',
      signature: 'fake_signature',
    };
  });

  it('should be defined', () => {
    expect(iVerifySignature).toBeDefined();
  });

  it('should have a property address', () => {
    expect(iVerifySignature.address).toBeDefined();
  });

  it('should have a property message', () => {
    expect(iVerifySignature.signedMessage).toBeDefined();
  });

  it('should have a property signature', () => {
    expect(iVerifySignature.signature).toBeDefined();
  });
});
