var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;
    return time;
}
async function getBotResponse(userText) {
    const apiUrl = "https://drab-erin-squirrel-wrap.cyclic.cloud";
    try {
      const response = await fetch(`${apiUrl}/answer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: userText }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Oops! Something went wrong.";
    }
  }
function firstBotMessage() {
    let firstMessage = "Ask anything about me !"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    let time = getTime();
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();
async function getHardResponse(userText) {
    try {
      let botResponse = await getBotResponse(userText);
      let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
      $("#chatbox").append(botHtml);
      document.getElementById("chat-bar-bottom").scrollIntoView(true);
    } catch (error) {
      console.error("Error getting bot response:", error);
      let errorMessage = "Oops! Something went wrong.";
      let botHtml = '<p class="botText"><span>' + errorMessage + '</span></p>';
      $("#chatbox").append(botHtml);
      document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }
  }
function getResponse() {
    let userText = $("#textInput").val();
    if (userText == "") {
        userText = "Sorry ";
    }
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
function sendButton() {
    getResponse();
}
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
