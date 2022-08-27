





function openForm() {
  document.getElementById("chatForm").style.display = "block";
 
  setTimeout(() => {
    document.getElementById("chatid").innerText="Hi! Welcome to DeskTime."
 }, 1000);



setTimeout(() => {
  document.getElementById("chatid2").innerText="Here are some top suggestions for you:"
}, 2000);


setTimeout(() => {
document.getElementById("chatid3").innerText="Schedule a call for your suitable date and time"
}, 3000);


setTimeout(() => {
document.getElementById("chatid4").innerText="Book a free Demo call"
}, 4000);



setTimeout(() => {
document.getElementById("chatid6").innerText="leave a message our agent will connect you soon"
}, 5000);

setTimeout(() => {
document.getElementById("chatid7").innerText="Leave message"
}, 6000);


setTimeout(() => {
document.getElementById("chatid8").innerText="get connected with live chat"
}, 7000);

setTimeout(() => {
document.getElementById("chatid9").innerText="Live chat"
}, 8000);

}

function closeForm() {
  document.getElementById("chatForm").style.display = "none";
}


const chatBody = document.querySelector(".chat-body");
const chats = document.querySelector("#chats");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

chats.addEventListener("keyup", (event) => {
if (event.keyCode === 13) {
  renderUserMessage();
}
});

const renderUserMessage = () => {
const userInput = chats.value;
renderMessageEle(userInput, "user");
chats.value = "";

};

const renderMessageEle = (txt, type) => {
let className = "user-message";
if (type !== "user") {
  className = "chatbot-message";
}
const messageEle = document.createElement("div");
const txtNode = document.createTextNode(txt);
messageEle.classList.add(className);
messageEle.append(txtNode);
chatBody.append(messageEle);
};

