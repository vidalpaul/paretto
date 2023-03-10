import { Module } from '@nestjs/common';

import { ValidateAddressController } from './address/controllers/validate-address.controller';
import { ValidateAddressUsecase } from './address/services/usecases/validate-address.usecase';
import { ValidateAddressService } from './address/services/validate-address.service';
import { ValidateAddressPort } from './address/providers/ports/validate-address.port';
import { ValidateAddressProvider } from './address/providers/validate-address.provider';
import { AddressModule } from './address/address.module';

@Module({
  imports: [AddressModule],
  exports: [AddressModule],
})
export class UtilsModule {}
