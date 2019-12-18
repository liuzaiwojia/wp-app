/*
 * @Author: liujia
 * @Date: 2019-12-17 19:39:30
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-18 20:04:36
 * @description: 页面的骨架布局
 */
import React from 'react'
import { Layout } from 'antd'
import AppMenu from '../components/pageItem/AppMenu'
import AppHeader from '../components/pageItem/AppHeader'
import { Switch, Route } from "react-router-dom"
import Home from './Home'
import './AppSkeleton.css'

/* Header,  */
const { Header, Sider, Content, Footer } = Layout

class Login extends React.Component {

  render () {
    return (
      <Layout className="app-skeleton">
        <Sider className="app-sider">
          <AppMenu></AppMenu>
        </Sider>
        <Layout>
          {/* <Header>
            <AppHeader></AppHeader>
          </Header> */}
          {/* <Content>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </Content> */}
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <AppHeader></AppHeader>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360, height: '100%' }}>
                <Switch>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/">
                    <Home></Home>
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Copyright © 2012 - 2019 cifsoft. All Rights Reserved. 王普是瓜皮 版权所有 鄂ICP备19007599号</Footer>
          </Layout>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    )
  }
}

export default Login