import Mock from 'mockjs';
import { backendHost } from '../config'
import { wrapData } from './mockUtil'

const { Random } = Mock;

const getPasswordItem = () => {
  return {
    type: /(ssh)|(web)|(ftp)/,
    description: Random.paragraph(),
    loginName: Random.domain(),
    username: Random.string(),
    remark: Random.paragraph(),
    lastModified: Random.date(),
    password: Random.string(),
    recordId: Random.guid()
  }
}

const getPasswordList = () => {
  const length = Random.natural(0, 30)
  const result = []
  for (let i = 0; i < length; i++) {
    result.push(getPasswordItem())
  }
  return result
}

Mock.mock(new RegExp(`${backendHost}/password/list(\\?.*)?`), 'get', wrapData(getPasswordList()))

Mock.mock(new RegExp(`${backendHost}/password(\\?.*)?`), 'get', wrapData(getPasswordItem()))

Mock.mock(`${backendHost}/password`, 'put', wrapData(getPasswordItem()))

Mock.mock(`${backendHost}/password`, 'post', wrapData(getPasswordItem()))

Mock.mock(`${backendHost}/password`, 'delete', wrapData(getPasswordItem()))
