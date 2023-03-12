import { GenerateMnemonicsFailed } from './generate-mnemonics-failed.error';

describe('GenerateMnemonicsFailed', () => {
  it('should create an instance', () => {
    expect(new GenerateMnemonicsFailed('test')).toBeTruthy();
  });

  it('should have a name', () => {
    expect(new GenerateMnemonicsFailed('test').name).toBe(
      'GenerateMnemonicsFailed',
    );
  });

  it('should have a message', () => {
    expect(new GenerateMnemonicsFailed('test').message).toBe(
      'Failure to generate mnemonics. Reason: test',
    );
  });
});
