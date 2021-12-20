import React, { useState } from "react";

import { Affix, Button, Anchor } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import AlertOnClick from "../../../utils/alertOnClick";
import CopyClipboard from "../../../utils/copyClipboard";

const { Link } = Anchor;

const code = `
import React, { useState } from 'react';
import { Affix, Button } from 'antd';

const Demo: React.FC = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};

ReactDOM.render(<Demo />, mountNode);`;
const markdown = `

~~~jsx
${code}
~~~
`;

export const AffixComponentPage = () => {
  const [alert, setAlert] = useState(false);
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
                <h1>Affix</h1>
                <p className="text-dark">Make an element stick to viewport.</p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <p>
                  When user browses a long web page, some content need to stick
                  to the viewport. This is common for menus and actions. Please
                  note that Affix should not cover other content on the page,
                  especially when the size of the viewport is small.
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
                <p>The simplest usage.</p>
                <div className="showcase">
                  <div style={{}}>
                    <div className="" style={{}}>
                      <Affix offsetTop={top}>
                        <Button type="primary" onClick={() => setTop(top + 10)}>
                          Affix top
                        </Button>
                      </Affix>
                    </div>
                  </div>
                  <br />
                  <div style={{ width: "855.2px", height: "40px" }}>
                    <Affix offsetBottom={bottom}>
                      <Button
                        type="primary"
                        onClick={() => setBottom(bottom + 10)}
                      >
                        Affix bottom
                      </Button>
                    </Affix>
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
                Looking for more Ant Design React Affix? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/affix/"
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
