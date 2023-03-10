import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { IVerifySignature } from '../interfaces/verify-signature.interface';
import { VerifySignatureViewModel } from './view-models/verify-signature.view-model';
import { VerifySignatureUsecase } from '../services/usecases/verify-signature.usecase';

@Controller('verify-signature')
export class VerifySignatureController {
  constructor(
    private readonly verifySignatureUsecase: VerifySignatureUsecase,
  ) {}

  @ApiTags('utils', 'signature', 'verify-signature')
  @ApiOperation({ summary: 'Verify signature' })
  @ApiOkResponse({ description: 'Signature is valid' })
  @Get('utils/signature/verify')
  async verifySignature(
    @Body() verifySignatureRequest: IVerifySignature,
  ): Promise<VerifySignatureViewModel> {
    try {
      return await this.verifySignatureUsecase.verifySignature(
        verifySignatureRequest,
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
