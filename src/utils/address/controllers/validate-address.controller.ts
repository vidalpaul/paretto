import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { ValidateAddressViewModel } from './view-models/validate-address.view-model';
import { IValidateAddress } from '../interfaces/validate-address.interface';
import { ValidateAddressUsecase } from '../services/usecases/validate-address.usecase';

@Controller()
export class ValidateAddressController {
  constructor(
    private readonly addressValidityService: ValidateAddressUsecase,
  ) {}

  @ApiTags('utils')
  @ApiOperation({ summary: 'Get address validity path' })
  @ApiOkResponse({ description: 'A Polkadot address validator' })
  @Get('/utils/address/validate/:address')
  async isValidAddress(
    @Param('address') address: string,
  ): Promise<ValidateAddressViewModel> {
    try {
      return await this.addressValidityService.isValidAddress({
        address,
      } as IValidateAddress);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
