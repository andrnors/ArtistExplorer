/** Created by Andreas on 05-Sep-16.*/

$('#startButton').click(function () {
    // Checks if browser supports speech api
    if (!("webkitSpeechRecognition" in window)) {
        q.placeholder = "Sorry, it does not seem like your browser support speech recognition. Try using Google Chrome.";

    }else{
        recognition.lang = selectLanguage.value;  // Sets language to selected language
        recognition.start();

    }
});


var recognition = new webkitSpeechRecognition();
recognition.onresult = function (event) {
    if (event.results.length > 0) { // checks that there are a result
        q.value = event.results[0][0].transcript;
        result = q.value;
    }
};

recognition.onend = function (event) {
    if (event.result.length == 0){
        q.value = "heu";
    }
};


