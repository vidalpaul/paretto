import { Injectable } from '@nestjs/common';

import { GenerateMnemonicsViewModel } from '../controllers/view-models/generate-mnemonics.view-model';
import { GenerateMnemonicsUsecase } from './usecases/generate-mnemonics.usecase';
import { GenerateMnemonicsPort } from '../providers/ports/generate-mnemonics.port';

@Injectable()
export class GenerateMnemonicsService implements GenerateMnemonicsUsecase {
  constructor(private readonly generateMnemonicsPorts: GenerateMnemonicsPort) {}
  /**
   * Generate a mnemonic phrase
   * @returns {Promise<GenerateMnemonicsViewModel>}
   * @memberof GenerateMnemonicsService
   * @throws {GenerateMnemonicsFailed}
   */
  async generateMnemonics(): Promise<GenerateMnemonicsViewModel> {
    const mnemonics = await this.generateMnemonicsPorts.generateMnemonics();
    return new GenerateMnemonicsViewModel(mnemonics);
  }
}
