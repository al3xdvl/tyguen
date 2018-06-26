//= require rails-ujs
//= require_tree .

//= require jquery
//= require jquery_ujs

//= require moment
//= require fullcalendar
//= require fullcalendar/gcal
//= require fullcalendar/locale-all



$(document).ready(function() {
    $('#calendar').fullCalendar({
       googleCalendarApiKey: "AIzaSyCVZm2-uidFjJY8uS8iD20HocubVUSWZk4",
       locale: 'fr',
    events:
    {
      googleCalendarId: 'tyguen@gmail.com',
      color: '#0065A8',
      textColor: 'white',
      className: ["background-events"],
    },
      header: {
      left:   'title',
      center: ' ',
      right:  'prevYear prev,next nextYear'
    },
    buttonText: {
      today:    "Aujourd'hui",
    },
    firstDay: 6,
    weekNumbers: true
    })
    $('#calendar2').fullCalendar({

    eventSources: [

    // your event source
    {
      events: [ // put the array in the `events` property
        {
            title : 'Zone C - 280 euros',
      start : '2018-05-05',
      end : '2018-06-30'
        },
        {
            title : 'Zone C - 280 euros',
      start : '2018-09-01',
      end : '2018-09-29'
        }
      ],
      color: '#00C21D',     // an option!
      textColor: 'black' // an option!
    },
    {
      events: [ // put the array in the `events` property
        {
      title : 'Zone E - 420 euros',
      start : '2018-06-30',
      end : '2018-07-14'
        }
      ],
      color: '#FF5300',     // an option!
      textColor: 'black' // an option!
    },


    // any other event sources...

  ],
      header: {
      left:   'title',
      center: ' ',
      right:  'prevYear prev,next nextYear'
    },
    buttonText: {
      today:    "Aujourd'hui",
    },
    firstDay: 6,
    weekNumbers: true
    })
});
