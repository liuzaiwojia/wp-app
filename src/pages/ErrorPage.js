/*
 * @Author: liujia
 * @Date: 2020-01-03 14:36:29
 * @Last Modified by: liujia
 * @Last Modified time: 2020-01-03 16:28:58
 * @description: 界面报错情况下的展示页面
 */
import React from 'react';
import { Result, Button } from 'antd';

class ErrorPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo)
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return (
        <Result status="500" title="哎呀，出错了，已经拉着王普祭天了。。。"
          extra={
            <div>
              <Button style={{marginRight: '15px'}} type="primary">改完bug再祭天</Button>
              <Button>直接祭天</Button>
            </div>
          }
        >
        </Result>
      )
    }
    return this.props.children
  }
}

export default ErrorPage;