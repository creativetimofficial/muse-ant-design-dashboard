import React, { useState } from "react";
import { Switch, Anchor } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import AlertOnClick from "../../../utils/alertOnClick";
import CopyClipboard from "../../../utils/copyClipboard";

const { Link } = Anchor;
const code = `
import { Switch } from 'antd';

function onChange(checked) {
  console.log(checked});
}

ReactDOM.render(<Switch defaultChecked onChange={onChange} />, mountNode);`;
const markdown = `

~~~jsx
${code}
~~~
`;

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

export const SwitchComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
                <h1>Switch</h1>
                <p className="text-dark">Switching Selector.</p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <ul>
                  <li>
                    If you need to represent the switching between two states or
                    on-off state.
                  </li>
                  <li>
                    The difference between Switch and Checkbox is that Switch
                    will trigger a state change directly when you toggle it,
                    while Checkbox is generally used for state marking, which
                    should work in conjunction with submit operation.
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
                <p>The most basic usage.</p>
                <div className="showcase">
                  <Switch defaultChecked onChange={onChange} />
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
                Looking for more Ant Design React Switch? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/switch/"
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
