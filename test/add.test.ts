import { describe, it, expect, beforeAll } from 'vitest';
import { sumOfSquares, initWasm } from '../src/wasmEntry';
import { readFile } from 'fs/promises';
import * as path from 'path';

beforeAll(async () => {
  await initWasm(
    await readFile(path.resolve(__dirname, '../wasm_dist/wasm_bg.wasm')),
  );
});

describe('add', () => {
  it('adds two numbers', async () => {
    expect(sumOfSquares(3, 4)).toBe(25);
  });
});
