import React, { useState } from "react";

import { Card, Avatar, Anchor } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";
const { Link } = Anchor;
const { Meta } = Card;

const code = `
import { Card } from 'antd';

ReactDOM.render(
  <div className="site-card-border-less-wrapper">
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>,
  mountNode,
);
.site-card-border-less-wrapper {
  padding: 30px;
  background: #ececec;
} `;

const markdown = `

~~~jsx
${code}
~~~
`;

const code2 = `
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

ReactDOM.render(
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>,
  mountNode,
); `;

const markdown2 = `

~~~jsx
${code2}
~~~
`;

export const CardComponentPage = () => {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
                <h1>Card</h1>
                <p className="text-dark">Simple rectangular container.</p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <p>
                  A card can be used to display content related to a single
                  subject. The content can consist of multiple elements of
                  varying types and sizes.
                </p>
              </section>
              <h2>Examples</h2>
              <section id="Widget-Card" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Widget Card</span>
                </div>
                <div className="showcase pb-0">
                  <div className="site-card-border-less-wrapper">
                    <Card
                      title="Card title"
                      bordered={false}
                      style={{ width: 300 }}
                    >
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </Card>
                  </div>
                  ,
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
              <section id="Information-Card" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">
                    Information Card
                  </span>
                </div>
                <div className="showcase pb-0">
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[
                      <SettingOutlined key="setting" />,
                      <EditOutlined key="edit" />,
                      <EllipsisOutlined key="ellipsis" />,
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
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
              {/*<section id="Project-Card" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Project Card</span>
                </div>
                <div className="showcase">
                  <div
                    className="ant-row-flex ant-row-flex-stretch"
                    style={{ margin: "-12px" }}
                  >
                    <div
                      className="ant-col ant-col-24 ant-col-md-12"
                      style={{ padding: "12px" }}
                    >
                      <div className="card-project ant-card ant-card-bordered">
                        <div className="ant-card-cover">
                          <img alt="example" src={Image2} />
                        </div>
                        <div className="ant-card-body">
                          <div className="card-tag">Project #1</div>
                          <h5>Modern</h5>
                          <p>
                            As Uber works through a huge amount of internal
                            management turmoil.
                          </p>
                          <div
                            className="card-footer ant-row-flex ant-row-flex-middle"
                            style={{ marginLeft: "-3px", marginRight: "-3px" }}
                          >
                            <div
                              className="ant-col ant-col-12"
                              style={{
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <button
                                type="button"
                                className="ant-btn ant-btn-sm"
                              >
                                <span>VIEW PROJECT</span>
                              </button>
                            </div>
                            <div
                              className="text-right ant-col ant-col-12"
                              style={{
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <div
                                className="
                            avatar-chips
                            ant-space
                            ant-space-horizontal
                            ant-space-align-center
                          "
                              >
                                <div
                                  className="ant-space-item"
                                  style={{ marginRight: "-12px" }}
                                >
                                  <span
                                    className="
                                ant-avatar
                                ant-avatar-sm
                                ant-avatar-circle
                                ant-avatar-image
                              "
                                  >
                                    <img src={face1} />
                                  </span>
                                </div>
                                <div
                                  className="ant-space-item"
                                  style={{ marginRight: "-12px" }}
                                >
                                  <span
                                    className="
                                ant-avatar
                                ant-avatar-sm
                                ant-avatar-circle
                                ant-avatar-image
                              "
                                  >
                                    <img src={face4} />
                                  </span>
                                </div>
                                <div
                                  className="ant-space-item"
                                  style={{ marginRight: "-12px" }}
                                >
                                  <span
                                    className="
                                ant-avatar
                                ant-avatar-sm
                                ant-avatar-circle
                                ant-avatar-image
                              "
                                  >
                                    <img src={face2} />
                                  </span>
                                </div>
                                <div className="ant-space-item">
                                  <span
                                    className="
                                ant-avatar
                                ant-avatar-sm
                                ant-avatar-circle
                                ant-avatar-image
                              "
                                  >
                                    <img src={face3} />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="ant-col ant-col-24 ant-col-md-12"
                      style={{ padding: "12px" }}
                    >
                      <div className="card-project ant-card ant-card-bordered">
                        <div className="ant-card-cover">
                          <img alt="example" src={Image3} />
                        </div>
                        <div className="ant-card-body">
                          <div className="card-tag">Project #2</div>
                          <h5>Scandinavian</h5>
                          <p>
                            Music is something that every person has his or her
                            own specific opinion about.
                          </p>
                          <div
                            className="card-footer ant-row-flex ant-row-flex-middle"
                            style={{ marginLeft: "-3px", marginRight: "-3px" }}
                          >
                            <div
                              className="ant-col ant-col-12"
                              style={{
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <button
                                type="button"
                                className="ant-btn ant-btn-sm"
                              >
                                <span>VIEW PROJECT</span>
                              </button>
                            </div>
                            <div
                              className="text-right ant-col ant-col-12"
                              style={{
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <div
                                className="
                            avatar-chips
                            ant-space
                            ant-space-horizontal
                            ant-space-align-center
                          "
                              >
                                <div
                                  className="ant-space-item"
                                  style={{ marginRight: "-12px" }}
                                >
                                  <span
                                    className="
                                ant-avatar
                                ant-avatar-sm
                                ant-avatar-circle
                                ant-avatar-image
                              "
                                  >
                                    <img src={face1} />
                                  </span>
                                </div>
                                <div
                                  className="ant-space-item"
                                  style={{ marginRight: "-12px" }}
                                >
                                  <span
                                    className="
                                ant-avatar
                                ant-avatar-sm
                                ant-avatar-circle
                                ant-avatar-image
                              "
                                  >
                                    <img src={face4} />
                                  </span>
                                </div>
                                <div
                                  className="ant-space-item"
                                  style={{ marginRight: "-12px" }}
                                >
                                  <span
                                    className="
                                ant-avatar
                                ant-avatar-sm
                                ant-avatar-circle
                                ant-avatar-image
                              "
                                  >
                                    <img src={face2} />
                                  </span>
                                </div>
                                <div className="ant-space-item">
                                  <span
                                    className="
                                ant-avatar
                                ant-avatar-sm
                                ant-avatar-circle
                                ant-avatar-image
                              "
                                  >
                                    <img src={face3} />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  </button>
                </section>
              </section>
              <section id="Widget-Card-2" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Widget Card 2</span>
                </div>
                <div className="showcase pb-0">
                  <div
                    className="ant-row"
                    style={{ marginLeft: "-12px", marginRight: "-12px" }}
                  >
                    <div
                      className="mb-24 ant-col ant-col-12 ant-col-lg-8 ant-col-xl-6"
                      style={{ paddingLeft: "12px", paddingRight: "12px" }}
                    >
                      <div className="widget-2 h-full ant-card">
                        <div className="ant-card-body">
                          <div className="ant-statistic">
                            <div className="ant-statistic-title">
                              <div className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                >
                                  <g id="bank" transform="translate(0.75 0.75)">
                                    <path
                                      id="Shape"
                                      transform="translate(0.707 9.543)"
                                      fill="none"
                                      stroke="#fff"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-miterlimit="10"
                                      stroke-width="1.5"
                                    ></path>
                                    <path
                                      id="Path"
                                      d="M10.25,0,20.5,9.19H0Z"
                                      fill="none"
                                      stroke="#fff"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-miterlimit="10"
                                      stroke-width="1.5"
                                    ></path>
                                    <path
                                      id="Path-2"
                                      data-name="Path"
                                      d="M0,.707H20.5"
                                      transform="translate(0 19.793)"
                                      fill="none"
                                      stroke="#fff"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-miterlimit="10"
                                      stroke-width="1.5"
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              <h6>Salary</h6>
                              <p>Belong Interactive</p>
                            </div>
                            <div className="ant-statistic-content">
                              <span className="ant-statistic-content-prefix">
                                +$
                              </span>
                              <span className="ant-statistic-content-value">
                                <span className="ant-statistic-content-value-int">
                                  2,000
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mb-24 ant-col ant-col-12 ant-col-lg-8 ant-col-xl-6"
                      style={{ paddingLeft: "12px", paddingRight: "12px" }}
                    >
                      <div className="widget-2 h-full ant-card">
                        <div className="ant-card-body">
                          <div className="ant-statistic">
                            <div className="ant-statistic-title">
                              <div className="icon">
                                <img
                                  src="https://muse-docs.arsaland.com/images/logos/paypal-logo-2.png"
                                  alt=""
                                />
                              </div>
                              <h6>Paypal</h6>
                              <p>Freelance Payment</p>
                            </div>
                            <div className="ant-statistic-content">
                              <span className="ant-statistic-content-prefix">
                                +$
                              </span>
                              <span className="ant-statistic-content-value">
                                <span className="ant-statistic-content-value-int">
                                  49,000
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  </button>
                </section>
              </section>
              <section id="Credit-Card" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Credit Card</span>
                </div>
                <div className="showcase">
                  <div className="ant-row">
                    <div className="ant-col ant-col-24 ant-col-lg-12">
                      <div
                        className="
                    card-credit
                    header-solid
                    h-full
                    ant-card ant-card-bordered
                  "
                      >
                        <div className="ant-card-head">
                          <div className="ant-card-head-wrapper">
                            <div className="ant-card-head-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 22.5 20.625"
                              >
                                <g id="wifi" transform="translate(0.75 0.75)">
                                  <circle
                                    id="Oval"
                                    cx="1.5"
                                    cy="1.5"
                                    r="1.5"
                                    transform="translate(9 16.875)"
                                    fill="#fff"
                                  ></circle>
                                  <path
                                    id="Path"
                                    d="M0,1.36a6.377,6.377,0,0,1,7.5,0"
                                    transform="translate(6.75 11.86)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="1.5"
                                  ></path>
                                  <path
                                    id="Path-2"
                                    data-name="Path"
                                    d="M14.138,2.216A12.381,12.381,0,0,0,0,2.216"
                                    transform="translate(3.431 6)"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="1.5"
                                  ></path>
                                  <path
                                    id="Path-3"
                                    data-name="Path"
                                    d="M0,3.294a18.384,18.384,0,0,1,21,0"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-miterlimit="10"
                                    stroke-width="1.5"
                                  ></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="ant-card-body">
                          <h5 className="card-number">4562 1122 4594 7852</h5>
                          <div className="card-footer">
                            <div className="mr-30">
                              <p>Card Holder</p>
                              <h6>Jack Peterson</h6>
                            </div>
                            <div className="mr-30">
                              <p>Expires</p>
                              <h6>11/22</h6>
                            </div>
                            <div className="card-footer-col col-logo ml-auto">
                              <img src="https://muse-docs.arsaland.com/images/logos/mastercard-logo.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  </button>
                </section>
              </section>*/}
              <p className="text-right font-semibold mb-24">
                Looking for more Ant Design React Card? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/card/"
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

                        <Link href="#Widget-Card" title="Widget Card" />
                        <Link
                          href="#Information-Card"
                          title="Information Card"
                        />
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
