export class VerifySignatureFailedError extends Error {
  constructor(msg: string) {
    super(
      `Failure to verify signature. This is an app error and doesn't mean an invalid signature was provided. Reason: ${
        msg.split('[')[0]
      }`,
    );
    this.name = 'VerifySignatureFailed';
  }
}
