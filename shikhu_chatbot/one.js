
function chat(){

return `
<div id="chatbot_div">
<button style="font-size: 20px" class="open-chat" onclick="openForm()"><i class="fa-solid fa-comment"></i>
    chat</button>
</div>


<div class="chat-popup" id="chatForm">
<form action="/action_page.php" class="chatform-container">

    <div id="chat_header">

        <div>
            <h2 style="color:white ">Desktime</h2>
        </div>

        <button type="button" class="chatclose" onclick="closeForm()"><i class="fa-solid fa-minus"></i></button>

    </div>

    <div class="chat-body">
        <img style="width:15%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQ_onoYbmvRV95-bEl7OIsM8JvD0a6uEAeg&usqp=CAU"
            alt="">
        <span id="chatid"></span>
        <span id="chatid2"></span>
        <span id="chatid3"></span>
        <br><br>
        <a target="blank" href="https://calendly.com/sales-desktime/desktime-demo?month=2022-08"><span
                id="chatid4"></span></a>
        <br><br>
        
        <span id="chatid6"></span>
        <br><br>
        <a href="booklivechat.html" target="Blank"><span id="chatid7"></span></a>
        <br><br>
        <span id="chatid8"></span>
        <br><br>
        <a href="live_chat.html"><span id="chatid9"></span></a>
    </div>

    <div id="chat_footer">
        <div id="chatdiv">
            <textarea placeholder="Type your question here.." id="chats" required></textarea>
            <a style="text-decoration:none ; color:rgb(90, 87, 87) "
                href="https://www.zendesk.co.uk/embeddables/?utm_source=webwidget&utm_medium=poweredbyzendesk&utm_campaign=image">zendesk</a>
        </div>
    </div>
    <div class="send">

    </div>


</form>

</div>
`
}
export default chat();