/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: liujia
 * @Date: 2019-12-17 19:36:47
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-23 20:01:22
 * @description: 主页
 */
import React from 'react'
import { Table, Divider, Button, Select, Input } from 'antd';
import { getPasswordList } from '../api/home'
import './Home.css'

const { Option } = Select
const { Search } = Input

const columns = [
  {
    title: '类别',
    dataIndex: 'type',
    key: 'type',
    // render: text => <a>{text}</a>,
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '登陆项',
    dataIndex: 'loginName',
    key: 'loginName',
  },
  {
    title: '用户名',
    key: 'username',
    dataIndex: 'username'
  },
  {
    title: '备注',
    key: 'remark',
    dataIndex: 'remark'
  },
  {
    title: '最后更新',
    key: 'lastModified',
    dataIndex: 'lastModified'
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

class Home extends React.Component {

  state = {
    passwordList: [],
    searchOptions: {
      type: 'type',
      value: ''
    }
  }

  componentDidMount () {
    this.getListData()
  }

  getListData = async () => {
    const res = await getPasswordList(this.state.searchOptions)
    const data = res.data.data || []
    this.setState({
      passwordList: data
    })
  }

  searchChange = (e) => {
    const value = e.target.value
    this.setState({
      searchOptions: Object.assign({}, this.state.searchOptions, {
        value: value
      })
    })
  }

  searchTypeChange = (value) => {
    this.setState({
      searchOptions: Object.assign({}, this.state.searchOptions, {
        type: value
      })
    })
  }

  render () {
    const { passwordList, searchOptions } = this.state
    return (
      <div className="home">
        <div className="operate">
          <Button type="primary">添加</Button>
          {/* onChange={handleChange} */}
          <Search
            onChange={this.searchChange}
            onSearch={this.getListData}
            className="input-item"
            value={searchOptions.value}
            enterButton={true}
            placeholder="请输入搜索内容" />
          <Select
            onChange={this.searchTypeChange}
            className="select-item"
            defaultValue={searchOptions.type}>
            <Option value="type">类别</Option>
            <Option value="description">描述</Option>
            <Option value="loginName">登陆项</Option>
            <Option value="username">用户名</Option>
            <Option value="remark">备注</Option>
          </Select>
        </div>
        <Table rowKey="recordId" columns={columns} pagination={false} dataSource={passwordList} />
      </div>
    )
  }
}

export default Home