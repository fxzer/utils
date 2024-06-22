import { beforeEach, describe, expect, it } from 'vitest'
import { getQueryParam, getUrlParams, setQueryParams } from './browser'

describe('getUrlParams', () => {
  it('should return url all query for a  obj', () => {
    const url = 'http://localhost:3000/?foo=bar&baz=qux'
    expect(getUrlParams(url)).toEqual({
      foo: 'bar',
      baz: 'qux',
    })
  })
})

describe('getQueryParam', () => {
  beforeEach(() => {
    window.location = new URL('http://example.com/?key1=value1&key2=value2') as any
  })

  it('should return the correct value for a single key', () => {
    const value = getQueryParam('key1')
    expect(value).toBe('value1')
  })

  it('should return the correct values for multiple keys', () => {
    const values = getQueryParam(['key1', 'key2'])
    expect(values).toEqual(['value1', 'value2'])
  })

  it('should return null for a key that does not exist', () => {
    const value = getQueryParam('key3')
    expect(value).toBeUndefined()
  })
})
