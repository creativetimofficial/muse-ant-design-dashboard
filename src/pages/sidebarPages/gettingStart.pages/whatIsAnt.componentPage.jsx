import React, { useState } from "react";

import { Anchor } from "antd";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";
const { Link } = Anchor;

export const WhatIsAntComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section id="Introduction" className="mb-24">
                <AlertOnClick state={alert} />
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
                  <CopyClipboard
                    text={`npm install antd --save`}
                    state={alert}
                    setState={setAlert}
                  />
                  <pre style={{ maxHeight: "500px" }}>
                    <code className="hljs bash">npm install antd --save</code>
                  </pre>
                </section>{" "}
                <section className="highlight-section mb-24">
                  <CopyClipboard
                    text={`yarn add antd`}
                    state={alert}
                    setState={setAlert}
                  />
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
};
