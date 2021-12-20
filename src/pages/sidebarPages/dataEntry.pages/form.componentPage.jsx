import React, { useState } from "react";

import { Form, Input, Button, Checkbox, Select, Anchor } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import AlertOnClick from "../../../utils/alertOnClick";
import CopyClipboard from "../../../utils/copyClipboard";

const { Link } = Anchor;

const code = `
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<Demo />, mountNode);`;
const markdown = `

~~~jsx
${code}
~~~
`;

const code2 = `
import { Form, Input, Button, Checkbox } from 'antd';

const Demo = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<Demo />, mountNode);`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

const { Option } = Select;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const FormComponentPage = () => {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
                <h1>Form</h1>
                <p className="text-dark">
                  Form is used to collect, validate, and submit the user input,
                  usually contains various form items including checkbox, radio,
                  input, select, and etc.
                </p>
                <p className="text-dark">
                  <strong>
                    If you need to use
                    <code>v-model</code> verification, you can use new form{" "}
                    <code>a-form-model</code>
                  </strong>
                </p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <section id="When-To-Use" className="mb-24">
                <h2>When To Use</h2>
                <ul>
                  <li>
                    When you need to create a instance or collect information.
                  </li>
                  <li>When you need to validate fields in certain rules.</li>
                </ul>
              </section>
              <h2>Examples</h2>
              <section id="Coordinated-Controls" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">
                    Coordinated Controls
                  </span>
                </div>
                <p>
                  Use <code>setFieldsValue</code> to set other control’s value
                  programmaticly.
                </p>
                <div className="showcase">
                  <form className="ant-form ant-form-horizontal">
                    <div className="ant-row ant-form-item">
                      <div className="ant-col ant-col-5 ant-form-item-label">
                        <label
                          for="coordinated_note"
                          title="Note"
                          className="ant-form-item-required"
                        >
                          Note
                        </label>
                      </div>
                      <div className="ant-col ant-col-12 ant-form-item-control-wrapper">
                        <div className="ant-form-item-control">
                          <span className="ant-form-item-children">
                            <input
                              type="text"
                              data-__meta="[object Object]"
                              data-__field="[object Object]"
                              id="coordinated_note"
                              className="ant-input"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ant-row ant-form-item">
                      <div className="ant-col ant-col-5 ant-form-item-label"></div>
                      <div className="ant-col ant-col-12 ant-form-item-control-wrapper">
                        <div className="ant-form-item-control">
                          <span className="ant-form-item-children">
                            <Select
                              defaultValue="lucy"
                              style={{ marginLeft: "13%", width: "99%" }}
                              placeholder="Select Gender"
                            >
                              <Option value="lucy">Male</Option>
                              <Option value="jack">Female</Option>
                              <Option value="yiminghe">Other</Option>
                            </Select>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ant-row ant-form-item">
                      <div
                        className="
                    ant-col
                    ant-col-12
                    ant-col-offset-5
                    ant-form-item-control-wrapper
                  "
                      >
                        <div className="ant-form-item-control">
                          <span className="ant-form-item-children">
                            <button
                              type="submit"
                              className="ant-btn ant-btn-primary"
                            >
                              <span>Submit</span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
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
              <section id="Dynamic-Rules" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Dynamic Rules</span>
                </div>
                <p>
                  Perform different check rules according to different
                  situations.
                </p>
                <div className="showcase">
                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      style={{ width: "60%" }}
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      style={{ width: "60%" }}
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
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
              <p className="text-right font-semibold mb-24">
                Looking for more Ant Design React Form? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/form/"
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

                        <Link
                          href="#Coordinated-Controls"
                          title="Coordinated Controls"
                        />
                        <Link href="#Dynamic-Rules" title="Dynamic Rules" />
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
