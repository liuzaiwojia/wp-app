/*
 * @Author: liujia
 * @Date: 2019-12-17 19:39:30
 * @Last Modified by: liujia
 * @Last Modified time: 2020-01-03 14:50:43
 * @description: 页面的骨架布局
 */
import React from 'react'
import { Layout } from 'antd'
import AppMenu from '../components/pageItem/AppMenu'
import AppHeader from '../components/pageItem/AppHeader'
import { Switch, Route } from "react-router-dom"
import Home from './Home'
import ErrorPage from './ErrorPage'
import './AppSkeleton.css'

/* Header, Sider */
const { Header, Content, Footer } = Layout

class Login extends React.Component {

  render () {
    return (
      <Layout className="app-skeleton">
        <AppMenu></AppMenu>
        <div className="skeleton-content">
          <Layout className="app-container">
            <Header className="header-container">
              <AppHeader></AppHeader>
            </Header>
            <Content style={{ margin: '24px 16px 0', background: '#fff' }}>
              <div className="router-container">
                <ErrorPage>
                  <Switch>
                    <Route path="/home">
                      <Home></Home>
                    </Route>
                    <Route path="/">
                      <Home></Home>
                    </Route>
                  </Switch>
                </ErrorPage>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Copyright © 2012 - 2019 cifsoft. All Rights Reserved. 王普是瓜皮 版权所有 鄂ICP备19007599号</Footer>
          </Layout>
          {/* <Footer>Footer</Footer> */}
        </div>
      </Layout>
    )
  }
}

export default Login