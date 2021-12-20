import React, { useState } from "react";
import { Collapse, Anchor } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";

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
                <AlertOnClick state={alert} />
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
