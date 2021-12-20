import React, { useState } from "react";
import { Select, Anchor } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";

const { Link } = Anchor;
const code = `
import { Select } from 'antd';

const { Option } = Select;
function handleChange(value) {
  console.log(value);
}


ReactDOM.render(
  <>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
      <Option value="lucy">Lucy</Option>
    </Select>
  </>,
  mountNode,
);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export const SelectComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content main-content-adjustment">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
                <h1>Select</h1>
                <p className="text-dark">
                  Select component to select value from options.
                </p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <ul>
                  <li>
                    A dropdown menu for displaying choices - an elegant
                    alternative to the native <code>&lt;select&gt;</code>{" "}
                    element.
                  </li>
                  <li>
                    Utilizing Radio is recommended when there are fewer total
                    options (less than 5).
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
                <p>Basic Usage</p>
                <div className="showcase">
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                  <Select defaultValue="lucy" style={{ width: 120 }} disabled>
                    <Option value="lucy">Lucy</Option>
                  </Select>
                  <Select defaultValue="lucy" style={{ width: 120 }} loading>
                    <Option value="lucy">Lucy</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="yiminghe">yiminghe</Option>
                  </Select>
                  <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
                    <Option value="lucy">Lucy</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="yiminghe">yiminghe</Option>
                  </Select>
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
                Looking for more Ant Design React Select? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/select/"
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
