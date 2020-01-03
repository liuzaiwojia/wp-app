/*
 * @Author: liujia
 * @Date: 2019-12-23 17:01:19
 * @Last Modified by: liujia
 * @Last Modified time: 2020-01-03 16:30:48
 * @description: home模块的api
 */
import { get, put, post, deleteRequest } from '../common/api';

/**
 * @description 得到密码列表
 * @param {Object} searchObj 搜索信息
 */
const getPasswordList = (searchObj) => {
  return get('/password/list', searchObj);
}

/**
 * @description 得到密码列表
 * @param {Object} searchObj 搜索信息
 */
const getPasswordDetail = (recordId) => {
  return get(`/password?recordId=${recordId}`);
}

/**
 * @description 编辑密码对象
 * @param {Object} data
 */
const editPassword = (data) => {
  return put(`/password`, data)
}

/**
 * @description 添加密码对象
 * @param {Object} data
 */
const addPassword = (data) => {
  return post(`/password`, data)
}

/**
 * @description 删除密码
 * @param {String} id 密码项id
 */
const deletePassword = (id) => {
  return deleteRequest(`/password`, {
    id
  })
}

export {
  getPasswordList,
  getPasswordDetail,
  editPassword,
  addPassword,
  deletePassword
}
