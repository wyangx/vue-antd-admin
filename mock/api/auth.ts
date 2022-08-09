import type { MockMethod } from 'vite-plugin-mock'

const apis: MockMethod[] = [
  {
    url: '/mock/test',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          msg: 'test',
        },
      }
    },
  },
]

export default apis
