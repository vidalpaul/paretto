import { Module } from '@nestjs/common';

import { ValidateAddressController } from './controllers/validate-address.controller';
import { ValidateAddressUsecase } from './services/usecases/validate-address.usecase';
import { ValidateAddressService } from './services/validate-address.service';
import { ValidateAddressPort } from './providers/ports/validate-address.port';
import { ValidateAddressProvider } from './providers/validate-address.provider';

@Module({
  controllers: [ValidateAddressController],
  providers: [
    { provide: ValidateAddressPort, useClass: ValidateAddressProvider },
    { provide: ValidateAddressUsecase, useClass: ValidateAddressService },
  ],
})
export class UtilsModule {}
