const socket = io()                 //  we are no on the client and we are using the io package here client side

//  get some references to the divs and input field on the page
const chat1       = document.querySelector('.chat-form1');
const chat2       = document.querySelector('.chat-form2');
const input1      = document.querySelector('.chat-input1');
const input2      = document.querySelector('.chat-input2');
const chatWindow = document.querySelector('.chat-window');

chat1.addEventListener('submit', event => {          //  when the submit button is press call this code
    event.preventDefault();                         //  kill the event otherwise the browser will reload the page
    //  What does emit do? 
    //      Synchronously calls each of the listeners registered for the event named 'chat', 
    //      passing the supplied arguments to each.
    socket.emit('chat1', input1.value);               //  the suppied argument is the text in the input field typed by you
    input1.value = '';                               //  clear the chat text
});

chat2.addEventListener('submit', event => {          //  when the submit button is press call this code
    event.preventDefault();                         //  kill the event otherwise the browser will reload the page
    //  What does emit do? 
    //      Synchronously calls each of the listeners registered for the event named 'chat', 
    //      passing the supplied arguments to each.
    socket.emit('chat2', input2.value);               //  the suppied argument is the text in the input field typed by you
    input2.value = '';                               //  clear the chat text
});

socket.on('chat1', message => {                      //  adding an event handler to our socket, listening for any event destined for the named socket 'chat'
    console.log('From server: ', message);
    chatWindow.innerHTML += "--> "+message + '<br>';       //  take the socket data packet and add it to the chat window
});
socket.on('chat2', message => {                      //  adding an event handler to our socket, listening for any event destined for the named socket 'chat'
    console.log('From server: ', message);
    chatWindow.innerHTML += "<-- "+message + '<br>';       //  take the socket data packet and add it to the chat window
});
