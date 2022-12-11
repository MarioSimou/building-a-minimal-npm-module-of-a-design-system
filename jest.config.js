/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  injectGlobals: true,
  setupFilesAfterEnv: ['./setupFile.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.esm.json',
      },
    ],
  },
}
