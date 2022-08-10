import { mockRequest } from '@/utils'

export function fetchTest() {
  return mockRequest.get('/test')
}
