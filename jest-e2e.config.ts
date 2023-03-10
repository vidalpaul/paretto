import defaultConfig from './jest.config';

export default {
  ...defaultConfig,
  testRegex: '.*\\.e2e-spec\\.ts$',
};
