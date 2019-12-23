/*
 * @Author: liujia
 * @Date: 2019-12-23 17:02:33
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-23 17:11:54
 * @description: 统一设置项目的api
 */
import axios from 'axios';
import Qs from 'qs';
import { backendHost } from '../config';

/**
 * 项目中通用get请求
 * @param {String} url 请求url
 * @param {String} item 请求参数
 * @param {Object} config 额外配置信息
 */
const get = (url, item = {}, config = {}) => {
  return axios({
    method: 'get',
    url: `${backendHost}${url}`,
    params: item,
    paramsSerializer: function (params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    ...config
  })
}

/**
 * 项目中通用post请求
 * @param {String} url 请求url
 * @param {String} item 请求参数
 * @param {Object} config 额外配置信息
 */
const post = (url, item = {}, config = {}) => {
  return axios({
    method: 'post',
    url: `${backendHost}${url}`,
    data: item,
    ...config
  })
}

/**
 * 项目中通用put请求
 * @param {String} url 请求url
 * @param {String} item 请求参数
 * @param {Object} config 额外配置信息
 */
const put = (url, item = {}, config = {}) => {
  return axios({
    method: 'put',
    url: `${backendHost}${url}`,
    data: item,
    ...config
  })
}

/**
 * 项目中通用delete请求
 * @param {String} url 请求url
 * @param {String} item 请求参数
 * @param {Object} config 额外配置信息
 */
const deleteRequest = (url, item = {}, config = {}) => {
  return axios({
    method: 'delete',
    url: `${backendHost}${url}`,
    data: item,
    ...config
  })
}

export {
  get,
  post,
  put,
  deleteRequest
}
