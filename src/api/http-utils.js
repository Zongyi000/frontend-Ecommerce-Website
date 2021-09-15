/* eslint-disable camelcase */
import axios from 'axios'

const $_ajax = {
  get: (url, params) => {
    return axios.get(url, {
      params: params
    })
  },

  post: (url, params, config) => {
    return axios.post(url, params, config)
  },

  patch: (url, params) => {
    return axios.patch(url, params)
  }
}

async function defaultSend (requestType, url, params, config) {
  let responseObj = {
    response: null,
    status: 'loading'
  }
  let reqType = requestType.toLowerCase()

  await $_ajax[reqType](url, params, config).then((res) => {
    responseObj.response = res
    responseObj.status = 'success'
  })
    .catch((e) => {
      responseObj.response = e
      responseObj.status = 'fail'
    })

  return responseObj
}

const httpUtils = {
  get: async (url, params) => {
    let resMsg = await defaultSend('get', url, params)

    return resMsg
  },

  post: async (url, params) => {
    let resMsg = await defaultSend('post', url, params)

    return resMsg
  },

  patch: async (url, params) => {
    let resMsg = await defaultSend('patch', url, params)

    return resMsg
  },

  upload: async (url, params) => {
    let resMsg = await defaultSend('post', url, params)
    return resMsg
  }

}

export default httpUtils
