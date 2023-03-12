import { ValidateMnemonicsViewModel } from './validate-mnemonics.view-model';

describe('ValidateMnemonicsViewModel', () => {
  it('should be defined', () => {
    expect(new ValidateMnemonicsViewModel('mnemonic', true)).toBeDefined();
  });

  it('should have a mnemonic property', () => {
    expect(
      new ValidateMnemonicsViewModel('mnemonic', true).mnemonic,
    ).toBeDefined();

    expect(new ValidateMnemonicsViewModel('mnemonic', true).mnemonic).toBe(
      'mnemonic',
    );
  });

  it('should have a isValid property', () => {
    expect(
      new ValidateMnemonicsViewModel('mnemonic', true).isValid,
    ).toBeDefined();
    expect(new ValidateMnemonicsViewModel('mnemonic', true).isValid).toBe(true);
  });
});
