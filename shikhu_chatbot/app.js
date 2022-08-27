


import chatBotservice from "./chatbotservice.js";

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
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};




const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
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

const getChatbotResponse = (userInput) => {
  return chatBotservice.getBotResponse(userInput)== undefined
    ? " Hey!Thank you for reaching us!How may we assist you?"
    // ?"please enter something else"
    : chatBotservice.getBotResponse(userInput);
};





const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};