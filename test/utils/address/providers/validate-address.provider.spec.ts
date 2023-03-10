import { Test, TestingModule } from '@nestjs/testing';

import { ValidateAddressProvider } from 'src/utils/address/providers/validate-address.provider';

describe('ValidateAddressProvider', () => {
  let provider: ValidateAddressProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidateAddressProvider],
    }).compile();

    provider = module.get<ValidateAddressProvider>(ValidateAddressProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should return true if address is valid', async () => {
    const addressValidationRequest = {
      address: '5GrpknVvGGrGH3EFuURXeMrWHvbpj3VfER1oX5jFtuGbfzCE',
    };

    const isValid = await provider.isValidAddress(
      addressValidationRequest.address,
    );

    expect(isValid).toEqual(true);
  });

  it('should return false if address is invalid', async () => {
    const addressValidationRequest = {
      address: 'fake_invalid_address',
    };

    const isValid = await provider.isValidAddress(
      addressValidationRequest.address,
    );

    expect(isValid).toEqual(false);
  });
});
