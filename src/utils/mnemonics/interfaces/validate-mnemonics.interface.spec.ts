import { IValidateMnemonics } from './validate-mnemonics.interface';

describe('IValidateMnemonics', () => {
  let iValidateMnemonics: IValidateMnemonics;

  beforeEach(async () => {
    iValidateMnemonics = {
      mnemonics: 'fake_mnemonic',
    };
  });

  it('should be defined', () => {
    expect(iValidateMnemonics).toBeDefined();
  });

  it('should have a property mnemonic', () => {
    expect(iValidateMnemonics.mnemonics).toBeDefined();
  });
});
