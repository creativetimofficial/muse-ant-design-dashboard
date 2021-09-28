import React, { useState } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Layout, Menu } from "antd";
import logo from "../component/images/logo.png";
import { NavLink } from "react-router-dom";
import { GettingStartedMenuItemsComponent } from "./menuItems.components/gettingStarted.menuItemsComponent";
// import { slide as MenuSidebar } from "react-burger-menu";

const { Header, Sider } = Layout;

const MenuItems = () => {
  const [current, setCurrent] = useState("mail");
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Layout>
        <Header>
          <div className="header-info">
            <div className="brand">
              <img src={logo} alt="" />
              <span>Muse React Docs</span>
            </div>

            <button
              type="button"
              className="sidebar-toggler ant-btn ant-btn-link"
              onClick={() => setOpen(!open)}
            >
              <svg
                fill="#141414"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </button>
          </div>
          <div className="header-nav">
            <Menu selectedKeys={[current]} mode="inline-block">
              <Menu.Item key="mail" className="ant-menu-item">
                <NavLink to="/">Live Preview</NavLink>
              </Menu.Item>
              <Menu.Item key="app">
                <NavLink to="/">Support</NavLink>
              </Menu.Item>
            </Menu>

            <Menu
              onClick={handleClick}
              selectedKeys={[current]}
              mode="inline-block"
            >
              <Menu.Item key="mail" className="ant-menu-item">
                <NavLink to="/">Download free</NavLink>
              </Menu.Item>
            </Menu>
          </div>
        </Header>

        <Layout>
          <Sider width={250} style={{ background: "#fff" }}>
            <Menu className="ant-menu ant-menu-inline ant-menu-root ant-menu-light">
              <GettingStartedMenuItemsComponent />
            </Menu>
          </Sider>

          {/* <Content> <Footer>Footer</Footer> </Content>*/}
        </Layout>
      </Layout>
    </div>
  );
};

export default MenuItems;
