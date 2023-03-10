import { Test, TestingModule } from '@nestjs/testing';

import { ValidateAddressService } from 'src/utils/services/validate-address.service';
import { ValidateAddressPort } from 'src/utils/providers/ports/validate-address.port';
import { ValidateAddressProviderDouble } from 'test/__doubles__/providers/validate-address-provider.double';

describe('ValidateAddressService', () => {
  let service: ValidateAddressService;
  let provider: ValidateAddressPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ValidateAddressService,
        {
          provide: ValidateAddressPort,
          useClass: ValidateAddressProviderDouble,
        },
      ],
    }).compile();

    service = module.get<ValidateAddressService>(ValidateAddressService);
    provider = module.get<ValidateAddressPort>(ValidateAddressPort);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return true if address is valid', async () => {
    const addressValidationRequest = {
      address: 'fake_valid_address',
    };

    const isValid = await service.isValidAddress(addressValidationRequest);

    expect(isValid).toEqual({
      address: addressValidationRequest.address,
      isValid: true,
    });
  });

  it('should return false if address is invalid', async () => {
    const addressValidationRequest = {
      address: 'fake_invalid_address',
    };

    const isValid = await service.isValidAddress(addressValidationRequest);

    expect(isValid).toEqual({
      address: addressValidationRequest.address,
      isValid: false,
    });
  });
});
