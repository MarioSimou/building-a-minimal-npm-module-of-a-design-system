/// <reference types="vitest"/>

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./setupFile.ts'],
    typecheck: {
      tsconfig: './tsconfig.test.json',
    },
  },
})
