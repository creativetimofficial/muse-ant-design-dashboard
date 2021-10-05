import { Button as AntButton, Anchor, Alert } from "antd";
import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const { Link } = Anchor;

const code1 = `
import { Button } from 'antd';

ReactDOM.render(
  <>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </>,
  mountNode,
);`;
const markdown1 = `

~~~jsx
${code1}
~~~
`;

const code2 = `
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
    <br />
    <br />
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button type="primary" shape="circle" size="large">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />} size="large">
      Search
    </Button>
  </>,
  mountNode,
);`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

const code3 = `
import { Button } from 'antd';

ReactDOM.render(
  <div className="site-button-ghost-wrapper">
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="primary" danger ghost>
      Danger
    </Button>
  </div>,
  mountNode,
);`;
const markdown3 = `

~~~jsx
${code3}
~~~
`;

const code4 = `
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
      </>
    );
  }
}

ReactDOM.render(<ButtonSize />, mountNode);`;
const markdown4 = `

~~~jsx
${code4}
~~~
`;
const code5 = `
import { Button } from 'antd';

ReactDOM.render(
  <>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </>,
  mountNode,
);`;
const markdown5 = `

~~~jsx
${code5}
~~~
`;
const code6 = `
import { Button } from 'antd';

ReactDOM.render(
  <>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <br />
    <Button type="text">Text</Button>
    <Button type="text" disabled>
      Text(disabled)
    </Button>
    <br />
    <Button type="link">Link</Button>
    <Button type="link" disabled>
      Link(disabled)
    </Button>
    <br />
    <Button danger>Danger Default</Button>
    <Button danger disabled>
      Danger Default(disabled)
    </Button>
    <br />
    <Button danger type="text">
      Danger Text
    </Button>
    <Button danger type="text" disabled>
      Danger Text(disabled)
    </Button>
    <br />
    <Button type="link" danger>
      Danger Link
    </Button>
    <Button type="link" danger disabled>
      Danger Link(disabled)
    </Button>
    <div className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </>,
  mountNode,
);
.site-button-ghost-wrapper {
  padding: 8px 8px 0 8px;
  background: rgb(190, 200, 200);
}`;
const markdown6 = `

~~~jsx
${code6}
~~~
`;

const codeInstall = `import {Button} from "antd"`;

const markdowCodeInstall = `

~~~jsx
${codeInstall}
~~~
`;

