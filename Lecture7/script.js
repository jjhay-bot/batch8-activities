var buttonUser = document.querySelector('.submit');
var buttonUser2 = document.querySelector('#submit2');

buttonUser.addEventListener('click', function() {
    var gmailMessage = document.querySelector ('#gmail');
    var userMessage = document.querySelector ('#displayGreeting2');
    var userName = document.querySelector('#username').value;
    var newusername = document.querySelector ('.container-username')
    var newemail = document.querySelector ('.container-email')
    var newhome = document.querySelector ('.container-home')

    if (userName === '') {
        alert("Please write your name!");
        } 
    else {
    gmailMessage.innerText = `Hi, ${userName} what's your gmail?`;
    userMessage.innerText = `${userName}.`;

    newusername.style.display = 'none';
    newemail.style.display = 'flex';
    newhome.style.display = 'none';
    }  
});

buttonUser2.addEventListener('click', function() {
    var newemail = document.querySelector ('.container-email')
    var newhome = document.querySelector ('.container-home ')
    var newuserEmail = document.querySelector('#userEmail').value;

    if (newuserEmail === '') {
        alert("Please write your gmail account");
        } 
    else {
    newemail.style.display = 'none';
    newhome.style.display = 'flex';
    }
});


function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var session = "AM";
    var d = date.getDay();
    var M = date.getMonth();
    var D = date.getDate();
    var Y = date.getFullYear();
    var greetingMessage = "morning,";

    if(h === 0) {
        h = 12;
    }

    if (h > 12 )  {
        h = h - 12;
        session = "PM";
        greetingMessage = 'afternoon,'
        if (h < 18)
        greetingMessage = 'evening,'
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    // Weekdays -------------------------------------------------------

    if(d == 1) {
        d = "Monday";
    }
    else if(d == 2) {
        d = "Tuesday";
    }
    else if(d == 3) {
        d = "Wednesday";
    }
    else if(d == 4) {
        d = "Thursday";
    }
    else if(d == 5) {
        d = "Friday";
    }
    else if(d == 6) {
        d = "Saturday";
    }
    else {
        d ="Sunday"
    }

    // Month -----------------------------------------------------------
    if(M == 0) {
        M = "Jan";
    }
    else if(M == 1) {
        M = "Feb";
    }
    else if(M == 2) {
        M = "Mar";
    }
    else if(M == 3) {
        M = "Apr";
    }
    else if(M == 4) {
        M = "May";
    }    
    else if(M == 5) {
        M = "Jun";
    }
    else if(M == 6) {
        M = "Jul";
    }    else if(M == 7) {
        M = "Aug";
    }
    else if(M == 8) {
        M = "Sep";
    }    else if(M == 9) {
        M = "Oct";
    }
    else if(M == 10) {
        M = "Nov";
    }
    else {
        M ="Dec"
    }

    var day =  d + ", " + M + " " + D + " " + Y ;
    var time =  h + ":" + m + " " + session;
    var greet = `Good ${greetingMessage}`;

    document.getElementById("displayDay").innerText = day;
    document.getElementById("displayClock").innerText = time;
    document.getElementById("displayGreeting").innerText = greet;
    setTimeout(showTime, 1000);
}

showTime()


// Create a new list item when clicking on the "Add" button
function newFocus() {
  var li = document.createElement("li");
  let inputValue = '   ' + document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
    if (inputValue === '   ') {
      alert("You must write something!");
    } 
    else {
      document.getElementById("myUL").appendChild(li);
    }
    li.className = "list";

    li.appendChild(t);
    document.getElementById("myInput").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode(" ✖");

    span.className = "close";
    span.appendChild(txt);

    let span2 = document.createElement("span");
    let txt2 = document.createTextNode(" Delete ");
    span2.appendChild(txt2);
  
    span2.className = "tooltiptext";
    span.appendChild(span2);

    li.appendChild(span);
    li.style.listStyle = 'none'
    li.style.alignContent = 'center'

    // let span3 = document.createElement("span");
    // let txt3 = document.createTextNode(" ✔");

    // span3.className = "check";
    // span3.appendChild(txt3);

    // let span4 = document.createElement("span");
    // let txt4 = document.createTextNode(" Done ");
    // span4.appendChild(txt4);

    // span4.className = "tooltiptext";
    // span3.appendChild(span4);

    // li.appendChild(span3);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        // div.style.textDecoration  = "line-through";
        div.style.display = "none";
      }
    }

    var NumberNotif = close.length ;
    document.getElementById("notification").innerText = NumberNotif;
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

function showQuotes() {

    var items = [ `"See things as you would have them be instead of as they are."`, `"If you're not making mistakes, then you're not making decisions."` , `"Failing to plan is planning to fail."`];
    var item = items[Math.floor(Math.random()*items.length)]
    document.getElementById("quotes").innerText = item;
}
showQuotes();

const toggleButton = document.getElementsByClassName('todotask')[0]
const notificationBar = document.getElementsByClassName('todoList')[0]

toggleButton.addEventListener('click', () =>  {
    notificationBar.classList.toggle('active');
    toggleButton.style.background = "none";
    list2 = document.getElementById("myUL").value;
});

const newSetting = document.getElementsByClassName('theme')[0]
const newPink = document.getElementsByClassName('pink')[0]
const newPink2 = document.getElementsByClassName('pink2')[0]

newPink.addEventListener('click', () =>  {
    // theme.onclick('active');
    newSetting.classList.toggle('active');
});

newPink2.addEventListener('click', () =>  {
    // theme.onclick('active');
    newSetting.classList.toggle('active2');
});



// const Drag = document.getElementsByClassName('list')

// Drag.addEventListener ('mousemove', () =>  {
//     var newDrag = Drag.addEventListener.ondrop
// });


// function dragStart(event) {
//     event.dataTransfer.setData("Text", event.target.className);
//   }
   
//   function allowDrop(event) {
//     event.preventDefault();
//   }
  
//   function drop(event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("Text");
//     event.target.appendChild(document.getElementById(data));
//   }

// list.onmousedown = function (event) {
//     // (1) prepare to moving: make absolute and on top by z-index
//     list.style.position = 'absolute';
//     list.style.zIndex = 1000;
//     // move it out of any current parents directly into body
//     // to make it positioned relative to the body
//     document.body.append(ball);
//     // centers the ball at (pageX, pageY) coordinates
//     function moveAt(pageX, pageY) {
//     list.style.left = pageX - ball.offsetWidth / 2 + 'px';
//     list.style.top = pageY - ball.offsetHeight / 2 + 'px';
//     }
//     // move our absolutely positioned ball under the pointer
//     moveAt(event.pageX, event.pageY);

//     function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//     }

//     // (2) move the ball on mousemove
//     document.addEventListener('mousemove', onMouseMove);

//     // (3) drop the ball, remove unneeded handlers
//     ball.onmouseup = function() {
//         document.removeEventListener('mousemove', onMouseMove);
//         ball.onmouseup = null;
//     };

// };


