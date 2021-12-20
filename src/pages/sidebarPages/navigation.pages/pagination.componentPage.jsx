import React, { useState } from "react";
import { Pagination, Anchor } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";

const { Link } = Anchor;
const code = `
import { Pagination } from 'antd';

ReactDOM.render(<Pagination defaultCurrent={1} total={50} />, mountNode);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const code2 = `
import { Pagination } from 'antd';

ReactDOM.render(<Pagination defaultCurrent={6} total={500} />, mountNode);`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

export const PaginationComponentPage = () => {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />

                <h1>Pagination</h1>
                <p className="text-dark">
                  A long list can be divided into several pages by ‘Pagination’,
                  and only one page will be loaded at a time.
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
                    When it will take a long time to load/render all items.
                  </li>
                  <li>
                    If you want to browse the data by navigating through pages.
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
                <p>Basic pagination.</p>
                <div className="showcase">
                  <Pagination defaultCurrent={1} total={50} />
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
              <section id="More" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">More</span>
                </div>
                <p>More pages.</p>
                <div className="showcase">
                  <Pagination defaultCurrent={6} total={500} />
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
                Looking for more Ant Design React Pagination? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/pagination/"
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
                        <Link href="#More" title="More" />
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
