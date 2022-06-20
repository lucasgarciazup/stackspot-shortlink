module.exports = {
  testPathIgnorePatterns: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts', 'jest-canvas-mock'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^.+\\.(css|scss|svg|png)$': '<rootDir>/src/tests/jest-stub.ts',
    '^assets(.*)$': '<rootDir>/src/tests/jest-stub.ts',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '/^core(.*)$/': '<rootDir>/src/core$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^routes(.*)$': '<rootDir>/src/routes$1',
    '^services(.*)$': '<rootDir>/src/services$1',
    '^pages(.*)$': '<rootDir>/src/pages$1'
  },
  testEnvironment: 'jsdom'
}
