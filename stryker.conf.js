/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  ignorePatterns: ['dist', 'coverage'],
  timeoutMS: 20000,
  jest: {
    configFile: 'jest.config.js',
  },
  // mutate: ['scripts/*'],
};
