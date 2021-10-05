import React from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

function QuickStart() {
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section id="Quick-Start" className="mb-24">
                <h1>Quick Start</h1>{" "}
                <p className="text-dark">
                  Ant Design React is dedicated to providing a good development
                  experience for programmers. Make sure that you had installed{" "}
                  <a href="https://nodejs.org/">Node.js</a> (&gt; v8.9)
                  correctly.
                </p>
              </section>{" "}
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>{" "}
              <section id="Quick-Project-Installation" className="mb-24">
                <h2>Quick Project Installation</h2>{" "}
                <p>
                  To install the Muse Dashboard Template, you only have run this
                  command in your npm project :
                </p>{" "}
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
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
                  </button>{" "}
                  <pre style={{ maxHeight: "500px" }}>
                    <code className="hljs bash">npm install muse-antd</code>
                  </pre>
                </section>
              </section>{" "}
              <section id="Direct-Download" className="mb-24">
                <h2>Direct Download</h2>{" "}
                <p>
                  You can also download and unzip or clone the project, and then
                  run one of the installation commands below :
                </p>{" "}
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
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
                  </button>{" "}
                  <pre style={{ maxHeight: "500px" }}>
                    <code className="hljs bash">
                      npm install
                      <span className="hljs-comment"># OR</span>
                      yarn
                    </code>
                  </pre>
                </section>
              </section>{" "}
              <section id="Import-ant-design-vue" className="mb-24">
                <h2>Import antd</h2>
              </section>{" "}
              <section className="mb-24">
                <div
                  role="separator"
                  className="ant-divider ant-divider-horizontal ant-divider-with-text-left"
                >
                  <span className="ant-divider-inner-text">
                    1. Installation
                  </span>
                </div>{" "}
                <p>
                  <a href="https://github.com/ant-design/ant-design/releases.atom">
                    antd
                  </a>
                </p>{" "}
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
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
                  </button>{" "}
                  <pre style={{ maxHeight: "500px" }}>
                    <code className="hljs bash">
                      npm install -g @antd/cli
                      <span className="hljs-comment"># OR</span>
                      yarn global add @antd/cli
                    </code>
                  </pre>
                </section>
              </section>{" "}
              <section className="mb-24">
                <div
                  role="separator"
                  className="ant-divider ant-divider-horizontal ant-divider-with-text-left"
                >
                  <span className="ant-divider-inner-text">
                    2. Create a New Project
                  </span>
                </div>{" "}
                <p>A new project can be created using CLI tools.</p>{" "}
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
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
                  </button>{" "}
                  <pre style={{ maxHeight: "500px" }}>
                    <code className="hljs bash">npm create antd-demo</code>
                  </pre>
                </section>{" "}
                <p>And, setup your React project configuration.</p>
              </section>{" "}
              <section className="mb-24">
                <div
                  role="separator"
                  className="ant-divider ant-divider-horizontal ant-divider-with-text-left"
                >
                  <span className="ant-divider-inner-text">
                    3. Use antd's Components
                  </span>
                </div>{" "}
                <p>A new project can be created using CLI tools.</p>{" "}
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
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
                  </button>{" "}
                  <pre style={{ maxHeight: "500px" }}>
                    <code className="hljs bash">npm i --save antd</code>
                  </pre>
                </section>{" "}
                <p>Fully import</p>{" "}
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
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
                  </button>{" "}
                  <pre style={{ maxHeight: "500px" }}>
                    <code className="hljs javascript">
                      <span className="hljs-keyword">import</span> antd{" "}
                      <span className="hljs-keyword">from</span>{" "}
                      <span className="hljs-string">'antd'</span>;
                      <span className="hljs-keyword">import</span> Antd{" "}
                      <span className="hljs-keyword">from</span>{" "}
                      <span className="hljs-string">'antd'</span>;
                      <span className="hljs-keyword">import</span> App{" "}
                      <span className="hljs-keyword">from</span>{" "}
                      <span className="hljs-string">'./App'</span>;
                      <span className="hljs-keyword">import</span>{" "}
                      <span className="hljs-string">'antd/dist/antd.css'</span>;
                      React.config.productionTip ={" "}
                      <span className="hljs-literal">false</span>;
                      React.use(Antd);
                      <span className="hljs-comment">
                        {/* eslint-disable no-new */}
                      </span>
                      <span className="hljs-keyword">new</span> React(
                      {<span className="hljs-attr">el</span>}{" "}
                      <span className="hljs-string">'#app'</span>,
                      <span className="hljs-attr">components</span>: {"{App}"},
                      <span className="hljs-attr">template</span>:{" "}
                      <span className="hljs-string">'&lt;App/&gt;'</span>,{"}"}
                      );
                    </code>
                  </pre>
                </section>{" "}
                <p>
                  The above imports Antd entirely. Note that CSS file needs to
                  be imported separately.
                </p>{" "}
                <h6>Only import the components you need</h6>{" "}
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
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
                  </button>{" "}
                  <pre style={{ maxHeight: "500px" }}>
                    <code className="hljs javascript">
                      <span className="hljs-keyword">import</span> antd{" "}
                      <span className="hljs-keyword">from</span>{" "}
                      <span className="hljs-string">'antd'</span>;
                      <span className="hljs-keyword">import</span>{" "}
                      {"{Button, message}"}{" "}
                      <span className="hljs-keyword">from</span>{" "}
                      <span className="hljs-string">'antd'</span>;
                      <span className="hljs-keyword">import</span> App{" "}
                      <span className="hljs-keyword">from</span>{" "}
                      <span className="hljs-string">'./App'</span>;
                    </code>
                  </pre>
                </section>
              </section>{" "}
              <section id="Compatibility" className="mb-24">
                <h2>Compatibility</h2>{" "}
                <p>
                  Ant Design React supports all the modern browsers and IE9+.
                </p>{" "}
                <p>
                  You need to provide{" "}
                  <a href="https://github.com/es-shims/es5-shim">es5-shim</a>{" "}
                  and{" "}
                  <a href="https://github.com/paulmillr/es6-shim">es6-shim</a>{" "}
                  and other polyfills for IE browsers.
                </p>{" "}
                <p>
                  If you are using babel, we strongly recommend using{" "}
                  <a href="https://babeljs.io/docs/usage/polyfill/">
                    babel-polyfill
                  </a>{" "}
                  and{" "}
                  <a href="https://babeljs.io/docs/plugins/transform-runtime/">
                    babel-plugin-transform-runtime
                  </a>{" "}
                  instead of those two shims.
                </p>
              </section>{" "}
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>{" "}
              <p className="text-right font-semibold mb-24">
                Looking for more Ant Design Documentation on getting started?
                Please check the
                <a
                  target="_blank"
                  href="https://ant.design/docs/react/getting-started"
                  rel="noreferrer"
                >
                  official docs
                </a>
                .
              </p>
            </div>{" "}
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
                        <Link
                          href="#Quick-Project-Installation"
                          title="Quick Project Installation"
                        />
                        <Link href="#Direct-Download" title="Direct Download" />
                        <Link href="#Import-antd" title="Import antd" />
                        <Link href="#Compatibility" title="Compatibility" />
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

export default QuickStart;
