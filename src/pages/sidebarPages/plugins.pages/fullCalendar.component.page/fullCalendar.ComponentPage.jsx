import React, { useState } from "react";
import CalendarComponent from "./allCalendar.component/calendar.component";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Anchor } from "antd";
import CopyClipboard from "../../../../utils/copyClipboard";
import AlertOnClick from "../../../../utils/alertOnClick";

const { Link } = Anchor;

const code = `
import React, { Component } from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

export default class CalendarComponent extends Component {
  render() {
    return (
      <>
        <div className="layout-content">
          <FullCalendar
            contentHeight="auto"
            height={400}
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            selectable={true}
            editable={true}
            initialDate="2021-10-12"
            events={[
              {
                title: "Call with Dave",
                start: "2021-10-18",
                end: "2020-10-18",
                className: "bg-danger",
              },

              {
                title: "Lunch meeting",
                start: "2021-10-21",
                end: "2021-10-22",
                className: "bg-warning text-dark",
              },

              {
                title: "All day conference",
                start: "2021-10-29",
                end: "2021-10-29",
                className: "bg-success",
              },

              {
                title: "Meeting with Mary",
                start: "2021-11-01",
                end: "2021-11-01",
                className: "bg-primary",
              },

              {
                title: "Winter Hackaton",
                start: "2021-11-03",
                end: "2021-11-03",
                className: "bg-danger",
              },

              {
                title: "Digital event",
                start: "2021-11-07",
                end: "2021-11-09",
                className: "bg-warning text-dark",
              },

              {
                title: "Marketing event",
                start: "2021-11-10",
                end: "2021-11-10",
                className: "bg-primary",
              },

              {
                title: "Dinner with Family",
                start: "2021-11-19",
                end: "2021-11-19",
                className: "bg-danger",
              },

              {
                title: "Black Friday",
                start: "2021-11-23",
                end: "2021-11-23",
                className: "bg-primary",
              },

              {
                title: "Cyber Week",
                start: "2021-12-02",
                end: "2021-12-02",
                className: "bg-warning text-dark",
              },
              {
                title: "Digital event",
                start: "2021-10-12",
                end: "2021-10-13",
                className: "bg-warning text-dark",
              },
            ]}
          />
        </div>
      </>
    );
  }
}`;

const markdown = `

~~~jsx
${code}
~~~
`;
const FullCalendarComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />

                <h1>FullCalendar</h1>
                <p className="text-dark">
                  The Most Popular JavaScript Calendar.
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
                <div className="showcase">
                  <div className="card-calendar ant-card ant-card-bordered ant-card-bordered-padding">
                    <CalendarComponent />
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code}
                    state={alert}
                    setState={setAlert}
                  />
                  {/*<button
                    type="button"
                    className="btn-copy ant-btn ant-btn-primary ant-btn-sm"
                    onClick={() => {
                      navigator.clipboard.writeText(code);
                      setAlert(!alert);

                      setTimeout(() => {
                        setAlert(false);
                      }, 2000);
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
                  </button>*/}
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
              <p className="text-right font-semibold mb-24">
                Looking for more FullCalendar? Please check the
                <a
                  target="_blank"
                  href="https://ant.design/components/calendar/"
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

export default FullCalendarComponentPage;
