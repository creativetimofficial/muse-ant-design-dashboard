import React, { useState } from "react";
import { Modal as AntModal, Anchor, Alert, Button } from "antd";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const { Link } = Anchor;

const code = `
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

ReactDOM.render(<App />, mountNode);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const code2 = `
import { Modal, Button, Space } from 'antd';

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}

ReactDOM.render(
  <Space>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>,
  mountNode,
);`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

function Modal() {
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);

  function info() {
    AntModal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  function success() {
    AntModal.success({
      content: "some messages...some messages...",
    });
  }

  function error() {
    AntModal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  }

  function warning() {
    AntModal.warning({
      title: "This is a warning message",
      content: "some messages...some messages...",
    });
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Modal</h1>
                <p className="text-dark">Modal dialogs.</p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <p>
                  When requiring users to interact with the application, but
                  without jumping to a new page and interrupting the user’s
                  workflow, you can use <code>Modal</code> to create a new
                  floating layer over the current page to get user feedback or
                  display information. Additionally, if you need show a simple
                  confirmation dialog, you can use
                  <code>antd.Modal.confirm()</code>, and so on.
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
                <p>Basic modal.</p>
                <div className="showcase">
                  <button
                    type="button"
                    className="ant-btn ant-btn-primary"
                    onClick={showModal}
                  >
                    <span>Open Modal</span>
                  </button>
                  <AntModal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </AntModal>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={(e) => {
                      navigator.clipboard.writeText(code);
                      setAlert(!alert);
                    }}
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
                  {alert ? (
                    <Alert
                      message="Copied!"
                      type="success"
                      showIcon
                      action={<Button size="small" type="text"></Button>}
                      closable
                      className="alert-copy-code"
                    />
                  ) : (
                    ""
                  )}

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
              <section id="Information-modal-dialog" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">
                    Information modal dialog
                  </span>
                </div>
                <p>
                  In the various types of information modal dialog, only one
                  button to close dialog is provided.
                </p>
                <div className="showcase">
                  <button type="button" className="ant-btn" onClick={info}>
                    <span>Info</span>
                  </button>
                  <button type="button" className="ant-btn" onClick={success}>
                    <span>Success</span>
                  </button>
                  <button type="button" className="ant-btn" onClick={error}>
                    <span>Error</span>
                  </button>
                  <button type="button" className="ant-btn" onClick={warning}>
                    <span>Warning</span>
                  </button>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={(e) => {
                      navigator.clipboard.writeText(code2);
                      setAlert2(!alert2);
                    }}
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
                  {alert2 ? (
                    <Alert
                      message="Copied!"
                      type="success"
                      showIcon
                      action={<Button size="small" type="text"></Button>}
                      closable
                      className="alert-copy-code"
                    />
                  ) : (
                    ""
                  )}
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
                Looking for more Ant Design React Modal? Please check the
                <a
                  target="_blank"
                  href="https://antdv.com/components/modal/"
                  rel="noreferrer"
                >
                  official docs
                </a>
                .
              </p>
            </div>
            <div className="page-anchor">
              <div style={{ width: "300px", height: "90px" }}>
                <div
                  className="ant-affix"
                  style={{
                    position: "fixed",
                    top: "85px",
                    width: "300px",
                    height: "90px",
                  }}
                >
                  <div
                    className="ant-anchor-wrapper"
                    style={{ maxHeight: "calc(100vh - 85px)" }}
                  >
                    <div className="ant-anchor">
                      <div className="ant-anchor-ink"></div>
                      <Anchor affix={true} offsetTop={85}>
                        <Link href="#When-To-Use" title="When To Use" />

                        <Link href="#Basic" title="Basic" />
                        <Link
                          href="#Information-modal-dialog"
                          title="Information modal dialog"
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
}

export default Modal;
