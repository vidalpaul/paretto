import { Test, TestingModule } from '@nestjs/testing';

import { UnitsUtilsPort } from './ports/units-utils.port';
import { UnitsUtilProvider } from './units-util.provider';
import {
  UnitsConversionFromNegativeFailed,
  UnitsConversionFromNaNFailed,
} from '../errors/units-conversion-failed.error';

import { Big } from 'big.js';

describe('UnitsUtilProvider', () => {
  let unitsUtilProvider: UnitsUtilProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UnitsUtilProvider,
        {
          provide: UnitsUtilsPort,
          useValue: {},
        },
      ],
    }).compile();

    unitsUtilProvider = module.get<UnitsUtilProvider>(UnitsUtilProvider);
  });

  it('should be defined', () => {
    expect(unitsUtilProvider).toBeDefined();
  });

  describe('toPlanck', () => {
    it('should convert from DOT to plancks', () => {
      expect(unitsUtilProvider.toPlanck(1, 10)).toEqual(10000000000);
      expect(unitsUtilProvider.toPlanck(1, 12)).toEqual(1000000000000);
    });

    it('should throw UnitsConversionFromNaNFailed when NaN is passed', () => {
      expect(() => unitsUtilProvider.toPlanck(NaN, 10)).toThrow(
        UnitsConversionFromNaNFailed,
      );
    });

    it('should throw UnitsConversionFromNegativeFailed when negative number is passed', () => {
      expect(() => unitsUtilProvider.toPlanck(-1, 10)).toThrow(
        UnitsConversionFromNegativeFailed,
      );
    });
  });

  describe('fromPlanck', () => {
    it('should convert from plancks to DOT', () => {
      expect(unitsUtilProvider.fromPlanck(10000000000, 10)).toEqual(1);
      expect(unitsUtilProvider.fromPlanck(1000000000000, 12)).toEqual(1);
    });

    it('should throw UnitsConversionFromNaNFailed when NaN is passed', () => {
      expect(() => unitsUtilProvider.fromPlanck(NaN, 10)).toThrow(
        UnitsConversionFromNaNFailed,
      );
    });

    it('should throw UnitsConversionFromNegativeFailed when negative number is passed', () => {
      expect(() => unitsUtilProvider.fromPlanck(-1, 10)).toThrow(
        UnitsConversionFromNegativeFailed,
      );
    });
  });
});
