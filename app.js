const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")
//console.log(items)
// months start from zero
let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

//let futureDate = new Date(2022, 9, 29, 15, 14, 0)

// get year
const futureDate = new Date(tempYear, tempMonth, tempDay + 15, 23, 59, 0)
const year = futureDate.getFullYear()
//get hours
const hours = futureDate.getHours()
// get minutes
const minutes = futureDate.getMinutes()
// get the month
let month = futureDate.getMonth() //  this returns a number
month = months[month] // assign it then access the array
//get the date
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]
//console.log(weekday)
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`

//calculate remaining time

const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()
  const t = futureTime - today
  console.log(t)
  //1s = 1000ms
  //1 m = 60s
  //1hr = 60min
  //1d = 24hr

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  const oneSecond = 1000
  //calculate  all values
  let days = t / oneDay
  days = Math.floor(days)
  //console.log(days)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / oneSecond)
  console.log(seconds)
  // set values array
  const values = [days, hours, minutes, seconds]
  function format(item) {
    if (item < 10) {
      return `0${item}`
    } else {
      return item
    }
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countdown)
    deadline,
      (innerHTML = '<h4 class ="expired">sorry this giveaway has expired</h4>')
  }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()
