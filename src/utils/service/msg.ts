import { message } from 'ant-design-vue'
import { ERROR_MSG_DURATION, NO_ERROR_MSG_CODE } from '@/config'

/** 错误消息栈，防止同一错误同时出现 */
const errorMsgStack = new Map<string | number, string>([])

function addErrorMsg(error: Service.RequestError) {
  errorMsgStack.set(error.code, error.msg)
}
function removeErrorMsg(error: Service.RequestError) {
  errorMsgStack.delete(error.code)
}
function hasErrorMsg(error: Service.RequestError) {
  return errorMsgStack.has(error.code)
}

/**
 * 显示错误信息
 * @param error
 */
export function showErrorMsg(error: Service.RequestError) {
  if (!error.msg)
    return
  if (!NO_ERROR_MSG_CODE.includes(error.code)) {
    if (!hasErrorMsg(error)) {
      addErrorMsg(error)
      window.console.warn(error.code, error.msg)
      message.error(error.msg, ERROR_MSG_DURATION)
      setTimeout(() => {
        removeErrorMsg(error)
      }, ERROR_MSG_DURATION)
    }
  }
}
