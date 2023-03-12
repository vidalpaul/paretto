import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

import { GenerateMnemonicsViewModel } from './view-models/generate-mnemonics.view-model';
import { GenerateMnemonicsUsecase } from '../services/usecases/generate-mnemonics.usecase';

@Controller()
export class ValidateAddressController {
  constructor(
    private readonly generateMnemonicsService: GenerateMnemonicsUsecase,
  ) {}

  @ApiTags('utils', 'mnemonics', 'generate-mnemonics')
  @ApiOperation({ summary: 'Generate mnemonics path' })
  @ApiCreatedResponse({ description: 'A mnemonic phrase' })
  @Get('/utils/mnemonics/generate')
  async generateMnemonics(): Promise<GenerateMnemonicsViewModel> {
    try {
      return await this.generateMnemonicsService.generateMnemonics();
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
