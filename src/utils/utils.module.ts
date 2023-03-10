import { Module } from '@nestjs/common';

import { AddressModule } from './address/address.module';
import { SignatureModule } from './signature/signature.module';

@Module({
  imports: [AddressModule, SignatureModule],
  exports: [AddressModule, SignatureModule],
})
export class UtilsModule {}
