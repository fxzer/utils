import { describe, expect, it } from 'vitest'
import { flattenArrayable, toArray } from './array'

describe('toArray', () => {
  it.each([
    [undefined, []],
    [null, []],
    [false, [false]],
    [0, [0]],
    ['', ['']],
    [[], []],
    ['foo', ['foo']],
    [['foo'], ['foo']],
  ])('%s => %s', (input, expected) => {
    expect(toArray(input)).toEqual(expected)
  })
})

it('flattenArrayable', () => {
  expect(flattenArrayable()).toEqual([])
  expect(flattenArrayable([])).toEqual([])
  expect(flattenArrayable(1)).toEqual([1])
  expect(flattenArrayable([1, '2', 3])).toEqual([1, '2', 3])
  expect(flattenArrayable([1, [1, 2]])).toEqual([1, 1, 2])
  expect(flattenArrayable([1, [1, [2]]])).toEqual([1, 1, [2]])
})
