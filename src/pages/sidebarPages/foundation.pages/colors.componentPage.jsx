import React, { useState } from "react";
import { Alert, Anchor, Button } from "antd";

const { Link } = Anchor;

const PrimaryColors = [
  {
    id: "primary",
    title: "Primary Colors",
    colorId: "1890FF",
    codeBg: "bg-primary",
    codeText: "text-primary",
    codeFill: "fill-primary",
  },
  {
    id: "secondary",
    title: "Secondary Colors",
    colorId: "B37FEB",
    codeBg: "bg-secondary",
    codeText: "text-secondary",
    codeFill: "fill-secondary",
  },
  {
    id: "success",
    title: "Success Colors",
    colorId: "52C41A",
    codeBg: "bg-success",
    codeText: "text-success",
    codeFill: "fill-success",
  },
  {
    id: "warning",
    title: "Warning Colors",
    colorId: "FADB14",
    codeBg: "bg-warning",
    codeText: "text-warning",
    codeFill: "fill-warning",
  },
  {
    id: "dark",
    title: "Dark Colors",
    colorId: "141414",
    codeBg: "bg-dark",
    codeText: "text-dark",
    codeFill: "fill-dark",
  },
  {
    id: "white",
    title: "White Colors",
    colorId: "FFFFFF",
    codeBg: "bg-white",
    codeText: "text-white",
    codeFill: "fill-white",
  },
];

const NeutralColors = [
  {
    id: "gray-1",
    title: "Gray 1",
    colorId: "FFFFFF",
    codeBg: "bg-gray-1",
    codeText: "text-gray-1",
    codeFill: "fill-gray-1",
  },
  {
    id: "gray-2",
    title: "Gray 2",
    colorId: "FAFAFA",
    codeBg: "bg-gray-2",
    codeText: "text-gray-2",
    codeFill: "fill-gray-2",
  },
  {
    id: "gray-3",
    title: "Gray 3",
    colorId: "F5F5F5",
    codeBg: "bg-gray-3",
    codeText: "text-gray-3",
    codeFill: "fill-gray-3",
  },
  {
    id: "gray-4",
    title: "Gray 4 ",
    colorId: "F0F0F0",
    codeBg: "bg-gray-4",
    codeText: "text-gray-4",
    codeFill: "fill-gray-4",
  },
  {
    id: "gray-5",
    title: "Gray 5",
    colorId: "D9D9D9",
    codeBg: "bg-gray-5",
    codeText: "text-gray-5",
    codeFill: "fill-gray-5",
  },
  {
    id: "gray-6",
    title: "Gray 6 ",
    colorId: "BFBFBF",
    codeBg: "bg-gray-6",
    codeText: "text-gray-6",
    codeFill: "fill-gray-6",
  },
  {
    id: "gray-7",
    title: "Gray 7 ",
    colorId: "8C8C8C",
    codeBg: "bg-gray-7",
    codeText: "text-gray-7",
    codeFill: "fill-gray-7",
  },
  {
    id: "gray-8",
    title: "Gray 8",
    colorId: "595959",
    codeBg: "bg-gray-8",
    codeText: "text-gray-8",
    codeFill: "fill-gray-8",
  },
  {
    id: "gray-9",
    title: "Gray 9",
    colorId: "434343",
    codeBg: "bg-gray-9",
    codeText: "text-gray-9",
    codeFill: "fill-gray-9",
  },
  {
    id: "gray-10",
    title: "Gray 10",
    colorId: "262626",
    codeBg: "bg-gray-10",
    codeText: "text-gray-10",
    codeFill: "fill-gray-10",
  },
  {
    id: "gray-11",
    title: "Gray 11",
    colorId: "1F1F1F",
    codeBg: "bg-gray-11",
    codeText: "text-gray-11",
    codeFill: "fill-gray-11",
  },
  {
    id: "gray-12",
    title: "Gray 12",
    colorId: "141414",
    codeBg: "bg-gray-12",
    codeText: "text-gray-12",
    codeFill: "fill-gray-12",
  },
];

