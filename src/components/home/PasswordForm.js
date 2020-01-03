/*
 * @Author: liujia
 * @Date: 2019-12-25 19:27:43
 * @Last Modified by: liujia
 * @Last Modified time: 2020-01-03 17:57:33
 * @description: 密码的表单
 */
import React from 'react';
import { Form, Input } from 'antd';

class PasswordForm extends React.Component {

  handleSubmit = () => {
    const {
      form: { validateFieldsAndScroll },
    } = this.props;
    return new Promise((resolve, reject) => {
      validateFieldsAndScroll((errors, values) => {
        if (errors) {
          resolve(false)
        } else {
          resolve(values)
        }
      })
    })
  };

  setFields = (value) => {
    const { form } = this.props
    if (value) {
      form.setFieldsValue(value)
    } else {
      form.setFieldsValue({})
    }
  };

  render () {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
      labelAlign: 'left',
    };

    const { getFieldDecorator } = this.props.form;
    
    return (
      <Form {...formItemLayout}>
        <Form.Item label="用户名">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入用户名！',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="密码" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码！',
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="类别" hasFeedback>
          {getFieldDecorator('type')(<Input />)}
        </Form.Item>
        <Form.Item label="描述" hasFeedback>
          {getFieldDecorator('description')(<Input.TextArea />)}
        </Form.Item>
        <Form.Item label="备注" hasFeedback>
          {getFieldDecorator('remark')(<Input.TextArea />)}
        </Form.Item>
        <Form.Item label="登陆项" hasFeedback>
          {getFieldDecorator('loginName')(<Input />)}
        </Form.Item>
      </Form>
    )
  }
}

const WrappedPasswordForm = Form.create({ name: 'WrappedPasswordForm' })(PasswordForm)

export default WrappedPasswordForm
