import { ValidateAddressFailed } from './validate-address-failed.error';

describe('ValidateAddressFailed', () => {
  let validateAddressFailed: ValidateAddressFailed;

  beforeEach(async () => {
    validateAddressFailed = new ValidateAddressFailed('fake_error_message');
  });

  it('should be defined', () => {
    expect(validateAddressFailed).toBeDefined();
  });

  it('should have a property name', () => {
    expect(validateAddressFailed.name).toBeDefined();
  });

  it('should have a property message', () => {
    expect(validateAddressFailed.message).toBeDefined();
  });

  it('should have a property stack', () => {
    expect(validateAddressFailed.stack).toBeDefined();
  });

  it('should have a message with the correct text', () => {
    expect(validateAddressFailed.message).toBe(
      'Failure to validate address. Reason: fake_error_message',
    );
  });
});
