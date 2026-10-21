import { test, expect } from 'vitest'
import { add } from './sum.js'

test('adds numbers', () => {
  expect(add(2, 3)).toBe(5)
})
