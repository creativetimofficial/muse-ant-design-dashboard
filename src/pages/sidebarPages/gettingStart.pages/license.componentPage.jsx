import React from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

export const LicenseComponentPage = () => {
  return (
    <div>
      <div className="page-row page-component-padding">
        <div className="page-content">
          <section id="License" className="mb-24">
            <h1>License</h1>{" "}
            <p className="text-dark">
              Learn more about the licenses Creative Tim offers and purchase the
              one that covers the needs of your project.
            </p>
          </section>{" "}
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>{" "}
          <section id="Free-Demo-Products" className="mb-24">
            <h2>Free Demo Products</h2> <p>MIT License</p>{" "}
            <p>
              Copyright (c) 2021{" "}
              <a href="https://creative-tim.com/">Creative Tim</a>
            </p>{" "}
            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the “Software”), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>{" "}
            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>{" "}
            <p>
              THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </section>{" "}
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>{" "}
          <section id="PRO-Premium-Products" className="mb-24">
            <h2>PRO Premium Products</h2>{" "}
            <p>
              Currently, on Creative Tim you can get the products with two types
              of licenses: Personal or Developer. If you are making a paid
              purchase, be sure to go through the table with the rights and the
              guidelines, so you can know what is the best fit for you. View the
              rights table and the description for each license on our by
              clicking the button below.
            </p>{" "}
            <p>
              <a href="https://www.creative-tim.com/license">See licenses</a>
            </p>{" "}
            <p>
              Creating your web design from scratch with dedicated designers can
              be very expensive. Using our solutions you don’t have to worry
              about design. Save time and money by focusing on the business
              model. Are you ready to create something amazing?
            </p>{" "}
            <p>
              <a href="https://www.creative-tim.com/">Purchase now</a>
            </p>
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
                  <div className="ant-anchor-ink">
                    <span
                      className="ant-anchor-ink-ball"
                      style={{ top: "10.5px" }}
                    ></span>
                  </div>
                  <Anchor affix={true} offsetTop={85}>
                    <Link href="#License" title="License" />
                    <Link
                      href="#Resources-and-credits"
                      title="Resources and credits"
                    />
                    <Link
                      href="#Free-Demo-Products"
                      title="Free Demo Products"
                    />
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
