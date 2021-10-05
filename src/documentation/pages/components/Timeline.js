import { Button, Timeline as AntTimeline, Anchor, Alert } from "antd";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const { Link } = Anchor;

const code = `
import { Timeline } from 'antd';

ReactDOM.render(
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,
  mountNode,
);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const code2 = `
import { Timeline, Button } from 'antd';

class PendingTimeLine extends React.Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div>
        <Timeline pending="Recording..." reverse={this.state.reverse}>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
        <Button type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>
          Toggle Reverse
        </Button>
      </div>
    );
  }
}

ReactDOM.render(<PendingTimeLine />, mountNode);`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

function Timeline() {
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);

  const [reverse, setReverse] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Timeline</h1>
                <p className="text-dark">Vertical display timeline.</p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <ul>
                  <li>
                    When a series of information needs to be ordered by time
                    (ascending or descending).
                  </li>
                  <li>When you need a timeline to make a visual connection.</li>
                </ul>
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
                <p>Basic timeline.</p>
                <div className="showcase">
                  <AntTimeline>
                    <AntTimeline.Item>
                      Create a services site 2015-09-01
                    </AntTimeline.Item>
                    <AntTimeline.Item>
                      Solve initial network problems 2015-09-01
                    </AntTimeline.Item>
                    <AntTimeline.Item>
                      Technical testing 2015-09-01
                    </AntTimeline.Item>
                    <AntTimeline.Item>
                      Network problems being solved 2015-09-01
                    </AntTimeline.Item>
                  </AntTimeline>
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
              <section id="Reverse" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Reverse</span>
                </div>
                <p>Order history.</p>
                <div className="showcase">
                  <AntTimeline pending="Recording..." reverse={reverse}>
                    <AntTimeline.Item>
                      Create a services site 2015-09-01
                    </AntTimeline.Item>
                    <AntTimeline.Item>
                      Solve initial network problems 2015-09-01
                    </AntTimeline.Item>
                    <AntTimeline.Item>
                      Technical testing 2015-09-01
                    </AntTimeline.Item>
                  </AntTimeline>
                  <Button
                    type="primary"
                    style={{ marginTop: 16 }}
                    onClick={(e) => {
                      setReverse(!reverse);
                    }}
                  >
                    Toggle Reverse
                  </Button>
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
                Looking for more Ant Design React Timeline? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/timeline/"
                  rel="noreferrer"
                >
                  official docs
                </a>
                .
              </p>
            </div>
            <div className="page-anchor">
              <div style={{ width: "300px", height: "90px" }}>
                <div
                  className="ant-affix"
                  style={{
                    position: "fixed",
                    top: "85px",
                    width: "300px",
                    height: "90px",
                  }}
                >
                  <div
                    className="ant-anchor-wrapper"
                    style={{ maxHeight: "calc(100vh - 85px)" }}
                  >
                    <div className="ant-anchor">
                      <Anchor affix={true} offsetTop={85}>
                        <Link href="#When-To-Use" title="When To Use" />

                        <Link href="#Basic" title="Basic" />
                        <Link href="#Reverse" title="Reverse" />
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

export default Timeline;
