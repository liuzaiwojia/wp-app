/*
 * @Author: liujia
 * @Date: 2019-12-25 17:45:11
 * @Last Modified by: liujia
 * @Last Modified time: 2020-01-02 20:07:32
 * @description: 编辑或新增密码
 */
import React from 'react';
import { Modal } from 'antd';
import PasswordForm from './PasswordForm';
import { getPasswordDetail } from '../../api/home.js'

class PasswordEdit extends React.Component {

  state = {
    passwordForm: {}
  }

  componentDidMount () {
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('update', this.props.passwordId, prevProps.passwordId)
    if (this.props.passwordId !== prevProps.passwordId) {
      this.resetForm()
    }
  }

  resetForm = async () => {
    const { passwordId } = this.props
    if (passwordId) {
      const res = await getPasswordDetail(passwordId)
      if (res.data.code === 0) {
        this.passwordForm.setFields(res.data.data)
      }
    } else {
      this.passwordForm.setFields()
    }
  }

  handleOk = async (e) => {
    const result = await this.passwordForm.handleSubmit()
    if (result) {
      this.props.onOk()
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
