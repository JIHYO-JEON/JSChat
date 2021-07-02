// Variables
let messages = document.querySelector('.message-list');
let btn = document.querySelector('.btn');
let input = document.querySelector('input');
let dateShown = ''

// Click 'Send' button or press Enter Key
btn.addEventListener('click', sendMessage);
input.addEventListener('keyup', function(e){ if(e.keyCode == 13) sendMessage()});

// Messenger Functions
function sendMessage(){
    let msg = input.value;
    if (msg !== ''){
        if (dateShown !== new Date().toLocaleDateString()){
            dateShown = new Date().toLocaleDateString();
            let time = document.createElement('li');
            time.classList.add('message-item', 'date');
            time.innerHTML = dateShown;
            messages.appendChild(time);
            messages.scrollTop = messages.scrollHeight;
        }
        input.value = '';
        writeLine(msg);
        // receiveLine(msg);
    }
}

function writeLine(text){
    // Show Messege
    let message = document.createElement('li');
    message.classList.add('message-item', 'item-user');
    message.innerHTML = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    // Show time
    let time = document.createElement('li');
    time.classList.add('message-item', 'time-user');
    time.innerHTML = new Date().toLocaleTimeString();
    messages.appendChild(time);
    messages.scrollTop = messages.scrollHeight;
}

function receiveLine(text){
    // show time
    let time = document.createElement('li');
    time.classList.add('message-item', 'time-receive');
    time.innerHTML = new Date().toLocaleTimeString();
    messages.appendChild(time);
    messages.scrollTop = messages.scrollHeight;
 }