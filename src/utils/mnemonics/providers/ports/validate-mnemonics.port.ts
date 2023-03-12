export abstract class ValidateMnemonicsPort {
  /**
   * Validate a mnemonic phrase
   * @param mnemonics
   * @returns boolean
   */
  abstract validateMnemonics(mnemonics: string): Promise<boolean>;
}
