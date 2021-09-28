import React from "react";
import { Anchor } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const { Link } = Anchor;

export const TypographyComponentPage = () => {
  return (
    <div>
      <div className="page-row page-component-padding">
        <div className="page-content">
          <section className="mb-24">
            <h1>Typography</h1>{" "}
            <p className="text-dark">
              Documentation and examples for Muse Dashboard typography.
            </p>
          </section>{" "}
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>{" "}
          <section id="Headings" className="mb-24">
            <h2>Headings</h2>{" "}
            <p>
              All HTML headings, <code>&lt;h1&gt;</code> through{" "}
              <code>&lt;h6&gt;</code> are available.
            </p>
          </section>{" "}
          <section className="mb-24">
            <div
              role="separator"
              className="ant-divider ant-divider-horizontal ant-divider-with-text-left"
            >
              <span className="ant-divider-inner-text">Regular</span>
            </div>{" "}
            <table>
              <thead>
                <tr>
                  <th className="table-th ">Heading</th>{" "}
                  <th className="table-th ">Example</th>
                </tr>
              </thead>{" "}
              <tbody>
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h1&gt;&lt;/h1&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <Title>h1. Ant Design</Title>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h2&gt;&lt;/h2&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h2 font-regular">
                      {" "}
                      <Title level={2}>h2. Ant Design</Title>
                    </span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h3&gt;&lt;/h3&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h3 font-regular">
                      {" "}
                      <Title level={3}>h3. Ant Design</Title>
                    </span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h4&gt;&lt;/h4&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h4 font-regular">
                      <Title level={4}>h4. Ant Design</Title>
                    </span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h5&gt;&lt;/h5&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h5 font-regular">
                      {" "}
                      <Title level={5}>h5. Ant Design</Title>
                    </span>
                  </td>
                </tr>{" "}
              </tbody>
            </table>{" "}
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
              {/* code write here */}
            </section>
          </section>{" "}
          <section className="mb-24">
            <div
              role="separator"
              className="ant-divider ant-divider-horizontal ant-divider-with-text-left"
            >
              <span className="ant-divider-inner-text">Semibold</span>
            </div>{" "}
            <table>
              <thead>
                <tr>
                  <th className="table-th ">Heading</th>{" "}
                  <th className="table-th ">Example</th>
                </tr>
              </thead>{" "}
              <tbody>
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h1&gt;&lt;/h1&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h1 font-semibold">h1. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h2&gt;&lt;/h2&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h2 font-semibold">h2. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h3&gt;&lt;/h3&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h3 font-semibold">h3. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h4&gt;&lt;/h4&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h4 font-semibold">h4. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h5&gt;&lt;/h5&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h5 font-semibold">h5. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h6&gt;&lt;/h6&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h6 font-semibold">h6. Muse heading</span>
                  </td>
                </tr>
              </tbody>
            </table>{" "}
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
                <code className="hljs html">
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h1</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"font-semibold"</span>&gt;
                  </span>
                  h1. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h1</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h2</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"font-semibold"</span>&gt;
                  </span>
                  h2. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h2</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h3</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"font-semibold"</span>&gt;
                  </span>
                  h3. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h3</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h4</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"font-semibold"</span>&gt;
                  </span>
                  h4. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h4</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h5</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"font-semibold"</span>&gt;
                  </span>
                  h5. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h5</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h6</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"font-semibold"</span>&gt;
                  </span>
                  h6. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h6</span>&gt;
                  </span>
                </code>
              </pre>
            </section>
          </section>{" "}
          <section className="mb-24">
            <div
              role="separator"
              className="ant-divider ant-divider-horizontal ant-divider-with-text-left"
            >
              <span className="ant-divider-inner-text">Bold</span>
            </div>{" "}
            <table>
              <thead>
                <tr>
                  <th className="table-th ">Heading</th>{" "}
                  <th className="table-th ">Example</th>
                </tr>
              </thead>{" "}
              <tbody>
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h1&gt;&lt;/h1&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h1">h1. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h2&gt;&lt;/h2&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h2">h2. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h3&gt;&lt;/h3&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h3">h3. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h4&gt;&lt;/h4&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h4">h4. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h5&gt;&lt;/h5&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h5">h5. Muse heading</span>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;h6&gt;&lt;/h6&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <span className="h6">h6. Muse heading</span>
                  </td>
                </tr>
              </tbody>
            </table>{" "}
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
                <code className="hljs html">
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h1</span>&gt;
                  </span>
                  h1. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h1</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h2</span>&gt;
                  </span>
                  h2. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h2</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h3</span>&gt;
                  </span>
                  h3. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h3</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h4</span>&gt;
                  </span>
                  h4. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h4</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h5</span>&gt;
                  </span>
                  h5. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h5</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">h6</span>&gt;
                  </span>
                  h6. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">h6</span>&gt;
                  </span>
                </code>
              </pre>
            </section>
          </section>{" "}
          <section id="Heading-Classes" className="mb-24">
            <h2>Heading Classes</h2>{" "}
            <p>
              All HTML headings are also available using heading classes from{" "}
              <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.
            </p>{" "}
            <table>
              <thead>
                <tr>
                  <th className="table-th ">Heading</th>{" "}
                  <th className="table-th ">Example</th>
                </tr>
              </thead>{" "}
              <tbody>
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;p className="h1"&gt;&lt;/p&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <p className="h1">h1. Muse heading</p>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;p className="h2"&gt;&lt;/p&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <p className="h2">h2. Muse heading</p>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;p className="h3"&gt;&lt;/p&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <p className="h3">h3. Muse heading</p>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;p className="h4"&gt;&lt;/p&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <p className="h4">h4. Muse heading</p>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;p className="h5"&gt;&lt;/p&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <p className="h5">h5. Muse heading</p>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="table-td">
                    <p>
                      <code>&lt;p className="h6"&gt;&lt;/p&gt;</code>
                    </p>
                  </td>{" "}
                  <td className="table-td">
                    <p className="h6">h6. Muse heading</p>
                  </td>
                </tr>
              </tbody>
            </table>{" "}
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
                <code className="hljs html">
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">p</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"h1"</span>&gt;
                  </span>
                  h1. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">p</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">p</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"h2"</span>&gt;
                  </span>
                  h2. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">p</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">p</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"h3"</span>&gt;
                  </span>
                  h3. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">p</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">p</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"h4"</span>&gt;
                  </span>
                  h4. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">p</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">p</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"h5"</span>&gt;
                  </span>
                  h5. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">p</span>&gt;
                  </span>
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">p</span>{" "}
                    <span className="hljs-attr">className</span>=
                    <span className="hljs-string">"h6"</span>&gt;
                  </span>
                  h6. Muse heading
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">p</span>&gt;
                  </span>
                </code>
              </pre>
            </section>
          </section>{" "}
          <section id="Paragraphs" className="mb-24">
            <h2>Paragraphs</h2>{" "}
            <div className="showcase pb-10">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                porro voluptatum laboriosam eveniet asperiores, expedita
                provident commodi ullam perferendis id, rem enim quisquam earum
                architecto ut nobis repellendus magni dolorum.
              </p>
            </div>{" "}
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
                <code className="hljs html">
                  <span className="hljs-tag">
                    &lt;<span className="hljs-name">p</span>&gt;
                  </span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero porro voluptatum laboriosam eveniet asperiores,
                  expedita provident commodi ullam perferendis id, rem enim
                  quisquam earum architecto ut nobis repellendus magni dolorum.
                  <span className="hljs-tag">
                    &lt;/<span className="hljs-name">p</span>&gt;
                  </span>
                </code>
              </pre>
            </section>
          </section>{" "}
          <p className="text-right font-semibold mb-24">
            Looking for more React Ant Design ? Please check the
            <a
              target="_blank"
              href="https://ant.design/components/typography/"
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
                  <Anchor affix={true} offsetTop={85}>
                    <Link href="#Headings" title="Headings" />
                    <Link href="#Heading-Classes" title="Heading Classes" />
                    <Link href="#Paragraphs" title="Paragraphs" />
                  </Anchor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
