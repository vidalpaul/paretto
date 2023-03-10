import { VerifySignatureFailedError } from './verify-signature-failed.error';

describe('VerifySignatureFailedError', () => {
  let verifySignatureFailedError: VerifySignatureFailedError;

  beforeEach(async () => {
    verifySignatureFailedError = new VerifySignatureFailedError(
      'No signature was provided',
    );
  });

  it('should be defined', () => {
    expect(verifySignatureFailedError).toBeDefined();
  });

  it('should have a property name', () => {
    expect(verifySignatureFailedError.name).toBeDefined();
  });

  it('should have a property message', () => {
    expect(verifySignatureFailedError.message).toBeDefined();
  });

  it('should have a property stack', () => {
    expect(verifySignatureFailedError.stack).toBeDefined();
  });

  it('should have a message with the correct text', () => {
    expect(verifySignatureFailedError.message).toBe(
      "Failure to verify signature. This is an app error and doesn't mean an invalid signature was provided. Reason: No signature was provided",
    );
  });
});
