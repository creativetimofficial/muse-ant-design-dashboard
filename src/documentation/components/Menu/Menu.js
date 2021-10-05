import React, { useState } from "react";
import { Layout, Menu as AntMenu } from "antd";
import GettingStartedMenu from "./GettingStartedMenu";
import logo from "../../../assets/images/logo.png";
const { Header, Sider } = Layout;

function Menu() {
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
            <AntMenu selectedKeys={[current]} mode="inline-block">
              <AntMenu.Item key="mail" className="ant-menu-item">
                <a href="https://demos.creative-tim.com/muse-ant-design-dashboard">
                  Live Preview
                </a>
              </AntMenu.Item>
              <AntMenu.Item key="app">
                <a
                  href="https://github.com/creativetimofficial/muse-ant-design-dashboard/issues"
                  target="_blank"
                  rel="noreferrer"
                >
                  Support
                </a>
              </AntMenu.Item>
            </AntMenu>

            <AntMenu
              onClick={handleClick}
              selectedKeys={[current]}
              mode="inline-block"
            >
              <AntMenu.Item key="mail" className="ant-menu-item">
                <a
                  href="https://www.creative-tim.com/product/muse-ant-design-dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download free
                </a>
              </AntMenu.Item>
            </AntMenu>
          </div>
        </Header>

        <Layout>
          <Sider width={250} style={{ background: "#fff" }}>
            <AntMenu className="ant-menu ant-menu-inline ant-menu-root ant-menu-light">
              <GettingStartedMenu />
            </AntMenu>
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}

export default Menu;
