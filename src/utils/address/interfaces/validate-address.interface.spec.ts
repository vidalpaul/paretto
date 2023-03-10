import { IValidateAddress } from './validate-address.interface';

describe('IValidateAddress', () => {
  let iValidateAddress: IValidateAddress;

  beforeEach(async () => {
    iValidateAddress = {
      address: 'fake_address',
    };
  });

  it('should be defined', () => {
    expect(iValidateAddress).toBeDefined();
  });

  it('should have a property address', () => {
    expect(iValidateAddress.address).toBeDefined();
  });
});
