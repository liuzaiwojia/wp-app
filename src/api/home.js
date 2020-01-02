/*
 * @Author: liujia
 * @Date: 2019-12-23 17:01:19
 * @Last Modified by: liujia
 * @Last Modified time: 2020-01-02 19:47:47
 * @description: home模块的api
 */
import { get } from '../common/api';

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

export {
  getPasswordList,
  getPasswordDetail
}
