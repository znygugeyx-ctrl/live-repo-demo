import { test } from 'node:test';
import assert from 'node:assert/strict';
import { capitalize, slugify, truncate, wordCount } from '../src/index.js';

test('slugify', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
  assert.equal(slugify('  Crème brûlée  '), 'creme-brulee');
  assert.equal(slugify('---'), '');
});

test('truncate', () => {
  assert.equal(truncate('abcdef', 10), 'abcdef');
  assert.equal(truncate('abcdef', 4), 'abc…');
});

test('wordCount', () => {
  assert.equal(wordCount(''), 0);
  assert.equal(wordCount('  one two\tthree\n'), 3);
});

test('capitalize', () => {
  assert.equal(capitalize('hello world'), 'Hello World');
  assert.equal(capitalize('  élan vital'), '  Élan Vital');
  assert.equal(capitalize(''), '');
});
