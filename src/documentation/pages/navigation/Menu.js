import React, { useState } from "react";
import { Alert, Button, Menu } from "antd";
import { Anchor } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const { Link } = Anchor;

const code = `
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

ReactDOM.render(<App />, mountNode);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const { SubMenu } = Menu;

function DocsMenu() {
  const [alert, setAlert] = useState(false);
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Menu</h1>
                <p className="text-dark">A versatile menu for navigation.</p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <p>
                  Navigation is an important part of any website, as a good
                  navigation setup allows users to move around the site quickly
                  and efficiently. Ant Design offers top and side navigation
                  options. Top navigation provides all the categories and
                  functions of the website. Side navigation provides the
                  multi-level structure of the website.
                </p>
              </section>
              <h2>Examples</h2>
              <section id="Basic" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Basic</span>
                </div>
                <p>Horizontal top navigation menu.</p>
                <div className="showcase">
                  <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                  >
                    <Menu.Item key="mail" icon={<MailOutlined />}>
                      Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                      Navigation Two
                    </Menu.Item>
                    <SubMenu
                      key="SubMenu"
                      icon={<SettingOutlined />}
                      title="Navigation Three - Submenu"
                    >
                      <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                      </Menu.ItemGroup>
                      <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                      <a
                        href="https://ant.design"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Navigation Four - Link
                      </a>
                    </Menu.Item>
                  </Menu>

                  <ul
                    role="menu"
                    className="ant-menu ant-menu-horizontal ant-menu-root ant-menu-light"
                  >
                    <li
                      role="menuitem"
                      className="
                  ant-menu-submenu
                  ant-menu-submenu-horizontal
                  ant-menu-overflowed-submenu
                "
                      style={{
                        visibility: "hidden",
                        position: "absolute",
                        display: "none",
                      }}
                    >
                      <div
                        aria-haspopup="true"
                        className="ant-menu-submenu-title"
                      >
                        <span>···</span>
                        <i className="ant-menu-submenu-arrow"></i>
                      </div>
                    </li>
                  </ul>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={(e) => {
                      navigator.clipboard.writeText(code);
                      setAlert(!alert);
                    }}
                  >
                    <i aria-label="icon: copy" className="anticon anticon-copy">
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="copy"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                      </svg>
                    </i>
                    <span>Copy</span>
                  </button>
                  {alert ? (
                    <Alert
                      message="Copied!"
                      type="success"
                      showIcon
                      action={<Button size="small" type="text"></Button>}
                      closable
                      className="alert-copy-code"
                    />
                  ) : (
                    ""
                  )}
                  <ReactMarkdown
                    children={markdown}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                </section>
              </section>
              <p className="text-right font-semibold mb-24">
                Looking for more Ant Design React Menu? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/menu/"
                  rel="noreferrer"
                >
                  official docs
                </a>
                .
              </p>
            </div>
            <div className="page-anchor">
              <div style={{}}>
                <div className="" style={{}}>
                  <div
                    className="ant-anchor-wrapper"
                    style={{ maxHeight: "calc(100vh - 85px)" }}
                  >
                    <div className="ant-anchor">
                      <Anchor affix={true} offsetTop={85}>
                        <Link href="#When-To-Use" title="When To Use" />

                        <Link href="#Basic" title="Basic" />
                      </Anchor>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocsMenu;
