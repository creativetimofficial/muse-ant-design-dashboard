import React, { useState } from "react";
import { Alert, Anchor } from "antd";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";
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

export const AlertComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
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
                  <Alert
                    message="Success Text"
                    className="mb-3"
                    type="success"
                  />
                  <Alert message="Info Text" type="info" className="mb-3" />
                  <Alert
                    message="Warning Text"
                    type="warning"
                    className="mb-3"
                  />
                  <Alert message="Error Text" type="error" className="mb-3" />
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code}
                    state={alert}
                    setState={setAlert}
                  />

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
};
