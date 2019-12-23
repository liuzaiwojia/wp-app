/*
 * @Author: liujia
 * @Date: 2019-12-17 19:36:47
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-23 16:17:34
 * @description: 页头
 */
import React from 'react';
import { Avatar } from 'antd';
import './AppHeader.css';

class AppHeader extends React.Component {

  render () {
    return (
      <div className="app-header">
        <Avatar className="head-avatar" icon="user"></Avatar>
      </div>
    )
  }
}

export default AppHeader
