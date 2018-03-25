import request from 'superagent'

const CALENDAR_ID = 'vcb2kd6h29390rgsg49uqstrtg@group.calendar.google.com'
const API_KEY = 'AIzaSyCJe4rTgLmGIDOVcheU3yUO4j7a7FQ6J4g'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}