import ajax from './index'

//作者详情
export const getAentsData = (params) => {
  return ajax.get('/agents', params)
}

