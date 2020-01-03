/*
 * @Author: liujia
 * @Date: 2019-12-25 17:45:11
 * @Last Modified by: liujia
 * @Last Modified time: 2020-01-03 15:47:30
 * @description: 编辑或新增密码
 */
import React from 'react';
import { Modal } from 'antd';
import PasswordForm from './PasswordForm';
import { getPasswordDetail, editPassword, addPassword } from '../../api/home.js';

class PasswordEdit extends React.Component {

  state = {
    passwordForm: {},
    passwordData: {}
  }

  componentDidMount () {
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.passwordId !== prevProps.passwordId) {
      this.resetForm()
    }
  }

  resetForm = async () => {
    const { passwordId } = this.props
    if (passwordId) {
      const res = await getPasswordDetail(passwordId)
      if (res.data.code === 0) {
        const data = res.data.data
        this.setState({
          passwordData: data
        })
        this.passwordForm.setFields({
          username: data.username,
          password: data.password
        })
      }
    } else {
      this.passwordForm.setFields({
        username: '',
        password: ''
      })
    }
  }

  handleOk = async (e) => {
    const result = await this.passwordForm.handleSubmit()
    if (result) {
      let res = null
      const currentData = Object.assign(this.state.passwordData, result)
      if (this.props.passwordId) {
        res = await editPassword(currentData)
      } else {
        res = await addPassword(currentData)
      }
      if (res.data.code === 0) {
        this.props.onOk()
      }
    }
  }
  
  render () {
    const { visible, onCancel, passwordId } = this.props
    let title = '新增密码'
    if (passwordId) {
      title = '编辑密码'
    }
    return (
      <Modal
        onOk={this.handleOk}
        onCancel={onCancel}
        title={title}
        visible={visible}
        cancelText="取消"
        okText="确定">
          <PasswordForm wrappedComponentRef={(form) => this.passwordForm = form}></PasswordForm>
      </Modal>
    )
  }
}

export default PasswordEdit;
