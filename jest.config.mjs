export default {
  // 1. Use the pre-built TS-to-JS logic
  preset: 'ts-jest/presets/default-esm', 

  // 2. We are testing a backend API, not a website
  testEnvironment: 'node',

  // same directory from where package.json is
  rootDir: '.', 

  // Tell it to only look in src for tests to keep it fast
  testMatch: ['<rootDir>/src/**/*.test.ts'], 

  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    // This tells Jest: "If the import ends in .js, look for the file without it"
    '^(\\.\\.?\\/.+)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
  }
};