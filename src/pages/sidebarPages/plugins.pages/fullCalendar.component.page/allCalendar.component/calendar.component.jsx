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
            initialDate="2021-10-10"
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
}
