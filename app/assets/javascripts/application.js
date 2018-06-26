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
    locale: 'fr',
    eventSources: [

    // your event source
    {
      events: [ // put the array in the `events` property
        {
      title : 'Tarif A - 220 euros',
      start : '2018-01-06',
      end : '2018-02-10'
        },
        {
      title : 'Tarif A - 220 euros',
      start : '2018-03-10',
      end : '2018-04-07'
        },
        {
      title : 'Tarif A - 220 euros',
      start : '2018-09-29',
      end : '2018-10-20'
        },
        {
      title : 'Tarif A - 220 euros',
      start : '2018-11-03',
      end : '2018-12-22'
        }
      ],
      color: '#F9FB00',     // an option!
      textColor: 'black' // an option!
    },
    {
      events: [ // put the array in the `events` property
        {
      title : 'Tarif B - 260 euros',
      start : '2018-02-10',
      end : '2018-03-10'
        }
      ],
      color: '#DC88FF',     // an option!
      textColor: 'black' // an option!
    },
    {
      events: [ // put the array in the `events` property
        {
            title : 'Tarif C - 280 euros',
      start : '2018-05-05',
      end : '2018-06-30'
        },
        {
            title : 'Tarif C - 280 euros',
      start : '2018-09-01',
      end : '2018-09-29'
        },
        {
            title : 'Tarif C - 280 euros',
      start : '2018-10-20',
      end : '2018-11-03'
        },

      ],
      color: '#00C21D',     // an option!
      textColor: 'black' // an option!
    },
    {
      events: [ // put the array in the `events` property
        {
      title : 'Tarif D - 300 euros',
      start : '2018-04-07',
      end : '2018-05-05'
        },
        {
      title : 'Tarif D - 300 euros',
      start : '2018-12-22',
      end : '2019-01-06'
        }
      ],
      color: '#8FCBFF',     // an option!
      textColor: 'black' // an option!
    },
    {
      events: [ // put the array in the `events` property
        {
      title : 'Tarif E - 420 euros',
      start : '2018-06-30',
      end : '2018-07-14'
        }
      ],
      color: '#FF5300',     // an option!
      textColor: 'black' // an option!
    },
    {
      events: [ // put the array in the `events` property
        {
      title : 'Tarif F - 420 euros',
      start : '2018-07-14',
      end : '2018-07-21'
        },
        {
      title : 'Tarif F - 420 euros',
      start : '2018-08-18',
      end : '2018-08-25'
        }
      ],
      color: '#F30000',     // an option!
      textColor: 'white' // an option!
    },
    {
      events: [ // put the array in the `events` property
        {
      title : 'Tarif G - 440 euros',
      start : '2018-07-21',
      end : '2018-08-18'
        }
      ],
      color: '#9F0000',     // an option!
      textColor: 'white' // an option!
    },
    {
      events: [ // put the array in the `events` property
        {
      title : 'Tarif H - 380 euros',
      start : '2018-08-25',
      end : '2018-09-01'
        }
      ],
      color: '#8D3700',     // an option!
      textColor: 'white' // an option!
    }
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
