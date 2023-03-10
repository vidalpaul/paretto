import { Test, TestingModule } from '@nestjs/testing';

import { ValidateAddressController } from 'src/utils/address/controllers/validate-address.controller';
import { ValidateAddressUsecase } from 'src/utils/address/services/usecases/validate-address.usecase';
import { ValidateAddressServiceDouble } from 'test/__doubles__/services/validate-address.service.double';

describe('ValidateAddressController', () => {
  let controller: ValidateAddressController;
  let service: ValidateAddressUsecase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidateAddressController],
      providers: [
        {
          provide: ValidateAddressUsecase,
          useClass: ValidateAddressServiceDouble,
        },
      ],
    }).compile();

    controller = module.get<ValidateAddressController>(
      ValidateAddressController,
    );
    service = module.get<ValidateAddressUsecase>(ValidateAddressUsecase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return true if address is valid', async () => {
    const addressValidationRequest = {
      address: 'fake_valid_address',
    };

    const isValid = await controller.isValidAddress(
      addressValidationRequest.address,
    );

    expect(isValid).toEqual({
      address: addressValidationRequest.address,
      isValid: true,
    });
  });

  it('should return false if address is invalid', async () => {
    const addressValidationRequest = {
      address: 'fake_invalid_address',
    };

    const isValid = await controller.isValidAddress(
      addressValidationRequest.address,
    );

    expect(isValid).toEqual({
      address: addressValidationRequest.address,
      isValid: false,
    });
  });
});
