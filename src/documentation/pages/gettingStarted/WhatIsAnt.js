import React from "react";

import { Anchor } from "antd";
const { Link } = Anchor;

function WhatIsAnt() {
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section id="Introduction" className="mb-24">
                <h1>Ant Design of React</h1>{" "}
                <p className="text-dark">
                  Following the Ant Design specification, we developed a React
                  UI library <code>antd</code> that contains a set of high
                  quality components and demos for building rich, interactive
                  user interfaces.
                </p>
              </section>{" "}
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>{" "}
              <section id="Features" className="mb-24">
                <h2>Features</h2>{" "}
                <ul className="font-semibold credits">
                  <li>
                    An enterprise-className UI design language for web
                    applications.
                  </li>{" "}
                  <li>
                    A set of high-quality React components out of the box.
                  </li>{" "}
                  <li>Shared Ant Design of React design resources.</li>
                </ul>
              </section>{" "}
              <section id="Environment-Support" className="mb-24">
                <h2>Environment Support</h2>{" "}
                <ul className="font-semibold credits">
                  <li>
                    Modern browsers and Internet Explorer 9+ (with{" "}
                    <a href="https://ant.design/docs/react/introduce">
                      polyfills
                    </a>
                    )
                  </li>{" "}
                  <li>Server-side Rendering</li>{" "}
                  <li>
                    <a href="https://electronjs.org/">Electron</a>
                  </li>
                </ul>
              </section>{" "}
              <section className="mb-24">
                <table className="table-ui">
                  <thead>
                    <tr>
                      <th>
                        <a href="http://godban.github.io/browsers-support-badges/">
                          <img
                            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png"
                            alt="IE / Edge"
                            width="24px"
                            height="24px"
                          />
                        </a>
                        IE / Edge
                      </th>{" "}
                      <th>
                        <a href="http://godban.github.io/browsers-support-badges/">
                          <img
                            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png"
                            alt="Firefox"
                            width="24px"
                            height="24px"
                          />
                        </a>
                        Firefox
                      </th>{" "}
                      <th>
                        <a href="http://godban.github.io/browsers-support-badges/">
                          <img
                            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png"
                            alt="Chrome"
                            width="24px"
                            height="24px"
                          />
                        </a>
                        Chrome
                      </th>{" "}
                      <th>
                        <a href="http://godban.github.io/browsers-support-badges/">
                          <img
                            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png"
                            alt="Safari"
                            width="24px"
                            height="24px"
                          />
                        </a>
                        Safari
                      </th>{" "}
                      <th>
                        <a href="http://godban.github.io/browsers-support-badges/">
                          <img
                            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png"
                            alt="Opera"
                            width="24px"
                            height="24px"
                          />
                        </a>
                        Opera
                      </th>{" "}
                      <th>
                        <a href="http://godban.github.io/browsers-support-badges/">
                          <img
                            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png"
                            alt="Electron"
                            width="24px"
                            height="24px"
                          />
                        </a>
                        Electron
                      </th>
                    </tr>
                  </thead>{" "}
                  <tbody>
                    <tr>
                      <td>IE9, IE10, IE11, Edge</td> <td>last 2 versions</td>{" "}
                      <td>last 2 versions</td> <td>last 2 versions</td>{" "}
                      <td>last 2 versions</td> <td>last 2 versions</td>
                    </tr>
                  </tbody>
                </table>
              </section>{" "}
              <section id="Version" className="mb-24">
                <h2>Version</h2>{" "}
                <ul className="font-semibold credits">
                  <li>
                    Stable:{" "}
                    <a href="https://www.npmjs.org/package/ant-design-vue">
                      <img
                        src="https://img.shields.io/npm/v/ant-design-vue.svg?style=flat-square"
                        alt="npm package"
                      />
                    </a>
                  </li>
                </ul>{" "}
                <p>
                  You can subscribe to this feed for new version notifications:
                  https://github.com/vueComponent/antd/releases.atom
                </p>
              </section>{" "}
              <section id="Installation" className="mb-24">
                <h2>Installation</h2> <h3>Using npm or yarn</h3>{" "}
                <p>
                  We recommend using npm or yarn to install，it not only makes
                  development easier，but also allow you to take advantage of
                  the rich ecosystem of Javascript packages and tooling.
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
                    <code className="hljs bash">npm install antd --save</code>
                  </pre>
                </section>{" "}
                <section className="highlight-section mb-24">
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
                    <code className="hljs bash">yarn add antd</code>
                  </pre>
                </section>{" "}
                <p>
                  If you are in a bad network environment，you can try other
                  registries and tools like{" "}
                  <a href="https://github.com/cnpm/cnpm">cnpm</a>.
                </p>
              </section>{" "}
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>{" "}
              <p className="text-right font-semibold mb-24">
                Looking for more Ant Design Documentation on Ant Design of
                React? Please check the
                <a target="_blank" href="https://ant.design/" rel="noreferrer">
                  official docs
                </a>
                .
              </p>
            </div>{" "}
            <div className="page-anchor">
              <div>
                <div className="">
                  <div
                    className="ant-anchor-wrapper"
                    style={{ maxHeight: "calc(100vh - 85px)" }}
                  >
                    <div className="ant-anchor">
                      <Anchor affix={true} offsetTop={85}>
                        <Link
                          href="#Ant-Design-of-React"
                          title="Ant Design of React"
                        />
                        <Link href="#Features" title="Features" />
                        <Link
                          href="#Environment-Support"
                          title="Environment Support"
                        />
                        <Link href="#Installation" title="Installation" />
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

export default WhatIsAnt;
