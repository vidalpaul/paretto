export class ValidateMnemonicsViewModel {
  mnemonic: string;
  isValid: boolean;

  constructor(mnemonic: string, isValid: boolean) {
    this.mnemonic = mnemonic;
    this.isValid = isValid;
  }
}
