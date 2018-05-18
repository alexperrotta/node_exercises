let socket = io();

let btnSend = document.getElementById("btnSend")
let chatMessageTextBox = document.getElementById("chatMessageTextBox")
let chatMessagesList = document.getElementById("chatMessagesList")
let usernameTextBox = document.getElementById("username")

btnSend.addEventListener('click',function(){

  let messageObject = {
    message: chatMessageTextBox.value,
    username: usernameTextBox.value,
  }
  // emit means sending to the channel/room
  socket.emit('message',messageObject)

})

// listening to that channel
socket.on('message',function(messageObject){
  let chatMessageLI = document.createElement("li")
  chatMessageLI.innerHTML = messageObject.username + ': ' + messageObject.message;
  chatMessagesList.appendChild(chatMessageLI)
})

/*
let btnSend = document.getElementById("btnSend")
btnSend.addEventListener('click',function(){
  let chatMessage = chatMessageTextBox.value
  socket.emit('chat message',chatMessage)
})


socket.on('chat message',function(message){

  let li = document.createElement("li")
  li.innerHTML = message
  chatMessages.appendChild(li)

})

// update users count
socket.on('update users count',function(count){
  totalUsersCountHeading.innerHTML = count
}) */
