const responseObj = {
    hello: "Hey ! How are you doing ?",
    hey: "Hey! What's Up",
    today: new Date().toDateString(),
    date:new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
  };

const fetchResponse = (userInput)=> {
    return responseObj[userInput];
};



  const chatBotservice={
   getBotResponse(userInput){
    return fetchResponse(userInput);
   },
  };

  export default chatBotservice;