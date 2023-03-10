import { Module } from '@nestjs/common';

import { VerifySignatureController } from './controllers/verify-signature.controller';
import { VerifySignaturePort } from './providers/ports/verify-signature.port';
import { VerifySignatureProvider } from './providers/verify-signature.provider';
import { VerifySignatureUsecase } from './services/usecases/verify-signature.usecase';
import { VerifySignatureService } from './services/verify-signature.service';

@Module({
  controllers: [VerifySignatureController],
  providers: [
    { provide: VerifySignaturePort, useClass: VerifySignatureProvider },
    { provide: VerifySignatureUsecase, useClass: VerifySignatureService },
  ],
})
export class SignatureModule {}
