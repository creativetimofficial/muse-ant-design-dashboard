import React, { useState } from "react";
import { Popover as AntPopover, Button, Anchor, Alert } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const { Link } = Anchor;

const code = `
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <div>
    <Popover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </div>,
  mountNode,
);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const code2 = `
import { Popover, Button } from 'antd';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Popover placement="topLeft" title={text} content={content} trigger="click">
        <Button>TL</Button>
      </Popover>
      <Popover placement="top" title={text} content={content} trigger="click">
        <Button>Top</Button>
      </Popover>
      <Popover placement="topRight" title={text} content={content} trigger="click">
        <Button>TR</Button>
      </Popover>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Popover placement="leftTop" title={text} content={content} trigger="click">
        <Button>LT</Button>
      </Popover>
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button>Left</Button>
      </Popover>
      <Popover placement="leftBottom" title={text} content={content} trigger="click">
        <Button>LB</Button>
      </Popover>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <Popover placement="rightTop" title={text} content={content} trigger="click">
        <Button>RT</Button>
      </Popover>
      <Popover placement="right" title={text} content={content} trigger="click">
        <Button>Right</Button>
      </Popover>
      <Popover placement="rightBottom" title={text} content={content} trigger="click">
        <Button>RB</Button>
      </Popover>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Popover placement="bottomLeft" title={text} content={content} trigger="click">
        <Button>BL</Button>
      </Popover>
      <Popover placement="bottom" title={text} content={content} trigger="click">
        <Button>Bottom</Button>
      </Popover>
      <Popover placement="bottomRight" title={text} content={content} trigger="click">
        <Button>BR</Button>
      </Popover>
    </div>
  </div>,
  mountNode,
);`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

const contentForHover = (
  <div>
    <p>Hover Button</p>
    <p>Content</p>
  </div>
);
const contentForFocus = (
  <div>
    <p>Focus Button</p>
    <p>Content</p>
  </div>
);
const contentForClick = (
  <div>
    <p>Click Button</p>
    <p>Content</p>
  </div>
);
const contentForTwlbtn = (
  <div>
    <p>12 Button's</p>
    <p>Content</p>
  </div>
);

function Popover() {
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Popover</h1>
                <p className="text-dark">
                  The floating card popped by clicking or hovering.
                </p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <p>
                  A simple popup menu to provide extra information or
                  operations.
                </p>
                <p>
                  Comparing with Tooltip, besides information Popover card can
                  also provide action elements like links and buttons.
                </p>
              </section>
              <h2>Examples</h2>
              <section id="Three-ways-to-trigger" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">
                    Three ways to trigger
                  </span>
                </div>
                <p>Mouse to click, focus and move in.</p>
                <div className="showcase">
                  <AntPopover
                    content={contentForHover}
                    title="Title"
                    trigger="hover"
                  >
                    <Button className="ant-btn ant-btn-primary">
                      Hover me
                    </Button>
                  </AntPopover>
                  <AntPopover
                    content={contentForFocus}
                    title="Title"
                    trigger="focus"
                  >
                    <Button className="ant-btn ant-btn-primary">
                      Focus me
                    </Button>
                  </AntPopover>
                  <AntPopover
                    content={contentForClick}
                    title="Title"
                    trigger="click"
                  >
                    <Button className="ant-btn ant-btn-primary">
                      Click me
                    </Button>
                  </AntPopover>
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
                </section>
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
                  <div id="components-popover-demo-placement">
                    <div style={{ marginLeft: "70px", whiteSpace: "nowrap" }}>
                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          TL
                        </Button>
                      </AntPopover>

                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          Top
                        </Button>
                      </AntPopover>

                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          TR
                        </Button>
                      </AntPopover>
                    </div>
                    <div style={{ width: "70px", float: "left" }}>
                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          LT
                        </Button>
                      </AntPopover>

                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          Left
                        </Button>
                      </AntPopover>

                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          LB
                        </Button>
                      </AntPopover>
                    </div>
                    <div style={{ width: "70px", marginLeft: "304px" }}>
                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          RT
                        </Button>
                      </AntPopover>
                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          Right
                        </Button>
                      </AntPopover>
                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          RB
                        </Button>
                      </AntPopover>
                    </div>
                    <div
                      style={{
                        marginLeft: "70px",
                        clear: "both",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          BL
                        </Button>
                      </AntPopover>
                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          Bottom
                        </Button>
                      </AntPopover>
                      <AntPopover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          BR
                        </Button>
                      </AntPopover>
                    </div>
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
                Looking for more Ant Design React Popover? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/popover/"
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

                        <Link
                          href="#Three-ways-to-trigger"
                          title="Three ways to trigger"
                        />
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

export default Popover;
