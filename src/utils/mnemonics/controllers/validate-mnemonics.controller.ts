import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { ValidateMnemonicsViewModel } from './view-models/validate-mnemonics.view-model';
import { ValidateMnemonicsUsecase } from '../services/usecases/validate-mnemonics.usecase';
import { IValidateMnemonics } from '../interfaces/validate-mnemonics.interface';

@Controller()
export class ValidateMnemonicsController {
  constructor(
    private readonly validateMnemonicsService: ValidateMnemonicsUsecase,
  ) {}

  @ApiTags('utils', 'mnemonics', 'validate-mnemonics')
  @ApiOperation({ summary: 'Generate mnemonics path' })
  @ApiOkResponse({ description: 'A mnemonic phrase' })
  @Get('/utils/mnemonics/validate/:mnemonics')
  async generateMnemonics(
    @Param('mnemonics') mnemonics: string,
  ): Promise<ValidateMnemonicsViewModel> {
    try {
      return await this.validateMnemonicsService.validateMnemonics({
        mnemonics,
      } as IValidateMnemonics);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
