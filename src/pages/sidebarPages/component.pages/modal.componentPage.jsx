import React, { useState } from "react";
import { Modal, Anchor } from "antd";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";
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

export const ModalComponentPage = () => {
  const [alert, setAlert] = useState(false);

  function info() {
    Modal.info({
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
    Modal.success({
      content: "some messages...some messages...",
    });
  }

  function error() {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  }

  function warning() {
    Modal.warning({
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
                <AlertOnClick state={alert} />
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
                  <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
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
                  {/*<pre style={{ maxHeight: "500px" }}>
                    <code className="hljs html">
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">template</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">div</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">a-button</span> @
                        <span className="hljs-attr">click</span>=
                        <span className="hljs-string">"info"</span>&gt;
                      </span>
                      Info
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">a-button</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">a-button</span> @
                        <span className="hljs-attr">click</span>=
                        <span className="hljs-string">"success"</span>&gt;
                      </span>
                      Success
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">a-button</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">a-button</span> @
                        <span className="hljs-attr">click</span>=
                        <span className="hljs-string">"error"</span>&gt;
                      </span>
                      Error
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">a-button</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">a-button</span> @
                        <span className="hljs-attr">click</span>=
                        <span className="hljs-string">"warning"</span>&gt;
                      </span>
                      Warning
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">a-button</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">div</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">template</span>&gt;
                      </span>
                      <span className="hljs-tag">
                        &lt;<span className="hljs-name">script</span>&gt;
                      </span>
                      <span className="javascript">
                        <span className="hljs-keyword">import</span> some
                        function calles : Modal{" "}
                        <span className="hljs-keyword">from</span>{" "}
                        <span className="hljs-string">'ant-design-React'</span>;
                        <span className="hljs-keyword">export</span>{" "}
                        <span className="hljs-keyword">default</span>
       

  
                      </span>
                      <span className="hljs-tag">
                        &lt;/<span className="hljs-name">script</span>&gt;
                      </span>
                    </code>
                  </pre>*/}
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
};
