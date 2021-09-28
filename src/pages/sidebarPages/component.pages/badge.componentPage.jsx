import React, { useState } from "react";
import { Alert, Anchor, Button } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const { Link } = Anchor;

const code = `
import { Badge, Avatar } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>,
  mountNode,
);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const code1 = `
import { Badge } from 'antd';

ReactDOM.render(
  <>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
  </>,
  mountNode,
);`;

const markdown1 = `

~~~jsx
${code1}
~~~
`;

const code2 = `
import { Badge } from 'antd';

ReactDOM.render(
  <>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
  </>,
  mountNode,
);`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

export const BadgeComponentPage = () => {
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alert3, setAlert3] = useState(false);

  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Badge</h1>
                <p className="text-dark">
                  Small numerical value or status descriptor for UI elements.
                </p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <p>
                  Badge normally appears in proximity to notifications or user
                  avatars with eye-catching appeal, typically displaying unread
                  messages count.
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
                <p>
                  Simplest Usage. Badge will be hidden when <code>count</code>{" "}
                  is 0, but we can use <code>showZero</code> to show it.
                </p>
                <div className="showcase showcase-remove-borderline">
                  <span className="mr-10 ant-badge">
                    <a
                      href="#"
                      className="head-example head-example-badge-icon"
                    ></a>
                    <sup
                      title="5"
                      className="ant-scroll-number ant-badge-count"
                      data-show="true"
                    >
                      <span
                        className="ant-scroll-number-only"
                        style={{
                          transition: "none 0s ease 0s",
                          transform: "translateY(-1500%)",
                        }}
                      >
                        <p className="ant-scroll-number-only-unit">0</p>
                        <p className="ant-scroll-number-only-unit">1</p>
                        <p className="ant-scroll-number-only-unit">2</p>
                        <p className="ant-scroll-number-only-unit">3</p>
                        <p className="ant-scroll-number-only-unit">4</p>
                        <p className="ant-scroll-number-only-unit">5</p>
                        <p className="ant-scroll-number-only-unit">6</p>
                        <p className="ant-scroll-number-only-unit">7</p>
                        <p className="ant-scroll-number-only-unit">8</p>
                        <p className="ant-scroll-number-only-unit">9</p>
                        <p className="ant-scroll-number-only-unit">0</p>
                        <p className="ant-scroll-number-only-unit">1</p>
                        <p className="ant-scroll-number-only-unit">2</p>
                        <p className="ant-scroll-number-only-unit">3</p>
                        <p className="ant-scroll-number-only-unit">4</p>
                        <p className="ant-scroll-number-only-unit current">5</p>
                        <p className="ant-scroll-number-only-unit">6</p>
                        <p className="ant-scroll-number-only-unit">7</p>
                        <p className="ant-scroll-number-only-unit">8</p>
                        <p className="ant-scroll-number-only-unit">9</p>
                        <p className="ant-scroll-number-only-unit">0</p>
                        <p className="ant-scroll-number-only-unit">1</p>
                        <p className="ant-scroll-number-only-unit">2</p>
                        <p className="ant-scroll-number-only-unit">3</p>
                        <p className="ant-scroll-number-only-unit">4</p>
                        <p className="ant-scroll-number-only-unit">5</p>
                        <p className="ant-scroll-number-only-unit">6</p>
                        <p className="ant-scroll-number-only-unit">7</p>
                        <p className="ant-scroll-number-only-unit">8</p>
                        <p className="ant-scroll-number-only-unit">9</p>
                      </span>
                    </sup>
                  </span>
                  <span className="mr-10 ant-badge">
                    <a
                      href="#"
                      className="head-example head-example-badge-icon"
                    ></a>
                    <sup
                      title="0"
                      className="ant-scroll-number ant-badge-count"
                      data-show="true"
                    >
                      <span
                        className="ant-scroll-number-only"
                        style={{
                          transition: "none 0s ease 0s",
                          transform: "translateY(-1000%)",
                        }}
                      >
                        <p className="ant-scroll-number-only-unit">0</p>
                        <p className="ant-scroll-number-only-unit">1</p>
                        <p className="ant-scroll-number-only-unit">2</p>
                        <p className="ant-scroll-number-only-unit">3</p>
                        <p className="ant-scroll-number-only-unit">4</p>
                        <p className="ant-scroll-number-only-unit">5</p>
                        <p className="ant-scroll-number-only-unit">6</p>
                        <p className="ant-scroll-number-only-unit">7</p>
                        <p className="ant-scroll-number-only-unit">8</p>
                        <p className="ant-scroll-number-only-unit">9</p>
                        <p className="ant-scroll-number-only-unit current">0</p>
                        <p className="ant-scroll-number-only-unit">1</p>
                        <p className="ant-scroll-number-only-unit">2</p>
                        <p className="ant-scroll-number-only-unit">3</p>
                        <p className="ant-scroll-number-only-unit">4</p>
                        <p className="ant-scroll-number-only-unit">5</p>
                        <p className="ant-scroll-number-only-unit">6</p>
                        <p className="ant-scroll-number-only-unit">7</p>
                        <p className="ant-scroll-number-only-unit">8</p>
                        <p className="ant-scroll-number-only-unit">9</p>
                        <p className="ant-scroll-number-only-unit">0</p>
                        <p className="ant-scroll-number-only-unit">1</p>
                        <p className="ant-scroll-number-only-unit">2</p>
                        <p className="ant-scroll-number-only-unit">3</p>
                        <p className="ant-scroll-number-only-unit">4</p>
                        <p className="ant-scroll-number-only-unit">5</p>
                        <p className="ant-scroll-number-only-unit">6</p>
                        <p className="ant-scroll-number-only-unit">7</p>
                        <p className="ant-scroll-number-only-unit">8</p>
                        <p className="ant-scroll-number-only-unit">9</p>
                      </span>
                    </sup>
                  </span>
                  <span className="mr-10 ant-badge">
                    <a
                      href="#"
                      className="head-example head-example-badge-icon"
                    ></a>
                    <i
                      aria-label="icon: clock-circle"
                      className="
                  anticon anticon-clock-circle
                  ant-scroll-number-custom-component
                "
                      data-show="true"
                      style={{ color: "rgb(245, 34, 45)" }}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="clock-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                    </i>
                  </span>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={() => {
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
              <section id="Status" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Status</span>
                </div>
                <p>Standalone badge with status.</p>
                <div className="showcase">
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-success"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-error"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-default"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-processing"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <br />
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-success"></span>
                    <span className="ant-badge-status-text">Success</span>
                  </span>
                  <br />
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-error"></span>
                    <span className="ant-badge-status-text">Error</span>
                  </span>
                  <br />
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-default"></span>
                    <span className="ant-badge-status-text">Default</span>
                  </span>
                  <br />
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-processing"></span>
                    <span className="ant-badge-status-text">Processing</span>
                  </span>
                  <br />
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span className="ant-badge-status-text">warning</span>
                  </span>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={() => {
                      navigator.clipboard.writeText(code1);
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
                    children={markdown1}
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
              <section id="Colorful-Badge" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Colorful Badge</span>
                </div>
                <p>
                  New feature after 3.16.0. We preset a series of colorful Badge
                  styles for use in different situations. You can also set it to
                  a hex color string for custom color.
                </p>
                <div className="showcase">
                  <h4 style={{ marginBottom: "16px" }}>Presets:</h4>
                  <div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-pink"></span>
                        <span className="ant-badge-status-text">pink</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-red"></span>
                        <span className="ant-badge-status-text">red</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-yellow"></span>
                        <span className="ant-badge-status-text">yellow</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-orange"></span>
                        <span className="ant-badge-status-text">orange</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-cyan"></span>
                        <span className="ant-badge-status-text">cyan</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-green"></span>
                        <span className="ant-badge-status-text">green</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-blue"></span>
                        <span className="ant-badge-status-text">blue</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-purple"></span>
                        <span className="ant-badge-status-text">purple</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-geekblue"></span>
                        <span className="ant-badge-status-text">geekblue</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-magenta"></span>
                        <span className="ant-badge-status-text">magenta</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-volcano"></span>
                        <span className="ant-badge-status-text">volcano</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-gold"></span>
                        <span className="ant-badge-status-text">gold</span>
                      </span>
                    </div>
                    <div>
                      <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                        <span className="ant-badge-status-dot ant-badge-status-lime"></span>
                        <span className="ant-badge-status-text">lime</span>
                      </span>
                    </div>
                  </div>
                  <h4 style={{ margin: "16px 0px" }}>Custom:</h4>
                  <div>
                    <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                      <span
                        className="ant-badge-status-dot"
                        style={{ background: "rgb(255, 85, 0)" }}
                      ></span>
                      <span className="ant-badge-status-text">#f50</span>
                    </span>
                    <br />
                    <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                      <span
                        className="ant-badge-status-dot"
                        style={{ background: "rgb(45, 183, 245)" }}
                      ></span>
                      <span className="ant-badge-status-text">#2db7f5</span>
                    </span>
                    <br />
                    <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                      <span
                        className="ant-badge-status-dot"
                        style={{ background: "rgb(135, 208, 104)" }}
                      ></span>
                      <span className="ant-badge-status-text">#87d068</span>
                    </span>
                    <br />
                    <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                      <span
                        className="ant-badge-status-dot"
                        style={{ background: "rgb(16, 142, 233)" }}
                      ></span>
                      <span className="ant-badge-status-text">#108ee9</span>
                    </span>
                  </div>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={() => {
                      navigator.clipboard.writeText(code2);
                      setAlert3(!alert3);
                    }}
                  >
                    <i
                      aria-label="icon: copied!"
                      className="anticon anticon-copy"
                    >
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
                  {alert3 ? (
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
                Looking for more Ant Design React Badge? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/badge/"
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
                      <div className="ant-anchor-ink">
                        <span
                          className="ant-anchor-ink-ball"
                          style={{ top: "10.5px" }}
                        ></span>
                      </div>
                      <Anchor affix={true} offsetTop={85}>
                        <Link href="#When-To-Use" title="When To Use" />

                        <Link href="#Basic" title="Basic" />
                        <Link href="#Status" title="Status" />
                        <Link href="#Colorful-Badge" title="Colorful Badge" />
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
