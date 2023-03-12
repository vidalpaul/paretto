import { ValidateMnemonicsViewModel } from '../../controllers/view-models/validate-mnemonics.view-model';
import { IValidateMnemonics } from '../../interfaces/validate-mnemonics.interface';

export abstract class ValidateMnemonicsUsecase {
  abstract validateMnemonics(
    validateMnemonicsRequest: IValidateMnemonics,
  ): Promise<ValidateMnemonicsViewModel>;
}
