import { Injectable, Logger } from '@nestjs/common';

import { UnitsUtilsPort } from './ports/units-utils.port';

import { Big } from 'big.js';
import {
  UnitsConversionFromNaNFailed,
  UnitsConversionFromNegativeFailed,
} from '../errors/units-conversion-failed.error';

@Injectable()
export class UnitsUtilProvider implements UnitsUtilsPort {
  toPlanck(dot: number, precision: 10 | 12): number {
    if (isNaN(dot)) {
      throw new UnitsConversionFromNaNFailed();
    }
    if (dot < 0) {
      throw new UnitsConversionFromNegativeFailed();
    }
    return new Big(dot).times(new Big(10).pow(precision)).toNumber();
  }

  fromPlanck(planck: number, precision: 10 | 12): number {
    if (isNaN(planck)) {
      throw new UnitsConversionFromNaNFailed();
    }
    if (planck < 0) {
      throw new UnitsConversionFromNegativeFailed();
    }
    return new Big(planck).div(new Big(10).pow(precision)).toNumber();
  }
}
