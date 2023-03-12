import { Injectable } from '@nestjs/common';

import { GenerateMnemonicsFailed } from '../errors/generate-mnemonics-failed.error';
import { GenerateMnemonicsPort } from './ports/generate-mnemonics.port';

import { mnemonicGenerate } from '@polkadot/util-crypto';

@Injectable()
export class GenerateMnemonicsService implements GenerateMnemonicsPort {
  /**
   * Generate a mnemonic phrase
   * @returns {Promise<GenerateMnemonicsViewModel>}
   * @memberof GenerateMnemonicsService
   * @throws {GenerateMnemonicsFailed}
   */
  async generateMnemonics(): Promise<string> {
    try {
      return mnemonicGenerate();
    } catch (err) {
      throw new GenerateMnemonicsFailed(err.message);
    }
  }
}
