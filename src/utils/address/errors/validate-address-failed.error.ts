export class ValidateAddressFailed extends Error {
  constructor(msg: string) {
    super(`Failure to validate address. Reason: ${msg.split('[')[0]}`);
    this.name = 'ValidateAddressFailed';
  }
}
