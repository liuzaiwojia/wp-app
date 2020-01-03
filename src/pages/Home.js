/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: liujia
 * @Date: 2019-12-17 19:36:47
 * @Last Modified by: liujia
 * @Last Modified time: 2020-01-03 17:29:35
 * @description: 主页
 */
import React from 'react'
import { Table, Divider, Button, Select, Input, Modal } from 'antd';
import { getPasswordList, deletePassword } from '../api/home';
import PasswordEdit from '../components/home/PasswordEdit';
import { copy } from '../common/util.js'
import './Home.css'

const { Option } = Select
const { Search } = Input

class Home extends React.Component {

  state = {
    passwordList: [],
    searchOptions: {
      type: 'type',
      value: ''
    },
    modalVisible: false,
    modalId: null
  }

  columns = [
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
      width: 90,
      render: (text, record) => (
        <span>
          <a onClick={() => this.copyPassword(record.password)}>复制</a>
          <Divider type="vertical" />
          <a onClick={() => this.showPasswordEdit(record.recordId)}>编辑 {record.name}</a>
          <Divider type="vertical" />
          <a onClick={() => this.showDeleteConfirm(record.recordId)}>删除</a>
        </span>
      ),
    },
  ];

  componentDidMount () {
    this.getListData()
  }

  /**
   * @description 获取列表数据
   */
  getListData = async () => {
    const res = await getPasswordList(this.state.searchOptions)
    const data = res.data.data || []
    this.setState({
      passwordList: data
    })
  }

  /**
   * @description 搜索内容发生变化
   */
  searchChange = (e) => {
    const value = e.target.value
    this.setState({
      searchOptions: Object.assign({}, this.state.searchOptions, {
        value: value
      })
    })
  }

  /**
   * @description 搜索类型发生变化
   */
  searchTypeChange = (value) => {
    this.setState({
      searchOptions: Object.assign({}, this.state.searchOptions, {
        type: value
      })
    })
  }

  /**
   * @description 显示弹框
   */
  showPasswordEdit = (id) => {
    this.setState({
      modalVisible: true,
      modalId: typeof id === 'string' ? id : null
    })
  }

  /**
   * @description 隐藏弹框
   */
  hidePasswordEdit = () => {
    this.setState({
      modalVisible: false
    })
  }

  /**
   * @description 成功添加或编辑password
   */
  handleOk = () => {
    this.getListData()
    this.hidePasswordEdit()
  }

  /**
   * @description 删除password
   */
  handleItemDelete = async (id) => {
    await deletePassword(id)
    this.getListData()
  }

  /**
   * @description 弹出删除确认框
   */
  showDeleteConfirm = (id) => {
    Modal.confirm({
      title: '确认',
      content: '是否确认删除此密码？',
      okText: '删除',
      okType: 'danger',
      cancelText: '取消',
      autoFocusButton: 'cancel',
      onOk: () => {
        return new Promise((resolve, reject) => {
          this.handleItemDelete(id).then(res => {
            resolve()
          }).catch(error => {
            reject()
          })
        })
      }
    })
  }

  copyPassword = (password) => {
    return copy(password)
  }

  render () {
    const { passwordList, searchOptions, modalVisible, modalId } = this.state
    return (
      <div className="home">
        <div className="operate">
          <Button onClick={this.showPasswordEdit} type="primary">添加</Button>
          <PasswordEdit
            onCancel={this.hidePasswordEdit}
            onOk={this.handleOk}
            visible={modalVisible}
            passwordId={modalId}></PasswordEdit>
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
        <Table rowKey="recordId" columns={this.columns} pagination={false} dataSource={passwordList} />
      </div>
    )
  }
}

export default Home