import { describe, expect, it } from 'vitest'
import { deepMerge, deepMergeWithArray } from './object'

describe('deepMerge', () => {
  it('should merge Objects and all nested Ones', () => {
    const obj1 = { a: { a1: 'A1' }, c: 'C', d: {} }
    const obj2 = { a: { a2: 'A2' }, b: { b1: 'B1' }, d: null } as any
    const obj3 = { a: { a1: 'A1', a2: 'A2' }, b: { b1: 'B1' }, c: 'C', d: null }
    expect(deepMerge({}, obj1, obj2)).toEqual(obj3)
  })
  it('should behave like Object.assign on the top level', () => {
    const obj1 = { a: { a1: 'A1' }, c: 'C' }
    const obj2 = { a: undefined, b: { b1: 'B1' } }
    const merged = deepMerge(obj1, obj2)
    expect(merged).toEqual(Object.assign({}, obj1, obj2))
  })
  it('should not merge array values, just override', () => {
    const obj1 = { a: ['A', 'B'] }
    const obj2 = { a: ['C'], b: ['D'] }
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: ['C'], b: ['D'] })
  })
  it('should overide plain value', () => {
    const obj1 = { a: { x: 1 } }
    const obj2 = { a: { x: { f: 2 } } } as any
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: { x: { f: 2 } } })
  })

  it('prototype pollution 1', () => {
    const obj = {} as any
    const obj2 = {} as any
    const payload = JSON.parse('{"__proto__":{"polluted":"Polluted!"}}')

    expect(obj.polluted).toBeUndefined()
    expect(obj2.polluted).toBeUndefined()
    deepMerge(obj, payload)
    expect(obj.polluted).toBeUndefined()
    expect(obj2.polluted).toBeUndefined()
  })
})

describe('deepMergeWithArray', () => {
  it('should merge array values', () => {
    const obj1 = { a: ['A', 'B'] }
    const obj2 = { a: ['C'], b: ['D'] }
    expect(deepMergeWithArray({}, obj1, obj2)).toEqual({ a: ['A', 'B', 'C'], b: ['D'] })
  })
})