export const ColorsComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section id="Colors" className="mb-24">
                {alert ? (
                  <Alert
                    message="Copied!"
                    type="success"
                    showIcon
                    action={<Button size="small" type="text"></Button>}
                    closable
                    className="alert-copy-code alert-copy-code-color-page"
                  />
                ) : (
                  " "
                )}
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
                  {PrimaryColors.map((props) => {
                    return (
                      <div
                        className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                        style={{ padding: "12px", width: "25%" }}
                      >
                        <div className="card-color-palette">
                          <div className={`color-demo ${props.codeBg}`}></div>{" "}
                          <div className="color-code">
                            <div className="color-name">
                              <small>NAME</small> <h6>{props.title}</h6>
                            </div>{" "}
                            <div className="color-hex">
                              <small>HEX</small> <h6>#{props.colorId}</h6>
                            </div>
                          </div>{" "}
                          <div className={`overlay ${props.codeBg}`}>
                            <button
                              type="button"
                              className="btn-copy ant-btn ant-btn-sm"
                              onClick={() => {
                                navigator.clipboard.writeText(props.codeBg);
                                setAlert(!alert);

                                setTimeout(() => {
                                  setAlert(false);
                                }, 2000);
                              }}
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
                              <code>{props.codeBg} &nbsp;</code>
                            </button>{" "}
                            <button
                              type="button"
                              className="btn-copy ant-btn ant-btn-sm"
                              onClick={() => {
                                navigator.clipboard.writeText(props.codeText);
                                setAlert(!alert);

                                setTimeout(() => {
                                  setAlert(false);
                                }, 2000);
                              }}
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
                              <code>{props.codeText} </code>
                            </button>{" "}
                            <button
                              type="button"
                              className="btn-copy ant-btn ant-btn-sm"
                              onClick={() => {
                                navigator.clipboard.writeText(props.codeFill);
                                setAlert(!alert);

                                setTimeout(() => {
                                  setAlert(false);
                                }, 2000);
                              }}
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
                              <code>{props.codeFill}</code>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}{" "}
                </div>
              </section>{" "}
              <br />
              <section id="Neutral-colors" className="mb-24">
                <h2>Neutral colors</h2>{" "}
                <p>
                  Light neutrals are helpful for offsetting content in a
                  primarily white layout without losing warmth and cleanliness,
                  and are therefore often used as a background color for web
                  components.
                </p>{" "}
                <div className="ant-row" style={{ margin: "-12px" }}>
                  {NeutralColors.map((props) => {
                    return (
                      <div
                        className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                        style={{ padding: "12px", width: "25%" }}
                      >
                        <div className="card-color-palette">
                          <div className={`color-demo ${props.codeBg}`}></div>{" "}
                          <div className="color-code">
                            <div className="color-name">
                              <small>NAME</small> <h6>{props.title}</h6>
                            </div>{" "}
                            <div className="color-hex">
                              <small>HEX</small> <h6>#{props.colorId}</h6>
                            </div>
                          </div>{" "}
                          <div className={`overlay ${props.codeBg}`}>
                            <button
                              type="button"
                              className="btn-copy ant-btn ant-btn-sm"
                              onClick={() => {
                                navigator.clipboard.writeText(props.codeBg);
                                setAlert(!alert);

                                setTimeout(() => {
                                  setAlert(false);
                                }, 2000);
                              }}
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
                              <code>{props.codeBg} &nbsp;</code>
                            </button>{" "}
                            <button
                              type="button"
                              className="btn-copy ant-btn ant-btn-sm"
                              onClick={() => {
                                navigator.clipboard.writeText(props.codeText);
                                setAlert(!alert);

                                setTimeout(() => {
                                  setAlert(false);
                                }, 2000);
                              }}
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
                              <code>{props.codeText} </code>
                            </button>{" "}
                            <button
                              type="button"
                              className="btn-copy ant-btn ant-btn-sm"
                              onClick={() => {
                                navigator.clipboard.writeText(props.codeFill);
                                setAlert(!alert);

                                setTimeout(() => {
                                  setAlert(false);
                                }, 2000);
                              }}
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
                              <code>{props.codeFill}</code>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}{" "}
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
};
