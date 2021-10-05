import React, { useState } from "react";
import { Alert as AntAlert, Anchor, Button } from "antd";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const { Link } = Anchor;

const code = `
import { Alert } from 'antd';

ReactDOM.render(
  <>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </>,
  mountNode,
);`;

const markdown = `

~~~jsx
${code}
~~~
`;

function Alert() {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Alert</h1>{" "}
                <p className="text-dark">Alert component for feedback.</p>
              </section>{" "}
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>{" "}
              <section id="when-to-use" className="mb-24">
                <h2>When To Use</h2>{" "}
                <ul>
                  <li>When you need to show alert messages to users.</li>{" "}
                  <li>
                    When you need a persistent static container which is
                    closable by user actions.
                  </li>
                </ul>
              </section>{" "}
              <h2>Examples</h2>{" "}
              <section id="Basic" className="mb-24">
                <div
                  role="separator"
                  className="ant-divider ant-divider-horizontal ant-divider-with-text-left"
                >
                  <span className="ant-divider-inner-text">Basic</span>
                </div>{" "}
                <p>The simplest usage for short messages.</p>{" "}
                <div className="showcase">
                  <AntAlert
                    message="Success Text"
                    className="mb-3"
                    type="success"
                  />
                  <AntAlert message="Info Text" type="info" className="mb-3" />
                  <AntAlert
                    message="Warning Text"
                    type="warning"
                    className="mb-3"
                  />
                  <AntAlert
                    message="Error Text"
                    type="error"
                    className="mb-3"
                  />
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
                    <AntAlert
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
              </section>{" "}
              <p className="text-right font-semibold mb-24">
                Looking for more Ant Design React Alert? Please check the{" "}
                <a
                  target="_blank"
                  href="https://ant.design/components/alert/"
                  rel="noreferrer"
                >
                  official docs
                </a>
                .
              </p>
            </div>{" "}
            <div className="page-anchor">
              <div style={{}}>
                <div className="" style={{}}>
                  <div
                    className="ant-anchor-wrapper"
                    style={{ maxHeight: "calc(100vh - 85px)" }}
                  >
                    <div className="ant-anchor">
                      <div className="ant-anchor-ink">
                        <span
                          className="ant-anchor-ink-ball"
                          style={{ top: "10.5px" }}
                        ></span>
                      </div>
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

export default Alert;
