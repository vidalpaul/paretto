import { ValidateAddressViewModel } from './validate-address.view-model';

describe('ValidateAddressViewModel', () => {
  let validateAddressViewModel: ValidateAddressViewModel;

  beforeEach(async () => {
    validateAddressViewModel = {
      address: 'fake_valid_address',
      isValid: true,
    };
  });

  it('should be defined', () => {
    expect(validateAddressViewModel).toBeDefined();
  });

  it('should have a property address', () => {
    expect(validateAddressViewModel.address).toBeDefined();
  });

  it('should have a property isValid', () => {
    expect(validateAddressViewModel.isValid).toBeDefined();
  });
});
