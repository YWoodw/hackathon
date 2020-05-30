// Libraries
import { MediaType } from 'express-serve-static-core'

export interface MockRequest {
  params?: any
  query?: any
  body?: any
  cookies?: any
  method?: string
  protocol?: string
  secure?: boolean
  ip?: string
  ips?: string[]
  subdomains?: string[]
  path?: string
  hostname?: string
  host?: string
  fresh?: boolean
  stale?: boolean
  xhr?: boolean
  route?: any
  signedCookies?: any
  originalUrl?: string
  url?: string
  baseUrl?: string
  accepted?: MediaType[]
  get?: any
  header?: any
  accepts?: any
  acceptsCharsets?: any
  acceptsEncodings?: any
  acceptsLanguages?: any
  range?: any
  param?: any
  is?: any
  app?: any
  res?: any
  next?: any
}
