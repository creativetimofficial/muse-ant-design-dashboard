import { Layout, Anchor, Alert, Button } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const { Link } = Anchor;

const code = `
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <>
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>,
  mountNode,
);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const code2 = `
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(

ReactDOM.render(
  <>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>,
  mountNode,
);`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

export const LayoutComponentPage = () => {
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Layout</h1>
                <p className="text-dark">
                  Handling the overall layout of a page.
                </p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="Specification" className="mb-24">
                <h2>Specification</h2>
              </section>
              <section className="mb-24">
                <h3>Size</h3>
                <p>
                  The first level navigation is inclined left near a logo, and
                  the secondary menu is inclined right.
                </p>
                <ul>
                  <li>
                    Top Navigation (almost systems): the height of the first
                    level navigation <code>64px</code>, the second level
                    navigation <code>48px</code>.
                  </li>
                  <li>
                    Top Navigation(contents page): the height of the first level
                    navigation <code>80px</code>, the second level navigation{" "}
                    <code>56px</code>.
                  </li>
                  <li>
                    Calculation formula of a top navigation:
                    <code>48+8n</code>.
                  </li>
                  <li>
                    Calculation formula of an aside navigation:
                    <code>200+8n</code>.
                  </li>
                </ul>
              </section>
              <section className="mb-24">
                <p className="font-semibold mb-24">
                  For more specifications Please check the
                  <a
                    target="_blank"
                    href="https://antdv.com/components/layout/"
                    rel="noreferrer"
                  >
                    official docs
                  </a>
                  .
                </p>
              </section>
              <h2>Examples</h2>
              <section id="Dashboard-Layout" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">
                    Dashboard Layout
                  </span>
                </div>
                <p>Here is the dashboard layout.</p>
                <div className="showcase">
                  <div id="components-layout-demo-basic">
                    <section className="ant-layouts">
                      <section className="ant-layouts ant-layout-has-siders">
                        <aside
                          className="ant-layout-siders ant-layout-sider-darks"
                          style={{
                            flex: "0 0 200px",
                            maxWidth: "200px",
                            minWidth: "200px",
                            width: "200px",
                          }}
                        >
                          <div
                            className="ant-layout-sider-childrens"
                            style={{
                              justifyContent: "center",
                              display: "flex",
                              marginTop: "36%",
                            }}
                          >
                            Sider
                          </div>
                        </aside>
                        <section className="ant-layouts">
                          <header className="ant-layout-headers some-style-added-layout">
                            Header
                          </header>
                          <main className="ant-layout-contents some-style-added-layout">
                            Content
                          </main>
                          <footer className="ant-layout-footers some-style-added-layout">
                            Footer
                          </footer>
                        </section>
                      </section>
                    </section>
                  </div>
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
              <section id="Authentication-Layout" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">
                    Authentication Layout
                  </span>
                </div>
                <p>Here is the default layout used on authentication pages.</p>
                <div className="showcase">
                  <div id="components-layout-demo-authentication">
                    <section className="ant-layouts">
                      <header className="ant-layout-headers align-itam-in-center">
                        Header
                      </header>
                      <main className="ant-layout-contents align-itam-in-center">
                        Content
                      </main>
                      <footer className="ant-layout-footers align-itam-in-center">
                        Footer
                      </footer>
                    </section>
                  </div>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={(e) => {
                      navigator.clipboard.writeText(code2);
                      setAlert2(!alert2);
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
                  {alert2 ? (
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
                    children={markdown2}
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
                Looking for more Ant Design React Layout? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/layout/"
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
                        <Link href="#Specification" title="Specification" />

                        <Link
                          href="#Dashboard-Layout"
                          title="Dashboard Layout"
                        />
                        <Link
                          href="#Authentication-Layout"
                          title="Authentication Layout"
                        />
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
};
