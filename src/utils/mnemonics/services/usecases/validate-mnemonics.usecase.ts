import { ValidateMnemonicsViewModel } from '../../controllers/view-models/validate-mnemonics.view-model';

export abstract class ValidateMnemonicsUsecase {
  abstract validateMnemonics(
    mnemonics: string,
  ): Promise<ValidateMnemonicsViewModel>;
}
