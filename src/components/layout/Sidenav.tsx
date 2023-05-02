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

// import { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { LineChartOutlined } from '@ant-design/icons';

const Sidenav: React.FC<SidenavProps> = (props) => {
  const { color } = props;
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <>
      <div className="brand">
        <img src={'../../assets/images/logo.png'} alt="" />
        <span>Muse Dashboard</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span
              className="icon"
              style={{
                background: page === "dashboard" ? color : "",
              }}
            >
              <LineChartOutlined />
            </span>
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/tables">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              <LineChartOutlined />
            </span>
            <span className="label">Tables</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/billing">
            <span
              className="icon"
              style={{
                background: page === "billing" ? color : "",
              }}
            >
              <LineChartOutlined />
            </span>
            <span className="label">Billing</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/rtl">
            <span
              className="icon"
              style={{
                background: page === "rtl" ? color : "",
              }}
            >
              <LineChartOutlined />
            </span>
            <span className="label">RTL</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item className="menu-item-header" key="5">
          Account Pages
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/profile">
            <span
              className="icon"
              style={{
                background: page === "profile" ? color : "",
              }}
            >
              <LineChartOutlined />
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to="/sign-in">
            <span className="icon"><LineChartOutlined /></span>
            <span className="label">Sign In</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          <NavLink to="/sign-up">
            <span className="icon"><LineChartOutlined /></span>
            <span className="label">Sign Up</span>
          </NavLink>
        </Menu.Item>
      </Menu>
      <div className="aside-footer">
        <div
          className="footer-box"
          style={{
            background: color,
          }}
        >
          <span className="icon" style={{ color }}>
            <LineChartOutlined />
          </span>
          <h6>Need Help?</h6>
          <p>Please check our docs</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            DOCUMENTATION
          </Button>
        </div>
      </div>
    </>
  );
}

interface SidenavProps {
  color: string
}

export default Sidenav;
