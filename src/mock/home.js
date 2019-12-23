import Mock from 'mockjs';
import { backendHost } from '../config'
import { wrapData } from './mockUtil'

const { Random } = Mock;

const getPasswordList = () => {
  const length = Random.natural(0, 30)
  const result = []
  for (let i = 0; i < length; i++) {
    result.push({
      type: /(ssh)|(web)|(ftp)/,
      description: Random.paragraph(),
      loginName: Random.domain(),
      username: Random.string(),
      remark: Random.paragraph(),
      lastModified: Random.date(),
      password: Random.string(),
      recordId: Random.guid()
    })
  }
  return result
}

Mock.mock(new RegExp(`${backendHost}/password/list(\\?.*)?`), 'get', wrapData(getPasswordList()))
