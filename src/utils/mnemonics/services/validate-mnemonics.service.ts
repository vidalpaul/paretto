import { Injectable } from '@nestjs/common';

import { IValidateMnemonics } from '../interfaces/validate-mnemonics.interface';
import { ValidateMnemonicsViewModel } from '../controllers/view-models/validate-mnemonics.view-model';
import { ValidateMnemonicsUsecase } from './usecases/validate-mnemonics.usecase';
import { ValidateMnemonicsPort } from '../providers/ports/validate-mnemonics.port';

@Injectable()
export class ValidateMnemonicsService implements ValidateMnemonicsUsecase {
  constructor(private readonly validateMnemonicsPort: ValidateMnemonicsPort) {}

  /**
   * Validate a mnemonic phrase
   * @param mnemonics
   * @returns
   */
  async validateMnemonics(
    validateMnemonicsRequest: IValidateMnemonics,
  ): Promise<ValidateMnemonicsViewModel> {
    const { mnemonics } = validateMnemonicsRequest;

    const isValid = await this.validateMnemonicsPort.validateMnemonics(
      mnemonics,
    );

    return new ValidateMnemonicsViewModel(mnemonics, isValid);
  }
}
