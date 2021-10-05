import React from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

function Colors() {
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section id="Colors" className="mb-24">
                <h1>Colors</h1>{" "}
                <p className="text-dark">
                  Convey meaning through color with a handful of color utility
                  classes. Includes support for styling links with hover states,
                  too.
                </p>
              </section>{" "}
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>{" "}
              <section id="Primary-colors" className="mb-24">
                <h2>Primary colors</h2>{" "}
                <p>
                  Our primary palette is comprised of neutrals, white, and blue.
                  These colors are present across most touch points from
                  marketing to product.
                </p>{" "}
                <div className="ant-row" style={{ margin: "-12px" }}>
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-primary"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Primary</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#1890FF</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-primary">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-primary &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-primary</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-primary</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-secondary"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Secondary</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#B37FEB</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-secondary">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.bg-secondary &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.text-secondary</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.fill-secondary</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-success"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Success</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#52C41A</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-success">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.bg-success &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.text-success</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.fill-success</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-warning"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Warning</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#FADB14</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-warning">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.bg-warning &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.text-warning</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.fill-warning</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-dark"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Dark</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#141414</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-dark">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.bg-dark &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.text-dark</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.fill-dark</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-white"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>White</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#FFFFFF</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-white">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.bg-white &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.text-white</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>.fill-white</code>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>{" "}
              <section id="Neutral-colors" className="mb-24">
                <h2>Neutral colors</h2>{" "}
                <p>
                  Light neutrals are helpful for offsetting content in a
                  primarily white layout without losing warmth and cleanliness,
                  and are therefore often used as a background color for web
                  components.
                </p>{" "}
                <div className="ant-row" style={{ margin: "-12px" }}>
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-1"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 1</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#FFFFFF</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-1">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-1 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-1</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-1</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-2"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 2</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#FAFAFA</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-2">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-2 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-2</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-2</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-3"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 3</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#F5F5F5</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-3">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-3 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-3</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-3</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-4"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 4</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#F0F0F0</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-4">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-4 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-4</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-4</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-5"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 5</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#D9D9D9</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-5">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-5 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-5</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-5</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-6"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 6</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#BFBFBF</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-6">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-6 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-6</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-6</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-7"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 7</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#8C8C8C</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-7">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-7 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-7</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-7</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-8"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 8</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#595959</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-8">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-8 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-8</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-8</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-9"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 9</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#434343</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-9">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-9 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-9</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-9</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-10"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 10</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#262626</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-10">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-10 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-10</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-10</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-11"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 11</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#1F1F1F</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-11">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-11 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-11</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-11</code>
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6 ant-col-xl-6"
                    style={{ padding: "12px", width: "25%" }}
                  >
                    <div className="card-color-palette">
                      <div className="color-demo bg-gray-12"></div>{" "}
                      <div className="color-code">
                        <div className="color-name">
                          <small>NAME</small> <h6>Gray 12</h6>
                        </div>{" "}
                        <div className="color-hex">
                          <small>HEX</small> <h6>#141414</h6>
                        </div>
                      </div>{" "}
                      <div className="overlay bg-gray-12">
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>bg-gray-12 &nbsp;</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>text-gray-12</code>
                        </button>{" "}
                        <button
                          type="button"
                          className="btn-copy ant-btn ant-btn-sm"
                        >
                          <i
                            aria-label="icon: copy"
                            className="anticon anticon-copy"
                          >
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
                          <code>fill-gray-12</code>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>{" "}
            <div className="page-anchor">
              <div style={{}}>
                <div className="" style={{}}>
                  <div
                    className="ant-anchor-wrapper"
                    style={{ maxHeight: "calc(100vh - 85px)" }}
                  >
                    <div className="ant-anchor">
                      <Anchor affix={true} offsetTop={85}>
                        <Link href="#Colors" title="Colors" />
                        <Link href="#Primary-colors" title="Primary colors" />
                        <Link href="#Neutral-colors" title="Neutral colors" />
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

export default Colors;
