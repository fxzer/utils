import { toString } from './base'

export const isDefefined = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isUndefined = (val: any): val is undefined => toString(val) === '[object Undefined]'
export const isNull = (val: any): val is null => toString(val) === '[object Null]'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isFunction = <T extends Function> (val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isObject = (val: any): val is object => toString(val) === '[object Object]'
export const isRegExp = (val: any): val is RegExp => toString(val) === '[object RegExp]'
export const isDate = (val: any): val is Date => toString(val) === '[object Date]'

export const isMobile = ():boolean => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
export const isIphone = ():boolean => /iPhone/.test(navigator.userAgent )
export const isSafari = ():boolean => /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) // 判断是否Safari浏览器

export const isWindow = (val: any): boolean => typeof window !== 'undefined' && toString(val) === '[object Window]'
export const isBrowser = typeof window !== 'undefined'

/**
 * Type guard to filter out falsy values
 *
 * @category Guards
 * @example array.filter(isTruthy)
 */
export function isTruthy<T>(v: T): v is NonNullable<T> {
  return Boolean(v)
}
