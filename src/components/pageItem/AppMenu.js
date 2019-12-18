/*
 * @Author: liujia
 * @Date: 2019-12-17 19:36:47
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-18 20:00:10
 * @description: 菜单
 */
import React from 'react'
/* , Button */
import { Menu, Icon } from 'antd';

/* const { SubMenu } = Menu; */

class AppMenu extends React.Component {

  state = {
    collapsed: false,
    menuData: [
      {
        title: '密码管理',
        key: '1',
        icon: 'pie-chart',
        path: '/home'
      }
    ]
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  menuClick = ({key, keyPath}) => {
    // 5 sub1
    let menuList = this.state.menuData
    let selectedMenu = null
    while(keyPath.length > 0) {
      const keyItem = keyPath.pop()
      menuList = menuList.find(item => item.key === keyItem)
      if (keyPath.length === 0) {
        selectedMenu = menuList
      }
      if (menuList) {
        menuList = menuList.children || []
      }
    }
    if (selectedMenu && selectedMenu.path) {
      window.location.href = selectedMenu.path
    }
  };

  render () {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button> */}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          onClick={this.menuClick}
        >
          {this.state.menuData.map(item => {
            return (
              <Menu.Item key={item.key}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </Menu.Item>
            )
          })}
          {/* <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>密码管理</span>
          </Menu.Item> */}
          {/* <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item> */}
          {/* <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </div>
    )
  }
}

export default AppMenu
