import { GenerateMnemonicsViewModel } from './generate-mnemonics.view-model';

describe('GenerateMnemonicsViewModel', () => {
  it('should create an instance', () => {
    expect(new GenerateMnemonicsViewModel('')).toBeTruthy();
  });

  it('should have the mnemonic property', () => {
    const mnemonic = 'mnemonic';
    const generateMnemonicsViewModel = new GenerateMnemonicsViewModel(mnemonic);
    generateMnemonicsViewModel.mnemonic = mnemonic;
    expect(generateMnemonicsViewModel.mnemonic).toEqual(mnemonic);
  });
});
