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

import { useState, useEffect } from "react";

import {
  Row,
  Col,
  Breadcrumb,
  Badge,
  Dropdown,
  Button,
  List,
  Avatar,
  Input,
  Drawer,
  Typography,
  Switch,
} from "antd";

import {
  SearchOutlined,
  StarOutlined,
  TwitterOutlined,
  FacebookFilled,
  LineChartOutlined
} from "@ant-design/icons";

import { NavLink, Link } from "react-router-dom";

const data = [
  {
    title: "New message from Sophie",
    description: <><LineChartOutlined /> 2 days ago</>,

    avatar: '../../assets/images/team-2.jpg',
  },
  {
    title: "New album by Travis Scott",
    description: <><LineChartOutlined /> 2 days ago</>,

    avatar: <Avatar shape="square"><LineChartOutlined /></Avatar>,
  },
  {
    title: "Payment completed",
    description: <><LineChartOutlined /> 2 days ago</>,
    avatar: <Avatar shape="square"><LineChartOutlined /></Avatar>,
  },
];

const menu = (
  <List
    min-width="100%"
    className="header-notifications-dropdown "
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar shape="square" src={item.avatar} />}
          title={item.title}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

const Header: React.FC<HeaderProps> = (props) => {
  const { name, subName } = props;
  const { Title, Text } = Typography;

  const [visible, setVisible] = useState(false);
  const [sidenavType, setSidenavType] = useState("transparent");

  useEffect(() => window.scrollTo(0, 0));

  const showDrawer = () => setVisible(true);
  const hideDrawer = () => setVisible(false);

  return (
    <>
      <div className="setting-drwer" onClick={showDrawer}>
        <LineChartOutlined />
      </div>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {name.replace("/", "")}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {subName.replace("/", "")}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Badge size="small" count={4}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                href="#pablo"
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <LineChartOutlined />
              </a>
            </Dropdown>
          </Badge>
          <Button type="link" onClick={showDrawer}>
          <LineChartOutlined />
          </Button>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => props.onPress()}
          >
            <LineChartOutlined />
          </Button>
          <Drawer
            className="settings-drawer"
            mask={true}
            width={360}
            onClose={hideDrawer}
            visible={visible}
          >
            <div>
              <div className="header-top">
                <Title level={4}>
                  Configurator
                  <Text className="subtitle">See our dashboard options.</Text>
                </Title>
              </div>

              <div className="sidebar-color">
                <Title level={5}>Sidebar Color</Title>
                <div className="theme-color mb-2">
                    <Button
                      type="primary"
                      onClick={() => props.handleSidenavColor("#1890ff")}
                    >
                      1
                    </Button>
                    <Button
                      type="ghost"
                      onClick={() => props.handleSidenavColor("#52c41a")}
                    >
                      1
                    </Button>
                    <Button
                      type="ghost"
                      onClick={() => props.handleSidenavColor("#d9363e")}
                    >
                      1
                    </Button>
                    <Button
                      type="ghost"
                      onClick={() => props.handleSidenavColor("#fadb14")}
                    >
                      1
                    </Button>

                    <Button
                      type="ghost"
                      onClick={() => props.handleSidenavColor("#111")}
                    >
                      1
                    </Button>
                </div>

                <div className="sidebarnav-color mb-2">
                  <Title level={5}>Sidenav Type</Title>
                  <Text>Choose between 2 different sidenav types.</Text>
                    <Button
                      type={sidenavType === "transparent" ? "primary" : "default"}
                      onClick={() => {
                        props.handleSidenavType("transparent");
                        setSidenavType("transparent");
                      }}
                    >
                      TRANSPARENT
                    </Button>
                    <Button
                      type={sidenavType === "white" ? "primary" : "default"}
                      onClick={() => {
                        props.handleSidenavType("#fff");
                        setSidenavType("white");
                      }}
                    >
                      WHITE
                    </Button>
                </div>
                <div className="fixed-nav mb-2">
                  <Title level={5}>Navbar Fixed </Title>
                  <Switch onChange={(e) => props.handleFixedNavbar(e)} />
                </div>
                <div className="ant-docment">
                    <Button type="ghost" size="large">
                      FREE DOWNLOAD
                    </Button>
                    <Button size="large">VIEW DOCUMENTATION</Button>
                </div>
                <div className="viewstar">
                  <a href="#pablo">{<StarOutlined />} Star</a>
                  <a href="#pablo"> 190</a>
                </div>

                <div className="ant-thank">
                  <Title level={5} className="mb-2">
                    Thank you for sharing!
                  </Title>
                    <Button type="ghost">{<TwitterOutlined />}TWEET</Button>
                    <Button type="ghost">{<FacebookFilled />}SHARE</Button>
                </div>
              </div>
            </div>
          </Drawer>
          <Link to="/sign-in" className="btn-sign-in">
            <LineChartOutlined />
            <span>Sign in</span>
          </Link>
          <Input
            className="header-search"
            placeholder="Type here..."
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </>
  );
}

interface HeaderProps {
  onPress(): void,
  name: string,
  subName: string,
  handleSidenavColor(color: string): void,
  handleSidenavType(type: string): void,
  handleFixedNavbar(e: boolean): void
}

export default Header;
