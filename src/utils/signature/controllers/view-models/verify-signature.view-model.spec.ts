import { VerifySignatureViewModel } from './verify-signature.view-model';

describe('VerifySignatureViewModel', () => {
  let verifySignatureViewModel: VerifySignatureViewModel;

  beforeEach(async () => {
    verifySignatureViewModel = {
      signedMessage: 'fake_message',
      isValid: true,
    };
  });

  it('should be defined', () => {
    expect(verifySignatureViewModel).toBeDefined();
  });

  it('should have a property message', () => {
    expect(verifySignatureViewModel.signedMessage).toBeDefined();
    expect(typeof verifySignatureViewModel.signedMessage).toBe('string');
  });

  it('should have a property isValid', () => {
    expect(verifySignatureViewModel.isValid).toBeDefined();
    expect(typeof verifySignatureViewModel.isValid).toBe('boolean');
  });
});
