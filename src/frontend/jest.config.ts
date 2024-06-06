import type { Config } from 'jest'
import { defaults } from 'jest-config'

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/test/**/*.{js,jsx,ts,tsx}'],
  coverageReporters: ['lcov', 'text'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
}

export default config
