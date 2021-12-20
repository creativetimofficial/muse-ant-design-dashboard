import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { Tabs, Anchor } from "antd";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";

const { Link } = Anchor;

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const code = `
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

ReactDOM.render(<Demo />, mountNode);`;
const markdown = `

~~~jsx
${code}
~~~
`;

export const TabsCmponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
                <h1>Tabs</h1>
                <p className="text-dark">
                  Tabs make it easy to switch between different views.
                </p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <p>Ant Design has 3 types of Tabs for different situations.</p>
                <ul>
                  <li>Card Tabs: for managing too many closeable views.</li>
                  <li>Normal Tabs: for functional aspects of a page.</li>
                  <li>RadioButton: for secondary tabs.</li>
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
                <p>Default activate first tab.</p>
                <div className="showcase">
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Tab 1" key="1">
                      Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                      Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                      Content of Tab Pane 3
                    </TabPane>
                  </Tabs>
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
                Looking for more Ant Design React Tabs? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/tabs/"
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
