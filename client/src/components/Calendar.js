import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';




function Calendar() {
  return (
    <div className="homeStyles">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        height= "85%"
        initialView="dayGridMonth"
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        eventColor="#38b6a1"
        events={[
            { title: 'test event 1!', date: '2021-08-06' },
          ]}        
      />
    </div>
  );
}

export default Calendar;
