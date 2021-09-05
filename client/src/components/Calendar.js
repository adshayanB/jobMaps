import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const moment = require("moment");

function Calendar({ setImportantDates }) {
  const showImportantDates = async () => {

    let token = localStorage.getItem("token");
    let auth = "JWT " + token;
    let calendarEvents = ["interview"];
    let results = [];
    let allEventTitles = []; 
    let allEventDates = [];
    let allEventsDisplay = []; 

    for (const status of calendarEvents) { //get all interviews
      try {
        const response = await fetch("/filter/status", {
          method: "POST",
          headers: {
            Authorization: auth,
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            status: status,
          }),
        });
        const data = await response.json();
        if (data.success) {
          results.push(...data.data);
          console.log(results);
        }
      } catch (err) {
        console.log(err);
      }
    }

    for (const events in results) { //two arrays for two needed properties (event names and dates)
      allEventDates.push(results[events].date_interview);

      allEventTitles.push(
        "Interview for " +
          results[events].jobTitle +
          " at " +
          results[events].company
      );
    }

    for (const events in results) { //combined the two arrays to make array of event objects for fullcalendar
      var display_date = allEventDates[events];
      var display_title = allEventTitles[events];

      var insertEvents = {};
      insertEvents = {
        title: display_title,
        start: moment(display_date).format("YYYY-MM-DD"),
      };
      allEventsDisplay[events]=(insertEvents); 
    }
    console.log(allEventsDisplay);

    return allEventsDisplay;
  };

  return (
    <div className="homeStyles">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        height="85%"
        disableDragging="true"
        initialView="dayGridMonth"
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventColor="#38b6a1"
        displayEventTime="false"
        events={showImportantDates}
      />
    </div>
  );
}

export default Calendar;
