export class ValidateMnemonicsFailed extends Error {
  constructor(msg: string) {
    super(`Failure to validate mnemonics. Reason: ${msg.split('[')[0]}`);
    this.name = 'ValidateMnemonicsFailed';
  }
}
