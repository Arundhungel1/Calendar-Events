let already_booked = [
{start: '2018-12-11 16:00:00', end: '2018-12-11 17:00:00'},
{start: '2018-12-20 9:00:00', end: '2018-12-20 10:00:00'},
{start: '2018-12-21 13:00:00', end: '2018-12-21 13:30:00'},

];
let available = [
{start: '2018-12-19 16:00:00', end: '2018-12-19 17:00:00'},
{start: '2018-12-20 9:30:00', end: '2018-12-20 11:30:00'},
{start: '2018-12-28 13:00:00', end: '2018-12-28 15:00:00'},
{start: '2018-12-29 13:00:00', end: '2018-12-29 14:00:00'}];

function getAvailableDayTime(already_booked, available) {
  let canBook = available.slice();

  canBook.forEach((x,j) => {
    already_booked.forEach((y,i) => {
      if ((new Date(x.start).getTime() <= new Date(y.end).getTime() && new Date(x.start).getTime() >= new Date(y.start).getTime())
      || (new Date(x.end).getTime() <= new Date(y.end).getTime() && new Date(x.end).getTime() >= new Date(x.start).getTime())
      || x.getDay() === y.getDay()
      )
      })
    })
}
