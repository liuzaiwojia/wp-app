/*
 * @Author: liujia
 * @Date: 2019-12-23 17:01:19
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-23 17:16:13
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

export {
  getPasswordList
}
