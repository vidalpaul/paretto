import { Injectable } from '@nestjs/common';

import { ValidateMnemonicsPort } from './ports/validate-mnemonics.port';
import { ValidateMnemonicsFailed } from '../errors/validate-mnemonics-failed.error';

import { mnemonicValidate } from '@polkadot/util-crypto';

@Injectable()
export class ValidateMnemonicsProvider implements ValidateMnemonicsPort {
  /**
   * Validate a mnemonic phrase
   * @param mnemonics
   * @returns
   */
  async validateMnemonics(mnemonics: string): Promise<boolean> {
    try {
      return mnemonicValidate(mnemonics);
    } catch (err) {
      throw new ValidateMnemonicsFailed(err.message);
    }
  }
}
