var buttonUser = document.querySelector('.submit');
var buttonUser2 = document.querySelector('#submit2');

buttonUser.addEventListener('click', function() {
    var gmailMessage = document.querySelector ('#gmail');
    var userMessage = document.querySelector ('#displayGreeting2');
    var userName = document.querySelector('#username').value;
    // var userName2 = document.querySelector('#username').value;
    var newusername = document.querySelector ('.container-username')
    var newemail = document.querySelector ('.container-email')
    var newhome = document.querySelector ('.container-home')


    gmailMessage.innerText = `Hi, ${userName} what's your gmail?`;
    userMessage.innerText = `${userName}.`;

    newusername.style.display = 'none';
    newemail.style.display = 'flex';
    newhome.style.display = 'none';
});

buttonUser2.addEventListener('click', function() {
    var newemail = document.querySelector ('.container-email')
    var newhome = document.querySelector ('.container-home ')
        
    newemail.style.display = 'none';
    newhome.style.display = 'flex';

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
    var newName = newName;



    if(h === 0) {
        h = 12;
    }

    if ( h > 12 && h <= 12 ) {
        h = h - 12;
        session = "PM";
        greetingMessage = 'afternoon,'
    }

    else if (h > 18) {
        session = "PM";
        h = h - 12;
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

    document.getElementById("displayDay").innerText = day;
    document.getElementById("displayClock").innerText = time;

    var greet = `Good ${greetingMessage}`;
    document.getElementById("displayGreeting").innerText = greet;
    
}
showTime();


// const todoList = document.querySelector('.todo-list');
// const todoForm = document.querySelector('.add-todo');
// const removeList = document.querySelector('.remove-List');

// let items = JSON.parse(localStorage.getItem('todoList')) || [
// 	{
//     title: 'Duplicate door key',
//     done: false
//   },
// 	{
//     title: 'Boom Shka lak',
//     done: true
//   }
// ];

// function addTodo(e) {
//     e.preventDefault();
//     const title = (this.querySelector('[name=item]')).value;
//     const todo = {
//       title,
//       done: false
//     };
//     items.push(todo);
//     saveTodos();
//     this.reset();
//   }