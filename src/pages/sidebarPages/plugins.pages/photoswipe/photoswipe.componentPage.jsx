import React, { useState } from "react";
import { Anchor, Image } from "antd";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyClipboard from "../../../../utils/copyClipboard";
import AlertOnClick from "../../../../utils/alertOnClick";

const code = `
import { Image } from 'antd';

const App = () => (
 <div className="thumbnails mt-30">
  <div className="pswipe-gallery" data-pswp-uid="1">
    <Image.PreviewGroup>
      <image
        width="{100}"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg"
      />
      <image
        width="{100}"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg"
      />
      <image
        width="{100}"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg"
      />
      <image
        width="{100}"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg"
      />
    </Image.PreviewGroup>
  </div>
</div>
);

ReactDOM.render(<App />, mountNode);`;
const markdown = `

~~~jsx
${code}
~~~
`;
const { Link } = Anchor;

const PhotoSwipeComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />
                <h1>Photo Swipe</h1>
                <p className="text-dark">
                  JavaScript image gallery for mobile and desktop, modular,
                  framework independent.
                </p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
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
                <div className="showcase card-product cart-product-new-style">
                  <div
                    className="ant-row-flex"
                    style={{ marginLeft: "-12px", marginRight: "-12px" }}
                  >
                    <div
                      className="col-gallery ant-col ant-col-24"
                      style={{ paddingLeft: "12px", paddingRight: "12px" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1616627781431-23b776aad6b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1884&amp;q=80"
                        alt="chair"
                        className="gallery-img shadow-3 img-contain"
                      />
                      <div className="thumbnails mt-30">
                        <div className="pswipe-gallery" data-pswp-uid="1">
                          <Image.PreviewGroup>
                            <Image
                              width={100}
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg"
                            />
                            <Image
                              width={100}
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg"
                            />
                            <Image
                              width={100}
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg"
                            />
                            <Image
                              width={100}
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg"
                            />
                          </Image.PreviewGroup>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  {/*------------------------------------code-----------------------------------------*/}
                </section>
              </section>
              <p className="text-right font-semibold mb-24">
                Looking for more Photo Swipe? Please check the
                <a
                  target="_blank"
                  href="https://pro.ant.design/"
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
                        <Link href="#Basic" title="Basic" />
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

export default PhotoSwipeComponentPage;
