export abstract class GenerateMnemonicsPort {
  /**
   * Generate a mnemonic phrase
   * @returns {Promise<GenerateMnemonicsViewModel>}
   * @memberof GenerateMnemonicsPorts
   * @throws {GenerateMnemonicsFailed}
   */
  abstract generateMnemonics(): Promise<string>;
}
