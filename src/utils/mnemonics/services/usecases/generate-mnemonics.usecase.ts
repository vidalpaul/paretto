import { GenerateMnemonicsViewModel } from '../../controllers/view-models/generate-mnemonics.view-model';

export abstract class GenerateMnemonicsUsecase {
  /**
   * Generate a mnemonic phrase
   * @returns {Promise<GenerateMnemonicsViewModel>}
   * @memberof GenerateMnemonicsUsecase
   * @throws {GenerateMnemonicsFailed}
   */
  abstract generateMnemonics(): Promise<GenerateMnemonicsViewModel>;
}
