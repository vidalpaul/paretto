import { ValidateMnemonicsFailed } from './validate-mnemonics-failed.error';

describe('ValidateMnemonicsFailed', () => {
  it('should be defined', () => {
    expect(new ValidateMnemonicsFailed('message')).toBeDefined();
  });

  it('should have a message property', () => {
    expect(new ValidateMnemonicsFailed('message').message).toBeDefined();
    expect(new ValidateMnemonicsFailed('message').message).toBe(
      'Failure to validate mnemonics. Reason: message',
    );
  });
});
