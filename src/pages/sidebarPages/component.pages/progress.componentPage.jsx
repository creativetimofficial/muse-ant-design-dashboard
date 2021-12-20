import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Anchor } from "antd";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";
const { Link } = Anchor;

const code = `
import { Progress } from 'antd';

ReactDOM.render(
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>,
  mountNode,
);`;
const markdown = `

~~~jsx
${code}
~~~
`;

export const ProgressComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
                <h1>Progress</h1>{" "}
                <p className="text-dark">
                  Display the current progress of an operation flow.
                </p>
              </section>{" "}
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>{" "}
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>{" "}
                <p>
                  If it will take a long time to complete an operation, you can
                  use Progress to show the current progress and status.
                </p>{" "}
                <ul>
                  <li>
                    When an operation will interrupt the current interface, or
                    it needs to run in the background for more than 2 seconds.
                  </li>{" "}
                  <li>
                    When you need to display the completion percentage of an
                    operation.
                  </li>
                </ul>
              </section>{" "}
              <h2>Examples</h2>{" "}
              <section id="Progress-bar" className="mb-20">
                <div
                  role="separator"
                  className="ant-divider ant-divider-horizontal ant-divider-with-text-left"
                >
                  <span className="ant-divider-inner-text">Progress bar</span>
                </div>{" "}
                <p>A standard progress bar.</p>{" "}
                <div className="showcase">
                  <div className="ant-progress ant-progress-line ant-progress-status-normal ant-progress-show-info ant-progress-default">
                    <div>
                      <div className="ant-progress-outer">
                        <div className="ant-progress-inner">
                          <div
                            className="ant-progress-bg"
                            style={{
                              width: "30%",
                              height: "8px",
                              borderRadius: "100px",
                            }}
                          ></div>
                        </div>
                      </div>
                      <span title="30%" className="ant-progress-text">
                        30%
                      </span>
                    </div>
                  </div>{" "}
                  <div className="ant-progress ant-progress-line ant-progress-status-active ant-progress-show-info ant-progress-default">
                    <div>
                      <div className="ant-progress-outer">
                        <div className="ant-progress-inner">
                          <div
                            className="ant-progress-bg"
                            style={{
                              width: "50%",
                              height: "8px",
                              borderRadius: "100px",
                            }}
                          ></div>
                        </div>
                      </div>
                      <span title="50%" className="ant-progress-text">
                        50%
                      </span>
                    </div>
                  </div>{" "}
                  <div className="ant-progress ant-progress-line ant-progress-status-exception ant-progress-show-info ant-progress-default">
                    <div>
                      <div className="ant-progress-outer">
                        <div className="ant-progress-inner">
                          <div
                            className="ant-progress-bg"
                            style={{
                              width: "70%",
                              height: "8px",
                              borderRadius: "100px",
                            }}
                          ></div>
                        </div>
                      </div>
                      <span className="ant-progress-text">
                        <i
                          aria-label="icon: close-circle"
                          className="anticon anticon-close-circle"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            data-icon="close-circle"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            className=""
                          >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                          </svg>
                        </i>
                      </span>
                    </div>
                  </div>{" "}
                  <div className="ant-progress ant-progress-line ant-progress-status-success ant-progress-show-info ant-progress-default">
                    <div>
                      <div className="ant-progress-outer">
                        <div className="ant-progress-inner">
                          <div
                            className="ant-progress-bg"
                            style={{
                              width: "100%",
                              height: "8px",
                              borderRadius: "100px",
                            }}
                          ></div>
                        </div>
                      </div>
                      <span className="ant-progress-text">
                        <i
                          aria-label="icon: check-circle"
                          className="anticon anticon-check-circle"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            data-icon="check-circle"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            className=""
                          >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                          </svg>
                        </i>
                      </span>
                    </div>
                  </div>{" "}
                  <div className="ant-progress ant-progress-line ant-progress-status-normal ant-progress-default">
                    <div>
                      <div className="ant-progress-outer">
                        <div className="ant-progress-inner">
                          <div
                            className="ant-progress-bg"
                            style={{
                              width: "50%",
                              height: "8px",
                              borderRadius: "100px",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
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
                Looking for more Ant Design React Progress? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/progress/"
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
                      <Anchor affix={true} offsetTop={85}>
                        <Link href="#When-To-Use" title="When To Use" />

                        <Link href="#Progress-bar" title="Progress bar" />
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
