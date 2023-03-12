export class GenerateMnemonicsFailed extends Error {
  constructor(msg: string) {
    super(`Failure to generate mnemonics. Reason: ${msg.split('[')[0]}`);
    this.name = 'GenerateMnemonicsFailed';
  }
}
