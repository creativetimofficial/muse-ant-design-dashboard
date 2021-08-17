/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { Component } from 'react';

import SidebarMenu from './SidebarMenu';
import HeaderTop from './HeaderTop';
import {
  Layout,
  Drawer,
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
  Affix,
} from 'antd';

import {
  UploadOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from '@ant-design/icons';

import Home from '../pages/Home';
import Billing from '../pages/Billing';
import Profile from '../pages/Profile';
import Tables from '../pages/Tables';
import Rtl from '../pages/Rtl';
import HeaderRtl from './HeaderRtl';

import FooterNEw from '../layout/FooterNEw';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      placement: 'right',
      currentComponent: '',
      sidebarColor: '#1890ff',
      sidenavType: 'transparent',
      fixed: false,
      name: '',
      subName: '',
    };
  }

  componentDidMount() {
    this.setState({
      currentComponent: this.props.match.params.id,
      name: this.capatlizeWord(this.props.match.params.id),
      subName: this.capatlizeWord(this.props.match.params.id),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        currentComponent: this.props.match.params.id,
        name: this.capatlizeWord(this.props.match.params.id),
        subName: this.capatlizeWord(this.props.match.params.id),
      });
      if (this.props.match.params.id === 'rtl') {
        this.setState({ placement: 'left' });
      } else {
        this.setState({ placement: 'right' });
      }
    }
  }

  capatlizeWord = (word) => {
    return word.replace(/\b\w/g, (l) => l.toUpperCase());
  };

  OpenDrawer = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  handleSidenavType = (type) => {
    this.setState({ sidenavType: type });
  };

  handleSidebarColor = (color) => {
    this.setState({ sidebarColor: color });
  };

  handleFixedNavbar = (type) => {
    this.setState({ fixed: type });
  };

  componentLoader = () => {
    switch (this.state.currentComponent) {
      case 'dashboard':
        return <Home />;
      case 'tables':
        return <Tables />;
      case 'billing':
        return <Billing />;
      case 'profile':
        return <Profile />;
      case 'rtl':
        return <Rtl />;
      default:
        break;
    }
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <Layout
        className={`layout-dashboard ${
          this.state.currentComponent === 'profile' ? 'layout-profile' : ''
        } ${
          this.state.currentComponent === 'rtl' ? 'layout-dashboard-rtl' : ''
        }`}
      >
        <Drawer
          title={false}
          placement={placement === 'right' ? 'left' : 'right'}
          closable={false}
          onClose={() => this.setState({ visible: false })}
          visible={visible}
          key={placement === 'right' ? 'left' : 'right'}
          width={250}
          className={`drawer-sidebar ${
            this.state.currentComponent === 'rtl' ? 'drawer-sidebar-rtl' : ''
          } `}
        >
          <Layout
            className={`layout-dashboard ${
              this.state.currentComponent === 'rtl'
                ? 'layout-dashboard-rtl'
                : ''
            }`}
          >
            <Sider
              trigger={null}
              width={250}
              theme="light"
              className={`sider-primary ant-layout-sider-primary ${
                this.state.sidenavType === '#fff' ? 'active-route' : ''
              }`}
              style={{ background: this.state.sidenavType }}
            >
              <SidebarMenu sidebarColor={this.state.sidebarColor} />
            </Sider>
          </Layout>
        </Drawer>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          trigger={null}
          width={250}
          theme="light"
          className={`sider-primary ant-layout-sider-primary ${
            this.state.sidenavType === '#fff' ? 'active-route' : ''
          }`}
          style={{ background: this.state.sidenavType }}
        >
          <SidebarMenu sidebarColor={this.state.sidebarColor} />
        </Sider>
        <Layout>
          {this.state.fixed ? (
            <Affix>
              <Header
                className={`${this.state.fixed ? 'ant-header-fixed' : ''}`}
              >
                <HeaderTop
                  onPress={this.OpenDrawer}
                  name={this.state.name}
                  subname={this.state.subName}
                  handleSidebarColor={this.handleSidebarColor}
                  handleSidenavType={this.handleSidenavType}
                  handleFixedNavbar={this.handleFixedNavbar}
                />
              </Header>
            </Affix>
          ) : (
            <Header className={`${this.state.fixed ? 'ant-header-fixed' : ''}`}>
              <HeaderTop
                onPress={this.OpenDrawer}
                placement={this.state.placement}
                name={this.state.name}
                subname={this.state.subName}
                handleSidebarColor={this.handleSidebarColor}
                handleSidenavType={this.handleSidenavType}
                handleFixedNavbar={this.handleFixedNavbar}
              />
            </Header>
          )}
          <Content className="content-ant">{this.componentLoader()}</Content>
          <FooterNEw />
        </Layout>
      </Layout>
    );
  }
}
