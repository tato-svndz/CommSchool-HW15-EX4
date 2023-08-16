function createCalendar(elem, year, month) {
  let weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  let calendarTable = document.createElement("table");
  let headerRow = document.createElement("tr");
  for (let weekday of weekdays) {
    let th = document.createElement('th');
    th.textContent = weekday;
    headerRow.appendChild(th);
  }
  calendarTable.appendChild(headerRow);

  let firstDay = new Date(year, month, 1);
  firstDay = firstDay.getDay();
  let daysInMonth = new Date(year, month + 1, 0);
  daysInMonth = daysInMonth.getDate();

  let currentDay = 1;
  for (let week = 0; currentDay <= daysInMonth; week++) {
    let weekRow = document.createElement("tr");
    for (let weekDay = 0; weekDay < 7; weekDay++) {
      let dayCell = document.createElement("td");
      if (week === 0 && weekDay < firstDay) {
        dayCell.textContent = "";
      } else if (currentDay <= daysInMonth) {
        dayCell.textContent = currentDay;
        currentDay++;
      }
      weekRow.appendChild(dayCell);
    }
    calendarTable.appendChild(weekRow);
  }
  elem.appendChild(calendarTable);
}

let elem = document.getElementById("calendar");
let year = +prompt('Enter Year: ');
let month = +prompt('Enter Month: ');