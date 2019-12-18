/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: liujia
 * @Date: 2019-12-17 19:36:47
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-18 20:25:46
 * @description: 主页
 */
import React from 'react'
import { Table, Divider } from 'antd';

const columns = [
  {
    title: '类别',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '描述',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '登陆项',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '用户名',
    key: 'tags',
    dataIndex: 'tags'
  },
  {
    title: '备注',
    key: 'remark',
    dataIndex: 'remark'
  },
  {
    title: '最后更新',
    key: 'lastUpdate',
    dataIndex: 'lastUpdate'
  },
  {
    title: '复制密码',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }
];

class Home extends React.Component {

  render () {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default Home