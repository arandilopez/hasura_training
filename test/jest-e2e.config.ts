import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/../src/$1',
    '@test/(.*)': '<rootDir>/$1',
    '@factories/(.*)': '<rootDir>/../prisma/factories/$1',
  },
};

export default config;