function Button() {
  const [size, setSize] = useState("");
  const [groupSize, setGroupSize] = useState("");

  const [iconBorderSmall, setIconBorderSmall] = useState("");
  const [iconBorderDefault, setIconBorderDefault] = useState("");
  const [iconBorderLarge, setIconBorderLarge] = useState("");

  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alert3, setAlert3] = useState(false);
  const [alert4, setAlert4] = useState(false);
  const [alert5, setAlert5] = useState(false);
  const [alert6, setAlert6] = useState(false);
  const [alert1, setAlert1] = useState(false);

  const onClickSize = (style) => setSize(style);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <h1>Button</h1>
                <p className="text-dark">To trigger an operation.</p>
              </section>
              <section id="when-to-use" className="mb-24">
                <h2>When To Use</h2>
                <p>
                  A button means an operation (or a series of operations).
                  Clicking a button will trigger corresponding business logic.
                </p>
              </section>
              <section id="Component-Registration" className="mb-24">
                <h2>Component Registration</h2>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={() => {
                      navigator.clipboard.writeText(codeInstall);
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
                    children={markdowCodeInstall}
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
              <h2>Examples</h2>
              <section id="Type" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Type</span>
                </div>
                <p>
                  There are <code>primary</code> button, <code>default</code>{" "}
                  button,
                  <code>dashed</code> button , <code>text</code> button and
                  <code>link</code> button in antd.
                </p>
                <div className="showcase pb-10">
                  <AntButton type="primary" danger>
                    Primary
                  </AntButton>
                  <AntButton danger>Default</AntButton>
                  <AntButton type="dashed" danger>
                    Dashed
                  </AntButton>
                  <AntButton type="text" danger>
                    Text
                  </AntButton>
                  <AntButton type="link" danger>
                    Link
                  </AntButton>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={(e) => {
                      navigator.clipboard.writeText(code1);
                      setAlert1(!alert1);
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
                  {alert1 ? (
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
                    children={markdown1}
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
              <section id="Icon" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Icon</span>
                </div>
                <p>
                  Button components can contain an Icon. This is done by setting
                  the
                  <code>icon</code> property or placing an Icon component within
                  the Button If you want specific control over the positioning
                  and placement of the Icon, then that should be done by placing
                  the Icon component within the Button rather than using the
                  icon property.
                </p>
                <div className="showcase">
                  <button
                    type="button"
                    className="
                mb-10
                mr-10
                ant-btn ant-btn-primary ant-btn-circle ant-btn-icon-only
              "
                  >
                    <i
                      aria-label="icon: search"
                      className="anticon anticon-search"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="search"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </i>
                  </button>
                  <button
                    type="button"
                    className="mb-10 mr-10 ant-btn ant-btn-primary ant-btn-circle"
                  >
                    <span>A</span>
                  </button>
                  <button
                    type="button"
                    className="mb-10 mr-10 ant-btn ant-btn-primary"
                  >
                    <i
                      aria-label="icon: search"
                      className="anticon anticon-search"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="search"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </i>
                    <span>Search</span>
                  </button>
                  <button
                    type="button"
                    className="mb-10 mr-10 ant-btn ant-btn-circle ant-btn-icon-only"
                  >
                    <i
                      aria-label="icon: search"
                      className="anticon anticon-search"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="search"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </i>
                  </button>
                  <button
                    type="button"
                    className="ant-btn"
                    style={{ marginRight: "1%" }}
                  >
                    <i
                      aria-label="icon: search"
                      className="anticon anticon-search"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="search"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </i>
                    <span>Search</span>
                  </button>
                  <button
                    type="button"
                    className="mb-10 mr-10 ant-btn ant-btn-circle ant-btn-icon-only"
                  >
                    <i
                      aria-label="icon: search"
                      className="anticon anticon-search"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="search"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </i>
                  </button>
                  <button type="button" className="mb-10 mr-10 ant-btn">
                    <i
                      aria-label="icon: search"
                      className="anticon anticon-search"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="search"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </i>
                    <span>Search</span>
                  </button>
                  <button
                    type="button"
                    className="
                mb-10
                mr-10
                ant-btn ant-btn-dashed ant-btn-circle ant-btn-icon-only
              "
                  >
                    <i
                      aria-label="icon: search"
                      className="anticon anticon-search"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="search"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </i>
                  </button>
                  <button
                    type="button"
                    className="mb-10 mr-10 ant-btn ant-btn-dashed"
                  >
                    <i
                      aria-label="icon: search"
                      className="anticon anticon-search"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="search"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                      </svg>
                    </i>
                    <span>Search</span>
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
              <section id="Ghost-Button" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Ghost Button</span>
                </div>
                <p>
                  <code>ghost</code> property will make button's background
                  transparent, it is common used in colored background.
                </p>
                <div className="showcase bg-gray-6">
                  <div className="site-button-ghost-wrapper">
                    <AntButton type="primary" ghost>
                      Primary
                    </AntButton>
                    <AntButton ghost>Default</AntButton>
                    <AntButton type="dashed" ghost>
                      Dashed
                    </AntButton>
                    <AntButton type="primary" danger ghost>
                      Danger
                    </AntButton>
                  </div>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={(e) => {
                      navigator.clipboard.writeText(code3);
                      setAlert3(!alert3);
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
                  {alert3 ? (
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
                    children={markdown3}
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
              <section id="Size" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Size</span>
                </div>
                <p>
                  Ant Design supports a default button size as well as a large
                  and small size. If a large or small button is desired, set the
                  <code>size</code> property to either <code>large</code> or
                  <code>small</code> respectively. Omit the size property for a
                  button with the default size.
                </p>
                <div className="showcase pb-10">
                  <div
                    className="
                mr-10
                mb-10
                ant-radio-group ant-radio-group-outline ant-radio-group-default
              "
                  >
                    <label
                      className={`ant-radio-button-wrapper ${iconBorderLarge}`}
                      onClick={() => {
                        onClickSize("ant-btn-lg");
                        setGroupSize("ant-btn-group-lg");
                        setIconBorderLarge("ant-radio-button-wrapper-checked");
                        setIconBorderDefault("");
                        setIconBorderSmall("");
                      }}
                    >
                      <span className="ant-radio-button">
                        <input
                          type="radio"
                          className="ant-radio-button-input"
                          value="large"
                        />
                        <span className="ant-radio-button-inner"></span>
                      </span>
                      <span> Large </span>
                    </label>
                    <label
                      className={`ant-radio-button-wrapper ${iconBorderDefault}`}
                      onClick={() => {
                        onClickSize("");
                        setGroupSize("");
                        setIconBorderDefault(
                          "ant-radio-button-wrapper-checked",
                        );
                        setIconBorderLarge("");
                        setIconBorderSmall("");
                      }}
                    >
                      <span className="ant-radio-button ant-radio-button-checked">
                        <input
                          type="radio"
                          className="ant-radio-button-input"
                          value="default"
                        />
                        <span className="ant-radio-button-inner"></span>
                      </span>
                      <span> Default </span>
                    </label>
                    <label
                      className={`ant-radio-button-wrapper ${iconBorderSmall}`}
                      onClick={() => {
                        onClickSize("ant-btn-sm");
                        setGroupSize("ant-btn-group-sm");
                        setIconBorderSmall("ant-radio-button-wrapper-checked");
                        setIconBorderDefault("");
                        setIconBorderLarge("");
                      }}
                    >
                      <span className="ant-radio-button">
                        <input
                          type="radio"
                          className="ant-radio-button-input"
                          value="small"
                        />
                        <span className="ant-radio-button-inner"></span>
                      </span>
                      <span> Small </span>
                    </label>
                  </div>
                  <br />
                  <br />
                  <button
                    type="button"
                    className={`mr-10 mb-10 ant-btn ant-btn-primary ${size}`}
                  >
                    <span>Primary</span>
                  </button>
                  <button
                    type="button"
                    className={`mr-10 mb-10 ant-btn ${size}`}
                  >
                    <span>Normal</span>
                  </button>
                  <button
                    type="button"
                    className={`mr-10 mb-10 ant-btn ant-btn-dashed ${size}`}
                  >
                    <span>Dashed</span>
                  </button>
                  <button
                    type="button"
                    className={`mr-10 mb-10 ant-btn ant-btn-danger ${size}`}
                  >
                    <span>Danger</span>
                  </button>
                  <button
                    type="button"
                    className={`mr-10 mb-10 ant-btn ant-btn-link ${size}`}
                  >
                    <span>Link</span>
                  </button>
                  <br />
                  <button
                    type="button"
                    className={`mr-10 mb-10 ant-btn ant-btn-primary ant-btn-icon-only ${size}`}
                  >
                    <i
                      aria-label="icon: download"
                      className="anticon anticon-download"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="download"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </i>
                  </button>
                  <button
                    type="button"
                    className={`
                mr-10
                mb-10
                ant-btn ant-btn-primary ant-btn-circle ant-btn-icon-only ${size}
              `}
                  >
                    <i
                      aria-label="icon: download"
                      className="anticon anticon-download"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="download"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </i>
                  </button>
                  <button
                    type="button"
                    className={`mr-10 mb-10 ant-btn ant-btn-primary ant-btn-round ${size}`}
                  >
                    <i
                      aria-label="icon: download"
                      className="anticon anticon-download"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="download"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </i>
                    <span>Download</span>
                  </button>
                  <button
                    type="button"
                    className={`
                mr-10
                mb-10
                ant-btn ant-btn-primary ant-btn-round ant-btn-icon-only ${size}
              `}
                  >
                    <i
                      aria-label="icon: download"
                      className="anticon anticon-download"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="download"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </i>
                  </button>
                  <button
                    type="button"
                    className={`mr-10 mb-10 ant-btn ant-btn-primary ${size}`}
                  >
                    <i
                      aria-label="icon: download"
                      className="anticon anticon-download"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        data-icon="download"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                      >
                        <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </i>
                    <span>Download</span>
                  </button>
                  <br />
                  <div className={`mr-10 mb-10 ant-btn-group ${groupSize}`}>
                    <button type="button" className="ant-btn ant-btn-primary">
                      <i
                        aria-label="icon: left"
                        className="anticon anticon-left"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          data-icon="left"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          className=""
                        >
                          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                        </svg>
                      </i>
                      <span>Backward</span>
                    </button>
                    <button type="button" className="ant-btn ant-btn-primary">
                      <span>Forward</span>
                      <i
                        aria-label="icon: right"
                        className="anticon anticon-right"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          data-icon="right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          className=""
                        >
                          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                        </svg>
                      </i>
                    </button>
                  </div>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={(e) => {
                      navigator.clipboard.writeText(code4);
                      setAlert4(!alert4);
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
                  {alert4 ? (
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
                    children={markdown4}
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
              <section id="Block" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Block</span>
                </div>
                <p>
                  Button components can contain an Icon. This is done by setting
                  the
                  <code>icon</code> property or placing an Icon component within
                  the Button If you want specific control over the positioning
                  and placement of the Icon, then that should be done by placing
                  the Icon component within the Button rather than using the
                  icon property.
                </p>
                <div className="showcase">
                  <AntButton type="primary" block>
                    Primary
                  </AntButton>
                  <AntButton block>Default</AntButton>
                  <AntButton type="dashed" block>
                    Dashed
                  </AntButton>
                  <AntButton type="link" block>
                    Link
                  </AntButton>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={(e) => {
                      navigator.clipboard.writeText(code5);
                      setAlert5(!alert5);
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
                  {alert5 ? (
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
                    children={markdown5}
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
              <section id="Disabled" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Disabled</span>
                </div>
                <p>
                  To mark a button as disabled, add the <code>disabled</code>{" "}
                  property to the Button.
                </p>
                <div className="showcase">
                  <button
                    type="button"
                    className="mr-10 mb-10 ant-btn ant-btn-primary"
                  >
                    <span>Primary</span>
                  </button>
                  <button
                    disabled="disabled"
                    type="button"
                    className="mr-10 mb-10 ant-btn ant-btn-primary"
                  >
                    <span>Primary(disabled)</span>
                  </button>
                  <br />
                  <button type="button" className="mr-10 mb-10 ant-btn">
                    <span>Default</span>
                  </button>
                  <button
                    disabled="disabled"
                    type="button"
                    className="mr-10 mb-10 ant-btn"
                  >
                    <span>Default(disabled)</span>
                  </button>
                  <br />
                  <button
                    type="button"
                    className="mr-10 mb-10 ant-btn ant-btn-dashed"
                  >
                    <span>Dashed</span>
                  </button>
                  <button
                    disabled="disabled"
                    type="button"
                    className="mr-10 mb-10 ant-btn ant-btn-dashed"
                  >
                    <span>Dashed(disabled)</span>
                  </button>
                  <br />
                  <button
                    type="button"
                    className="mr-10 mb-10 ant-btn ant-btn-link"
                  >
                    <span>Link</span>
                  </button>
                  <button
                    disabled="disabled"
                    type="button"
                    className="mr-10 mb-10 ant-btn ant-btn-link"
                  >
                    <span>Link(disabled)</span>
                  </button>
                  <div
                    style={{
                      padding: "8px 8px 0px",
                      background: "rgb(190, 200, 200)",
                    }}
                  >
                    <button
                      type="button"
                      className="mr-10 mb-10 ant-btn ant-btn-background-ghost"
                    >
                      <span>Ghost</span>
                    </button>
                    <button
                      disabled="disabled"
                      type="button"
                      className="mr-10 mb-10 ant-btn ant-btn-background-ghost"
                    >
                      <span>Ghost(disabled)</span>
                    </button>
                  </div>
                </div>
                <section className="highlight-section">
                  <button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={(e) => {
                      navigator.clipboard.writeText(code6);
                      setAlert6(!alert6);
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
                  {alert6 ? (
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
                    children={markdown6}
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
                Looking for more Ant Design React Button? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/button/"
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
                      <div className="ant-anchor-ink">
                        <span
                          className="ant-anchor-ink-ball"
                          style={{ top: "10.5px" }}
                        ></span>
                      </div>
                      <Anchor affix={true} offsetTop={85}>
                        <Link href="#When-To-Use" title="When To Use" />

                        <Link
                          href="#Component-Registration"
                          title="Component Registration"
                        />
                        <Link href="#Type" title="Type" />
                        <Link href="#Icon" title="Icon" />
                        <Link href="#Ghost-Button" title="Ghost Button" />
                        <Link href="#Size" title="Size" />
                        <Link href="#Block" title="Block" />
                        <Link href="#Disabled" title="Disabled" />
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

export default Button;
