// Unit test
import { expect, it } from 'vitest'
import { dateFormat, durationFormat } from './time'

it('dateFormat function', () => {
  const date = new Date(2022, 0, 1, 13, 14, 15) // January 1, 2022 13:14:15
  const formattedDate = dateFormat(date, 'yyyy-MM-dd hh:mm')
  expect(formattedDate).toBe('2022-01-01 13:14')

  expect(dateFormat('Apr 29, 2024 5:09:20 PM')).toBe('2024-04-29 17:09:20')
})

it('durationFormat function', () => {
  const duration = 3661 // 1 hour, 1 minute, 1 second
  const formattedDuration = durationFormat(duration)
  expect(formattedDuration).toBe('01小时01分钟01秒')
})
