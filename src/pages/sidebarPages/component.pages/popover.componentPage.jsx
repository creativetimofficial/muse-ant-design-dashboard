import React, { useState } from "react";
import { Popover, Button, Anchor } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import AlertOnClick from "../../../utils/alertOnClick";
import CopyClipboard from "../../../utils/copyClipboard";

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

export const PopoverComponentPage = () => {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
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
                  <Popover
                    content={contentForHover}
                    title="Title"
                    trigger="hover"
                  >
                    <Button className="ant-btn ant-btn-primary">
                      Hover me
                    </Button>
                  </Popover>
                  <Popover
                    content={contentForFocus}
                    title="Title"
                    trigger="focus"
                  >
                    <Button className="ant-btn ant-btn-primary">
                      Focus me
                    </Button>
                  </Popover>
                  <Popover
                    content={contentForClick}
                    title="Title"
                    trigger="click"
                  >
                    <Button className="ant-btn ant-btn-primary">
                      Click me
                    </Button>
                  </Popover>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code}
                    state={alert}
                    setState={setAlert}
                  />
                </section>

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
                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          TL
                        </Button>
                      </Popover>

                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          Top
                        </Button>
                      </Popover>

                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          TR
                        </Button>
                      </Popover>
                    </div>
                    <div style={{ width: "70px", float: "left" }}>
                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          LT
                        </Button>
                      </Popover>

                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          Left
                        </Button>
                      </Popover>

                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          LB
                        </Button>
                      </Popover>
                    </div>
                    <div style={{ width: "70px", marginLeft: "304px" }}>
                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          RT
                        </Button>
                      </Popover>
                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          Right
                        </Button>
                      </Popover>
                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          RB
                        </Button>
                      </Popover>
                    </div>
                    <div
                      style={{
                        marginLeft: "70px",
                        clear: "both",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          BL
                        </Button>
                      </Popover>
                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          Bottom
                        </Button>
                      </Popover>
                      <Popover
                        content={contentForTwlbtn}
                        title="Title"
                        trigger="hover"
                      >
                        <Button className="ant-btn ant-btn-updated-inTimeline">
                          BR
                        </Button>
                      </Popover>
                    </div>
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code2}
                    state={alert}
                    setState={setAlert}
                  />

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
};
