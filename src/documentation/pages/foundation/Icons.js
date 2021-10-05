import { Alert, Anchor } from "antd";
import React, { useEffect, useState } from "react";
import { Icons } from "../../icons";
const { Link } = Anchor;

function DocsIcons() {
  const importSVG = (iconJSON) => {
    return iconJSON.map((icon) => {
      icon.icon = require(`../../../assets/svg/${icon.id}.svg`).default;
      return icon;
    });
  };
  const directionJSON = Icons.filter((icon) => icon.category === "direction");
  const directionIcons = importSVG(directionJSON);
  const suggestionJSON = Icons.filter((icon) => icon.category === "suggestion");
  const suggestionIcons = importSVG(suggestionJSON);
  const logoJSON = Icons.filter((icon) => icon.category === "logo");
  const logoIcons = importSVG(logoJSON);
  const otherJSON = Icons.filter((icon) => icon.category === "other");
  const otherIcons = importSVG(otherJSON);

  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (text) {
      setIsCopied(true);
    } else {
      setIsCopied(false);
    }
  }, [text]);
  return (
    <div>
      <div className="page-row page-component-padding">
        <div className="page-content">
          {isCopied ? (
            <Alert
              message={text}
              type="success"
              showIcon={true}
              closable={true}
              onClick={() => setText("")}
            />
          ) : (
            ""
          )}
          <section className="mb-24">
            <h1>Icons</h1>{" "}
            <p className="text-dark">Semantic vector graphics.</p>
          </section>
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>
          <section className="mb-24">
            <h2>Search Icons</h2>
            <div
              className="search-icon-div-style"
              style={{ display: "flex; justify-content: space-between" }}
            >
              <div
                className="ant-radio-group ant-radio-group-solid ant-radio-group-default"
                style={{ minWidth: "250px" }}
              >
                <label className="ant-radio-button-wrapper ant-radio-button-wrapper-checked">
                  <span className="ant-radio-button ant-radio-button-checked">
                    <input
                      type="radio"
                      className="ant-radio-button-input"
                      value="outlined"
                    />
                    <span className="ant-radio-button-inner"></span>
                  </span>
                  <span>Outlined</span>
                </label>
                <label className="ant-radio-button-wrapper">
                  <span className="ant-radio-button">
                    <input
                      type="radio"
                      className="ant-radio-button-input"
                      value="filled"
                    />
                    <span className="ant-radio-button-inner"></span>
                  </span>
                  <span>Filled</span>
                </label>
                <label className="ant-radio-button-wrapper">
                  <span className="ant-radio-button">
                    <input
                      type="radio"
                      className="ant-radio-button-input"
                      value="twoTone"
                    />
                    <span className="ant-radio-button-inner"></span>
                  </span>
                  <span>Two Tone</span>
                </label>
              </div>

              <span className="ant-input-search ant-input-affix-wrapper  search-icon-div-style">
                <input
                  placeholder="Search icon here, click icon to copy code"
                  type="text"
                  className="ant-input"
                />
                <span className="ant-input-suffix">
                  <i
                    aria-label="icon: search"
                    tabindex="-1"
                    className="anticon anticon-search ant-input-search-icon"
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
                </span>
              </span>
            </div>
          </section>{" "}
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>
          <section id="directionalIcons" className="mb-24">
            <h2>
              Directional Icons <small>( {directionIcons.length} )</small>
            </h2>
            <ul className="icons-list">
              {directionIcons.map((icon) => {
                return (
                  <li
                    onClick={() => {
                      const toCopy = `<a-icon type="${icon.id}" theme="outlined" /> copied!`;

                      setText(toCopy);
                      navigator.clipboard.writeText(toCopy);
                    }}
                  >
                    <i
                      aria-label={`icon: ${icon.id}`}
                      className={`anticon ${icon.id}`}
                    >
                      <img src={icon.icon} alt="icon" />
                    </i>
                    <code>{icon.id}</code>
                  </li>
                );
              })}
            </ul>
          </section>{" "}
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>{" "}
          <section id="suggestedIcons" className="mb-24">
            <h2>
              Suggested Icons <small>( 24 )</small>
            </h2>{" "}
            <ul className="icons-list">
              {suggestionIcons.map((icon) => {
                return (
                  <li
                    onClick={() => {
                      const toCopy = `<a-icon type="${icon.id}" theme="outlined" /> copied!`;

                      setText(toCopy);
                      navigator.clipboard.writeText(toCopy);
                    }}
                  >
                    <i
                      aria-label={`icon: ${icon.id}`}
                      className={`anticon ${icon.id}`}
                    >
                      <img src={icon.icon} alt="icon" />
                    </i>
                    <code>{icon.id}</code>
                  </li>
                );
              })}
            </ul>
          </section>{" "}
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>{" "}
          <section id="editorIcons" className="mb-24">
            <h2>
              Logo Icons <small>( {logoIcons.length} )</small>
            </h2>{" "}
            <ul className="icons-list">
              {logoIcons.map((icon) => {
                return (
                  <li
                    onClick={() => {
                      const toCopy = `<a-icon type="${icon.id}" theme="outlined" /> copied!`;

                      setText(toCopy);
                      navigator.clipboard.writeText(toCopy);
                    }}
                  >
                    <i
                      aria-label={`icon: ${icon.id}`}
                      className={`anticon ${icon.id}`}
                    >
                      <img src={icon.icon} alt="icon" />
                    </i>
                    <code>{icon.id}</code>
                  </li>
                );
              })}
            </ul>
          </section>{" "}
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>{" "}
          <section id="dataIcons" className="mb-24">
            <h2>
              Other Icons <small>( {otherIcons.length} )</small>
            </h2>{" "}
            <ul className="icons-list">
              {otherIcons.map((icon) => {
                return (
                  <li
                    onClick={() => {
                      const toCopy = `<a-icon type="${icon.id}" theme="outlined" /> copied!`;

                      setText(toCopy);
                      navigator.clipboard.writeText(toCopy);
                    }}
                  >
                    <i
                      aria-label={`icon: ${icon.id}`}
                      className={`anticon ${icon.id}`}
                    >
                      <img src={icon.icon} alt="icon" />
                    </i>
                    <code>{icon.id}</code>
                  </li>
                );
              })}
            </ul>
          </section>{" "}
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>{" "}
          <div
            role="separator"
            className="ant-divider ant-divider-horizontal"
          ></div>{" "}
          <p className="text-right font-semibold mb-24">
            Looking for more Ant Design React Icons? Please check the{" "}
            <a
              target="_blank"
              href="https://ant.design/components/icon/"
              rel="noreferrer"
            >
              official docs
            </a>
            .
          </p>
        </div>{" "}
        <div className="page-anchor">
          <div>
            <div className="">
              <div
                className="ant-anchor-wrapper"
                style={{ maxHeight: "calc(100vh - 85px)" }}
              >
                <div className="ant-anchor">
                  <Anchor affix={true} offsetTop={85}>
                    <Link href="#Directional-Icons" title="Directional Icons" />
                    <Link href="#Suggested-Icons" title="Suggested Icons" />
                    <Link href="#Logo-Icons" title="Logo Icons" />
                    <Link href="#Other-Icons" title="Other Icons" />
                  </Anchor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocsIcons;
