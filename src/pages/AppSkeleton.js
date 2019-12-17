/*
 * @Author: liujia
 * @Date: 2019-12-17 19:39:30
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-17 20:07:22
 * @description: 页面的骨架布局
 */
import React from 'react'
import { Layout } from 'antd'
import AppMenu from '../components/pageItem/AppMenu'
import AppHeader from '../components/pageItem/AppHeader'
import { Switch, Route } from "react-router-dom"
import Home from './Home'
import './AppSkeleton.css'

const { Header, Sider, Content } = Layout

class Login extends React.Component {

  render () {
    return (
      <Layout className="app-skeleton">
        <Sider>
          <AppMenu></AppMenu>
        </Sider>
        <Layout>
          <Header>
            <AppHeader></AppHeader>
          </Header>
          <Content>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    )
  }
}

export default Login