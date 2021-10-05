import React, { useState } from "react";
import { Tooltip as AntTooltip, Button, Anchor, Alert } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const { Link } = Anchor;

const code = `
import { Tooltip } from 'antd';

ReactDOM.render(
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>,
  mountNode,
);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const code2 = `
import { Tooltip, Button } from 'antd';

const text = <span>prompt text</span>;

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Tooltip placement="topLeft" title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <Tooltip placement="rightTop" title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Tooltip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>,
  mountNode,
);`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

const text = <span>prompt text</span>;

const buttonWidth = 70;

function Tooltips() {
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Tooltip</h1>
                <p className="text-dark">A simple text popup tip.</p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <ul>
                  <li>
                    The tip is shown on mouse enter, and is hidden on mouse
                    leave. The Tooltip doesn’t support complex text or
                    operations.
                  </li>
                  <li>
                    To provide an explanation of a ‘button/text/operation’. It’s
                    often used instead of the html ‘title’ attribute.
                  </li>
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
                <p>The simplest usage.</p>
                <div className="showcase">
                  <AntTooltip placement="bottomRight" title={text}>
                    <Button>Tooltip will show when mouse enter.</Button>
                  </AntTooltip>
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
              <section id="Placement" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Placement</span>
                </div>
                <p>There are 12 placement options available.</p>
                <div className="showcase">
                  <div id="components-a-tooltip-demo-placement">
                    <div className="demo">
                      <div
                        style={{
                          marginLeft: buttonWidth,
                          whiteSpace: "nowrap",
                        }}
                      >
                        <AntTooltip placement="topLeft" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            TL
                          </Button>
                        </AntTooltip>
                        <AntTooltip placement="top" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            Top
                          </Button>
                        </AntTooltip>
                        <AntTooltip placement="topRight" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            TR
                          </Button>
                        </AntTooltip>
                      </div>
                      <div style={{ width: buttonWidth, float: "left" }}>
                        <AntTooltip placement="leftTop" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            LT
                          </Button>
                        </AntTooltip>
                        <AntTooltip placement="left" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            Left
                          </Button>
                        </AntTooltip>
                        <AntTooltip placement="leftBottom" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            LB
                          </Button>
                        </AntTooltip>
                      </div>
                      <div
                        style={{
                          width: buttonWidth,
                          marginLeft: buttonWidth * 4 + 24,
                        }}
                      >
                        <AntTooltip placement="rightTop" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            RT
                          </Button>
                        </AntTooltip>
                        <AntTooltip placement="right" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            Right
                          </Button>
                        </AntTooltip>
                        <AntTooltip placement="rightBottom" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            RB
                          </Button>
                        </AntTooltip>
                      </div>
                      <div
                        style={{
                          marginLeft: buttonWidth,
                          clear: "both",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <AntTooltip placement="bottomLeft" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            BL
                          </Button>
                        </AntTooltip>
                        <AntTooltip placement="bottom" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            Bottom
                          </Button>
                        </AntTooltip>
                        <AntTooltip placement="bottomRight" title={text}>
                          <Button className="ant-btn ant-btn-updated-inTimeline">
                            BR
                          </Button>
                        </AntTooltip>
                      </div>
                    </div>
                    ,
                    <div
                      style={{ marginLeft: "70px", whiteSpace: "nowrap" }}
                    ></div>
                  </div>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={() => {
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
                Looking for more Ant Design React Tooltip? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/tooltip/"
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
                        <Link href="#Placement" title="Placement" />
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

export default Tooltips;
