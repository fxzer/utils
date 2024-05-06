import { expect, it } from 'vitest'
import { convertBytes } from './convert'

it('coverts', () => {
  expect(convertBytes(1024)).toEqual('1.00 KB')
  expect(convertBytes(5 * 1024 * 1024)).toEqual('5.00 MB')
  expect(convertBytes(5 * 1024 * 1024 * 1024)).toEqual('5.00 GB')
})
