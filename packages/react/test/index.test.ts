import { expect, test } from 'vitest';
import { hello } from '../src/index.js';

test('placeholder', () => {
  expect(hello).toBe('react');
});
