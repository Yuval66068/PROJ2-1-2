let t;
let nd;
let uniqueID = 0;

// add timezone clock and add 1 to uniqueID counter
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addTimeZone').addEventListener('click', getSelectTime);
});


function getSelectTime() {
  uniqueID++
  //create space for new list item
  document.getElementById("addedClock").style.display = "block";

  //get timezone offset from dropdown
  let t = document.getElementById("timezone").value;

  //build new list item
  let list = document.getElementById('newClocks');
  let entry = document.createElement('li');
  list.appendChild(entry);

  //add div to list to display time and add unique id
  let divValue = document.createElement("div");
  divValue.id = 'resultTZValue' + uniqueID;
  entry.appendChild(divValue);

  //run clock function, pass the timezone offset and uniqueID
  tzClock(t, uniqueID);
  
  let arr = [];
  arr.push(uniqueID)
  arr.forEach(clock => {
    setInterval(() => {
      tzClock(t, clock);
    }, 1000);
  })
}


function tzClock(t, uniqueID) {
  let d = new Date();
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  nd = new Date(utc + (3600000 * t)).toLocaleTimeString();

  //plug this new time data into list item
  document.getElementById("resultTZValue" + uniqueID).innerText = nd;
}

