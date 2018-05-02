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
       googleCalendarApiKey: 'AIzaSyCVZm2-uidFjJY8uS8iD20HocubVUSWZk4',
       locale: 'fr',
    events: {
      googleCalendarId: 'tyguen@gmail.com',
      color: 'black',
      textColor: 'white',
      rendering: 'background'
    },
    header: {
      left:   'title',
      center: '',
      right:  'today prevYear prev,next nextYear'
    },
    buttonText: {
      today:    "Aujourd'hui",
    },
    firstDay: 6,
    weekNumbers: true
    })
});
