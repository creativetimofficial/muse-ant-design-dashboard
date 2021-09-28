import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Alert, Anchor, Button } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const { Link } = Anchor;

const code = `
import { Row, Col } from 'antd';

ReactDOM.render(
  <>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>,
  mountNode,
);`;

const markdown = `

~~~jsx
${code}
~~~
`;

export const GridComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Grid</h1>
                <p className="text-dark">24 Grids System</p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <h2>Examples</h2>
              <section id="Basic-Grid" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Basic Grid</span>
                </div>
                <p>
                  From the stack to the horizontal arrangement. You can create a
                  basic grid system by using a single set of Row and Col grid
                  assembly, all of the columns (Col) must be placed in Row.
                </p>
                <div className="showcase">
                  <div className="grid-demo">
                    <div className="ant-row">
                      <div className="ant-col ant-col-12 ant-col-background ant-col-backgraound-odd">
                        col-12
                      </div>
                      <div className="ant-col ant-col-12 ant-col-background">
                        col-12
                      </div>
                    </div>
                    <div className="ant-row">
                      <div className="ant-col ant-col-8 ant-col-background ant-col-backgraound-odd">
                        col-8
                      </div>
                      <div className="ant-col ant-col-8 ant-col-background">
                        col-8
                      </div>
                      <div className="ant-col ant-col-8 ant-col-background ant-col-backgraound-odd">
                        col-8
                      </div>
                    </div>
                    <div className="ant-row">
                      <div className="ant-col ant-col-6 ant-col-background">
                        col-6
                      </div>
                      <div className="ant-col ant-col-6 ant-col-background ant-col-backgraound-odd">
                        col-6
                      </div>
                      <div className="ant-col ant-col-6 ant-col-background">
                        col-6
                      </div>
                      <div className="ant-col ant-col-6 ant-col-background ant-col-backgraound-odd">
                        col-6
                      </div>
                    </div>
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
              <p className="text-right font-semibold mb-24">
                Looking for more Ant Design React Grid? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/grid/"
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
                        <Link href="#Basic-Grid" title="Basic Grid" />
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
