import React, { useState } from "react";
import { Collapse, Anchor, Alert, Button } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const { Link } = Anchor;
const code = `
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = 
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
;

ReactDOM.render(
  <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>,
  mountNode,
);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const { Panel } = Collapse;

export const CollapseComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Collapse</h1>
                <p className="text-dark">
                  A content area which can be collapsed and expanded.
                </p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section className="mb-24">
                <h2>When To Use</h2>
                <ul>
                  <li>
                    Can be used to group or hide complex regions to keep the
                    page clean.
                  </li>
                  <li>
                    ‘Accordion’ is a special kind of ‘Collapse’, which allows
                    only one panel to be expanded at a time.
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
                <p>
                  By default, any number of panels can be expanded at a time.
                  The first panel is expanded in this example.
                </p>
                <div className="showcase">
                  <div className="ant-collapse ant-collapse-icon-position-left">
                    <div
                      role="tablist"
                      className="ant-collapse-item ant-collapse-item-active"
                    >
                      <div
                        className="ant-collapse-content ant-collapse-content-active"
                        style={{}}
                      >
                        <Collapse>
                          <Panel header="This is panel header 1" key="1">
                            <p>
                              A dog is a type of domesticated animal.Known for
                              its loyalty and faithfulness,it can be found as a
                              welcome guest in many households across the world.
                            </p>
                          </Panel>
                          <Panel header="This is panel header 2" key="2">
                            <p>
                              A dog is a type of domesticated animal.Known for
                              its loyalty and faithfulness,it can be found as a
                              welcome guest in many households across the world.
                            </p>
                          </Panel>
                          <Panel header="This is panel header 3" key="3">
                            <p>
                              A dog is a type of domesticated animal.Known for
                              its loyalty and faithfulness,it can be found as a
                              welcome guest in many households across the world.
                            </p>
                          </Panel>
                        </Collapse>
                      </div>
                    </div>
                  </div>
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
              <p className="text-right font-semibold mb-24">
                Looking for more Ant Design React Collapse? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/collapse/"
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
